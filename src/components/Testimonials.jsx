import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    { id: 1, name: 'Dr. Emily Chen', role: 'Cardiologist', text: 'Viruj Health has completely transformed how I manage patient records. It is intuitive and secure.', rating: 5, color: '#e3f2fd' },
    { id: 2, name: 'Mark Thompson', role: 'Patient', text: 'I love the medication reminders. I haven\'t missed a dose in months!', rating: 5, color: '#e0f2f1' },
    { id: 3, name: 'Sarah Jenkins', role: 'Clinic Manager', text: 'The analytics dashboard gives us insights we never had before. Highly recommended.', rating: 5, color: '#f3e5f5' },
    { id: 4, name: 'James Wilson', role: 'Patient', text: 'Teleconsultations are so smooth. No more waiting rooms!', rating: 4, color: '#fff3e0' },
];

const Testimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.from(containerRef.current.children, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, []);

    return (
        <section style={{ padding: '100px 0', background: '#f9fbfd' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Trusted by thousands.</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>See what doctors and patients are saying.</p>
                </div>

                <div ref={containerRef} style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            style={{
                                background: 'white',
                                padding: '30px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                position: 'relative',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', scale: 1.02 });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.03)', scale: 1 });
                            }}
                        >
                            <FaQuoteLeft size={30} color={t.color} style={{ marginBottom: '20px', filter: 'brightness(0.9)' }} />
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', color: '#555' }}>"{t.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontWeight: '700', color: '#333' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#888' }}>{t.role}</div>
                                </div>
                                <div style={{ display: 'flex', gap: '2px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color={i < t.rating ? "#ffc107" : "#e4e5e9"} size={14} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
