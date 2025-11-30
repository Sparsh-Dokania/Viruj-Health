import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metricsData = [
    { id: 1, value: 1000000, label: 'Records Stored', suffix: '+' },
    { id: 2, value: 95, label: 'Satisfaction Rate', suffix: '%' },
    { id: 3, value: 2, label: 'Onboarding Time', suffix: ' min', prefix: '<' },
];

const Metrics = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = containerRef.current.children;

        gsap.fromTo(elements,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            }
        );

        // Count-up Animation
        metricsData.forEach((metric, index) => {
            const element = elements[index].querySelector('.metric-value');
            const targetValue = metric.value;

            ScrollTrigger.create({
                trigger: elements[index],
                start: "top 85%",
                onEnter: () => {
                    gsap.to(element, {
                        innerText: targetValue,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: "power1.out",
                        onUpdate: function () {
                            // Format number with commas for large numbers
                            if (targetValue > 1000) {
                                element.innerText = Math.ceil(this.targets()[0].innerText).toLocaleString();
                            } else {
                                element.innerText = Math.ceil(this.targets()[0].innerText);
                            }
                        }
                    });
                }
            });
        });

    }, []);

    return (
        <section style={{ padding: '60px 0', background: 'linear-gradient(90deg, var(--primary-blue), var(--secondary-teal))', color: 'white' }}>
            <div className="container">
                <div ref={containerRef} style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', textAlign: 'center' }}>
                    {metricsData.map((metric) => (
                        <div key={metric.id} style={{ flex: '1 1 200px' }}>
                            <div style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '10px' }}>
                                {metric.prefix}<span className="metric-value">0</span>{metric.suffix}
                            </div>
                            <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
