import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
    { question: 'Is my data secure?', answer: 'Absolutely. We use HIPAA-grade encryption for all data storage and transmission.' },
    { question: 'Can I use Viruj Health for my family?', answer: 'Yes! Our Pro plan allows you to manage profiles for your entire family.' },
    { question: 'How does the teleconsultation work?', answer: 'Simply search for a specialist, book a slot, and join the video call from the app.' },
    { question: 'Is there a free trial?', answer: 'We offer a free forever plan with basic features, so you can try it out risk-free.' },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const answersRef = useRef([]);
    const iconsRef = useRef([]);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            // Close
            gsap.to(answersRef.current[index], { height: 0, opacity: 0, duration: 0.3 });
            gsap.to(iconsRef.current[index], { rotation: 0, duration: 0.3 });
            setActiveIndex(null);
        } else {
            // Close previous if any
            if (activeIndex !== null) {
                gsap.to(answersRef.current[activeIndex], { height: 0, opacity: 0, duration: 0.3 });
                gsap.to(iconsRef.current[activeIndex], { rotation: 0, duration: 0.3 });
            }
            // Open new
            setActiveIndex(index);
            gsap.to(answersRef.current[index], { height: 'auto', opacity: 1, duration: 0.3 });
            gsap.to(iconsRef.current[index], { rotation: 180, duration: 0.3 });
        }
    };

    return (
        <section style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Frequently Asked Questions</h2>
                </div>

                <div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                borderBottom: '1px solid #eee',
                                marginBottom: '20px',
                                paddingBottom: '20px'
                            }}
                        >
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    padding: '10px 0'
                                }}
                            >
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '500' }}>{faq.question}</h3>
                                <div ref={el => iconsRef.current[index] = el}>
                                    <FaChevronDown style={{ color: 'var(--primary-blue)' }} />
                                </div>
                            </div>
                            <div
                                ref={el => answersRef.current[index] = el}
                                style={{
                                    height: 0,
                                    opacity: 0,
                                    overflow: 'hidden',
                                    color: '#666',
                                    lineHeight: '1.6'
                                }}
                            >
                                <div style={{ paddingTop: '10px' }}>{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
