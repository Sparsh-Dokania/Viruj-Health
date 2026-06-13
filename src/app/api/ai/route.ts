import { NextResponse } from 'next/server';

const encoder = new TextEncoder();

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
    const query = lastUserMessage.toLowerCase();
    let responseText = '';

    if (query.includes('glucose') || query.includes('sugar') || query.includes('diabetic')) {
      responseText = `A fasting blood glucose level of 108 mg/dL is slightly elevated. While the normal range is typically 70-99 mg/dL, 108 mg/dL falls into the pre-diabetic range (100-125 mg/dL). 

We recommend discussing these results with an endocrinologist or general medicine practitioner. They can guide you on lifestyle adjustments, dietary modifications, and monitor your glucose trends to prevent progression.`;
    } else if (query.includes('heart') || query.includes('cardiac') || query.includes('chest') || query.includes('pulse')) {
      responseText = `Thank you for sharing your query regarding cardiovascular health. 

Please note that symptoms like chest pain, pressure, or irregular heartbeats require immediate evaluation. Viruj AI cannot diagnose cardiac conditions. We recommend booking a priority consultation with an Interventional Cardiologist.`;
    } else if (query.includes('headache') || query.includes('brain') || query.includes('dizzy') || query.includes('sleep')) {
      responseText = `Chronic headaches, dizziness, or sleep disturbances can have multiple neural or systemic causes. 

We recommend booking a consultation with a Neurologist to evaluate these symptoms thoroughly through targeted neuro-assessments.`;
    } else {
      responseText = `Thank you for consulting Viruj Health. I can explain lab reports, summarize symptoms, and help you find the right medical specialist. 

To help me understand, could you specify your symptoms or describe your lab reports? For personalized care, we highly recommend booking a video or in-person consultation with one of our specialized doctors.`;
    }

    responseText += `\n\n*Clinical Disclaimer: I am an AI assistant, not a doctor. This information is for informational and educational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician for any medical concerns.*`;

    const stream = new ReadableStream({
      async start(controller) {
        const words = responseText.split(' ');
        for (const word of words) {
          controller.enqueue(encoder.encode(word + ' '));
          await new Promise((resolve) => setTimeout(resolve, 40));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    console.error('AI API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
