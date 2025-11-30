import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUserPlus, FaUserMd, FaChartLine } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { id: 1, title: 'Create Profile', desc: 'Sign up in seconds and securely upload your medical history.', icon: <FaUserPlus /> },
    { id: 2, title: 'Connect & Consult', desc: 'Find specialists and book teleconsultations instantly.', icon: <FaUserMd /> },
    { id: 3, title: 'Track & Improve', desc: 'Monitor your vitals and get personalized health insights.', icon: <FaChartLine /> },
];

const HowItWorks = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        // Vertical Line Animation
        gsap.fromTo(lineRef.current,
            { height: '0%' },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            }
        );

        // Steps Animation
        stepsRef.current.forEach((step, index) => {
            gsap.from(step, {
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%",
                }
            });
        });

    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '100px 0', background: '#fff', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>How it works</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>Three simple steps to better health.</p>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: '#eee',
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }}>
                        <div ref={lineRef} style={{
                            width: '100%',
                            background: 'var(--primary-blue)',
                            height: '0%'
                        }}></div>
                    </div>

                    {/* Steps */}
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            ref={el => stepsRef.current[index] = el}
                            style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                                alignItems: 'center',
                                marginBottom: '80px',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {/* Center Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '20px',
                                height: '20px',
                                background: 'white',
                                border: '4px solid var(--primary-blue)',
                                borderRadius: '50%',
                                zIndex: 2
                            }}></div>

                            {/* Content Card */}
                            <div style={{
                                width: '45%',
                                padding: '30px',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                textAlign: index % 2 === 0 ? 'right' : 'left',
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                                alignItems: 'center',
                                gap: '20px'
                            }}>
                                <div style={{
                                    fontSize: '2rem',
                                    color: 'var(--primary-blue)',
                                    background: '#f0f4f8',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    display: 'flex'
                                }}>
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-light)' }}>{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
