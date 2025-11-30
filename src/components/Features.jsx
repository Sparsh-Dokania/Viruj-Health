import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStethoscope, FaPills, FaFileMedical, FaUserMd, FaHeartbeat } from 'react-icons/fa';

gsap.registerPlugin(Draggable, ScrollTrigger);

const features = [
    { id: 1, title: 'Symptom Checker', icon: <FaStethoscope />, desc: 'AI-powered analysis in seconds.', color: 'var(--primary-blue)' },
    { id: 2, title: 'Smart Reminders', icon: <FaPills />, desc: 'Never miss a dose again.', color: 'var(--secondary-teal)' },
    { id: 3, title: 'Digital Records', icon: <FaFileMedical />, desc: 'All your history, one secure place.', color: '#6610f2' },
    { id: 4, title: 'Teleconsultation', icon: <FaUserMd />, desc: 'Connect with specialists instantly.', color: '#fd7e14' },
    { id: 5, title: 'Vitals Tracking', icon: <FaHeartbeat />, desc: 'Monitor trends over time.', color: '#e83e8c' },
];

const Features = () => {
    const containerRef = useRef(null);
    const railRef = useRef(null);

    useEffect(() => {
        // Draggable Logic
        Draggable.create(railRef.current, {
            type: "x",
            bounds: containerRef.current,
            inertia: true,
            edgeResistance: 0.65,
            onDrag: function () {
                // Optional: Add scale effect on drag
            }
        });

        // ScrollTrigger for Entrance
        gsap.from(railRef.current.children, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

    }, []);

    return (
        <section style={{ padding: '100px 0', overflow: 'hidden', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Everything you need for better health.</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>Powerful tools to manage your well-being, all in one app.</p>
                </div>
            </div>

            {/* Draggable Rail Container */}
            <div ref={containerRef} style={{ width: '100%', cursor: 'grab' }}>
                <div ref={railRef} style={{ display: 'flex', gap: '30px', padding: '0 5vw', width: 'max-content' }}>
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card" style={{
                            minWidth: '300px',
                            height: '380px',
                            background: '#f9fbfd',
                            borderRadius: '24px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: '1px solid #eee',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            userSelect: 'none'
                        }}
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', scale: 1.02 });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, { y: 0, boxShadow: 'none', scale: 1 });
                            }}
                        >
                            <div>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    background: feature.color,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    marginBottom: '20px'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-light)' }}>{feature.desc}</p>
                            </div>

                            {/* Micro-Interaction Placeholder */}
                            <div style={{
                                height: '100px',
                                background: 'white',
                                borderRadius: '12px',
                                border: '1px dashed #ddd',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                color: '#aaa'
                            }}>
                                Interactive Widget
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
