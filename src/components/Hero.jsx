import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const mockupRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Text Animations
        tl.fromTo(textRef.current.children,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
        );

        // Mockup Animation
        tl.fromTo(mockupRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2 },
            "-=0.8"
        );

        // Particles Loop
        gsap.to(particlesRef.current.children, {
            y: "+=15",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                amount: 1,
                from: "random"
            }
        });

        // Pointer-driven subtle parallax for particles & mockup
        const handlePointerMove = (e) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width; // 0..1
            const y = (e.clientY - rect.top) / rect.height; // 0..1
            const xNorm = (x - 0.5) * 2; // -1..1
            const yNorm = (y - 0.5) * 2; // -1..1

            const particles = particlesRef.current ? Array.from(particlesRef.current.children) : [];
            particles.forEach((el, i) => {
                const depth = (i + 1) / Math.max(1, particles.length); // deeper elements move more
                const moveX = xNorm * (8 * depth); // px
                const moveY = yNorm * (6 * depth);
                gsap.to(el, { x: moveX, y: moveY, duration: 0.6, ease: 'power3.out' });
            });

            // Slight mockup parallax (opposite direction for depth feel)
            if (mockupRef.current) {
                gsap.to(mockupRef.current, { x: xNorm * -6, y: yNorm * -4, duration: 0.8, ease: 'power3.out' });
            }
        };

        const handlePointerLeave = () => {
            const particles = particlesRef.current ? Array.from(particlesRef.current.children) : [];
            particles.forEach((el) => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' }));
            if (mockupRef.current) gsap.to(mockupRef.current, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
        };

        const heroEl = heroRef.current;
        if (heroEl) {
            heroEl.addEventListener('pointermove', handlePointerMove);
            heroEl.addEventListener('pointerleave', handlePointerLeave);
        }

        // cleanup listeners on unmount
        return () => {
            if (heroEl) {
                heroEl.removeEventListener('pointermove', handlePointerMove);
                heroEl.removeEventListener('pointerleave', handlePointerLeave);
            }
        };

    }, []);

    return (
        <section ref={heroRef} style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Gradient Blob */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 179, 159, 0.1) 0%, rgba(2, 117, 216, 0.05) 50%, transparent 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

                {/* Left Content */}
                <div ref={textRef}>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '20px' }}>
                        Stop Managing Health
                        <span className="gradient-text"> Start<br />Improving It</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '500px' }}>
                        The intelligent platform that brings your medical records, teleconsultations, and daily wellness into one secure place.
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button style={{
                            background: 'var(--primary-blue)',
                            color: 'white',
                            padding: '14px 32px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            boxShadow: '0 10px 25px rgba(2, 117, 216, 0.4)',
                            transition: 'transform 0.2s'
                        }}
                            onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05 })}
                            onMouseLeave={(e) => gsap.to(e.target, { scale: 1 })}
                        >
                            Create Free Account
                        </button>
                        <button style={{
                            background: 'white',
                            color: 'var(--text-medium)',
                            padding: '14px 32px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            border: '1px solid #eee',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                        }}>
                            <FaPlay size={12} color="var(--primary-blue)" /> Watch 30s Demo
                        </button>
                    </div>
                </div>

                {/* Right Content - Mockup */}
                <div style={{ position: 'relative' }}>
                    <div ref={mockupRef} style={{
                        position: 'relative',
                        zIndex: 2,
                        background: 'white',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        padding: '20px',
                        border: '8px solid #fff',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}>
                        {/* Mockup Screen */}
                        <div style={{
                            background: '#f4f7fa',
                            borderRadius: '16px',
                            height: '500px',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                            {/* Header */}
                            <div style={{ padding: '20px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: '700', color: 'var(--primary-blue)' }}>Viruj</div>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#eee' }}></div>
                            </div>
                            {/* Content Mock */}
                            <div style={{ padding: '20px' }}>
                                <div style={{ background: 'white', padding: '15px', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '5px' }}>Upcoming Appointment</div>
                                    <div style={{ fontWeight: '600' }}>Dr. Sarah Jenkins</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--secondary-teal)' }}>Today, 2:00 PM</div>
                                </div>
                                <div style={{ background: 'white', padding: '15px', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '5px' }}>Daily Vitals</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>72</div>
                                            <div style={{ fontSize: '0.7rem' }}>BPM</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>98%</div>
                                            <div style={{ fontSize: '0.7rem' }}>O2</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Particles */}
                    <div ref={particlesRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '60px', height: '60px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>❤️</div>
                        <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '50px', height: '50px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>💊</div>
                        <div style={{ position: 'absolute', top: '40%', left: '-15%', width: '40px', height: '40px', background: 'var(--secondary-teal)', borderRadius: '50%', opacity: 0.2 }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
