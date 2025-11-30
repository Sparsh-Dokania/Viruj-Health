import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaShieldAlt } from 'react-icons/fa';
import logoSrc from '../assets/no_bg_logo.png';

const Footer = () => {
    return (
        <footer style={{ background: '#111', color: 'white', padding: '80px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={logoSrc} alt="Viruj Health" style={{ height: '48px', display: 'block' }} />
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
                                <span>Viruj</span><span style={{ color: 'var(--primary-blue)' }}>Health</span>
                            </div>
                        </div>
                        <p style={{ color: '#888', marginBottom: '20px' }}>
                            Empowering you to take control of your health journey with security and ease.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <FaTwitter size={20} style={{ color: 'var(--footer-muted)', cursor: 'pointer' }} />
                            <FaLinkedin size={20} style={{ color: 'var(--footer-muted)', cursor: 'pointer' }} />
                            <FaInstagram size={20} style={{ color: 'var(--footer-muted)', cursor: 'pointer' }} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px' }}>Platform</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--footer-muted)' }}>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Features</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Pricing</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Demo</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Login</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px' }}>Company</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--footer-muted)' }}>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>About Us</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Careers</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Blog</li>
                            <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Contact</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px' }}>Stay Updated</h4>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    background: '#222',
                                    border: 'none',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    color: 'white',
                                    width: '100%'
                                }}
                            />
                            <button style={{
                                background: 'var(--primary-blue)',
                                color: 'white',
                                padding: '12px 20px',
                                borderRadius: '8px',
                                fontWeight: '600'
                            }}>Go</button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--footer-muted)', fontSize: '0.8rem' }}>
                            <FaShieldAlt style={{ color: 'var(--secondary-teal)' }} /> HIPAA Compliant & Encrypted
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.02)', paddingTop: '40px', textAlign: 'center', color: 'var(--footer-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Viruj Health Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
