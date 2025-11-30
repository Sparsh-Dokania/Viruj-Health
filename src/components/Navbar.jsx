import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShieldAlt, FaClock } from 'react-icons/fa';
import logoSrc from '../assets/no_bg_logo.png';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const trustBarRef = useRef(null);

  useEffect(() => {
    // Trust Bar Animation
    gsap.fromTo(trustBarRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Navbar Shrink on Scroll
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 50) {
           gsap.to(navRef.current, { 
             height: '70px', 
             backgroundColor: 'rgba(255, 255, 255, 0.95)',
             boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
             duration: 0.3 
           });
           gsap.to(logoRef.current, { scale: 0.92, duration: 0.3 });
           gsap.to(trustBarRef.current, { height: 0, opacity: 0, overflow: 'hidden', padding: 0, duration: 0.3 });
        } else if (self.direction === -1 && self.scroll() < 50) {
           gsap.to(navRef.current, { 
             height: '90px', 
             backgroundColor: 'rgba(255, 255, 255, 0.7)',
             boxShadow: 'none',
             duration: 0.3 
           });
           gsap.to(logoRef.current, { scale: 1, duration: 0.3 });
           gsap.to(trustBarRef.current, { height: 'auto', opacity: 1, padding: '8px 0', duration: 0.3 });
        }
      }
    });

  }, []);

  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      {/* Trust Bar */}
      <div ref={trustBarRef} style={{ 
        background: 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(250,250,250,0.95))',
        padding: '8px 0', 
        fontSize: '0.85rem', 
        color: 'var(--text-medium)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary-teal)' }}><FaShieldAlt style={{ color: 'var(--secondary-teal)' }} /> HIPAA-grade encryption</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-blue)' }}><FaClock style={{ color: 'var(--primary-blue)' }} /> 24/7 support</span>
          <span>Trusted by thousands</span>
        </div>
      </div>

      {/* Navbar */}
      <nav ref={navRef} className="glass-panel" style={{ 
        height: '90px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 40px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '100%',
        borderRadius: '0 0 16px 16px',
        borderTop: 'none',
        transition: 'background-color 0.3s'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <div ref={logoRef} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <img src={logoSrc} alt="VirujHealth" style={{ height: '48px', display: 'block' }} />
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Viruj</span><span style={{ color: 'var(--primary-blue)' }}>Health</span>
            </div>
          </div>

          {/* Menu */}
          <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
            {['Home', 'Features', 'Demo', 'Pricing', 'Contact'].map((item) => (
              <li key={item} style={{ cursor: 'pointer', fontWeight: '500', position: 'relative' }} className="nav-item">
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <button style={{ 
              background: 'transparent', 
              color: 'var(--primary-blue)', 
              fontWeight: '600', 
              fontSize: '1rem' 
            }}>Login</button>
            <button style={{ 
              background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-teal))', 
              color: 'white', 
              padding: '10px 24px', 
              borderRadius: '30px', 
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>Get Started</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
