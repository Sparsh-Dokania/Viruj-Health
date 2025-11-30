import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCheck } from 'react-icons/fa';

const plans = [
    { name: 'Free', price: 0, features: ['Basic Health Records', 'Symptom Checker', '1 Profile'] },
    { name: 'Pro', price: 12, features: ['Unlimited Records', 'Priority Support', 'Family Profiles', 'Smart Reminders'], popular: true },
    { name: 'Clinic', price: 49, features: ['Patient Management', 'Teleconsultation Suite', 'Analytics Dashboard', 'API Access'] },
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section style={{ padding: '100px 0', background: '#f9fbfd' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Simple, transparent pricing.</h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                        <span style={{ fontWeight: isYearly ? '400' : '600', color: isYearly ? '#888' : '#333' }}>Monthly</span>
                        <div
                            onClick={() => setIsYearly(!isYearly)}
                            style={{
                                width: '60px',
                                height: '30px',
                                background: '#ddd',
                                borderRadius: '30px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'background 0.3s'
                            }}
                        >
                            <div style={{
                                width: '26px',
                                height: '26px',
                                background: 'white',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '2px',
                                left: isYearly ? '32px' : '2px',
                                transition: 'left 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                            }}></div>
                        </div>
                        <span style={{ fontWeight: isYearly ? '600' : '400', color: isYearly ? '#333' : '#888' }}>Yearly <span style={{ fontSize: '0.8rem', color: 'var(--secondary-teal)' }}>(Save 20%)</span></span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            ref={el => cardsRef.current[index] = el}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '40px',
                                boxShadow: plan.popular ? '0 20px 50px rgba(145,12,18,0.12)' : '0 10px 30px rgba(0,0,0,0.05)',
                                border: plan.popular ? '2px solid var(--primary-blue)' : '1px solid #eee',
                                position: 'relative',
                                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                zIndex: plan.popular ? 2 : 1
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary-blue)',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
                            <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '30px', color: '#111' }}>
                                ${isYearly ? (plan.price * 12 * 0.8).toFixed(0) : plan.price}
                                <span style={{ fontSize: '1rem', color: '#888', fontWeight: '400' }}>/{isYearly ? 'yr' : 'mo'}</span>
                            </div>
                            <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                                {plan.features.map((feature) => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#555' }}>
                                        <FaCheck style={{ color: 'var(--secondary-teal)' }} /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <button style={{
                                width: '100%',
                                padding: '15px',
                                borderRadius: '12px',
                                background: plan.popular ? 'var(--primary-blue)' : '#f0f4f8',
                                color: plan.popular ? 'white' : 'var(--primary-blue)',
                                fontWeight: '600',
                                transition: 'background 0.2s'
                            }}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
