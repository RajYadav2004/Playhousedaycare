import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Heart, Stars, MapPin, Phone, Mail, BookOpen, Music, Palette, Smile, Camera, Zap, Theater, Sprout } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Overlay() {
    const handleEnroll = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFB7C5', '#B7E4C7', '#FFD97D', '#A2D2FF']
        });
    };

    const activities = [
        { name: 'Art', icon: <Palette size={18} />, color: '#FFB7C5' },
        { name: 'Music', icon: <Music size={18} />, color: '#A2D2FF' },
        { name: 'Stories', icon: <BookOpen size={18} />, color: '#FFD97D' },
        { name: 'Outside', icon: <Smile size={18} />, color: '#B7E4C7' }
    ];

    return (
        <div className="overlay">
            {/* Hero Section */}
            <section className="section" id="home">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', color: '#2D3142', marginBottom: '16px', lineHeight: 1.1 }}>
                            Where <span style={{ color: '#FFB7C5' }}>Little Minds</span><br />
                            Grow <span style={{ color: '#B7E4C7' }}>Big!</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', maxWidth: '500px', marginBottom: '32px', color: '#4F5D75' }}>
                            Meet **Pody 🐘**, our friendly guide! Join us for a magical journey of discovery, creativity, and play.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '30px' }}>
                            <button className="btn-primary" onClick={handleEnroll}>Enroll Now</button>
                            <button className="btn-secondary" style={{ background: 'white', color: '#2D3142', boxShadow: '0 6px 0 #DDD' }}>Book Visit</button>
                        </div>
                    </Motion.div>

                    {/* Activities Grid in Hero - Hidden on very small screens to keep UI clean, scroll reveals them */}
                    <Motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                    >
                        {activities.map((activity) => (
                            <div
                                key={activity.name}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    padding: '8px 16px',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: `1.5px solid ${activity.color}`,
                                    fontSize: '0.85rem'
                                }}
                            >
                                <span style={{ color: activity.color }}>{activity.icon}</span>
                                <span style={{ fontWeight: '600', color: '#2D3142' }}>{activity.name}</span>
                            </div>
                        ))}
                    </Motion.div>
                </div>
            </section>

            {/* About Us */}
            <section className="section" id="about">
                <Motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-card"
                    style={{ maxWidth: '600px', alignSelf: 'flex-start' }}
                >
                    <h2 style={{ color: '#FFD97D', marginBottom: '16px', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>Kiducation Model</h2>
                    <p style={{ marginBottom: '24px', fontSize: '1rem', lineHeight: '1.6', color: '#4F5D75' }}>
                        Inspired by the best pedagogical practices, we focus on **Life Skills**, **Value Education**, and **Self-Discovery**.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <Heart size={18} color="#FFB7C5" /> <span>Empathy Care</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <Stars size={18} color="#FFD97D" /> <span>Discovery</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <Theater size={18} color="#A2D2FF" /> <span>Drama</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <Sprout size={18} color="#B7E4C7" /> <span>Nature</span>
                        </div>
                    </div>
                </Motion.div>
            </section>

            {/* Activities Detailed Section */}
            <section className="section" id="activity-details">
                <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', textAlign: 'center', marginBottom: '40px' }}>Signature Experiences</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <ActivityDetailCard
                        title="Puppet Theater"
                        desc="Where stories come to life! Build confidence and linguistic skills."
                        color="#A2D2FF"
                        image="https://picsum.photos/seed/puppet/400/300"
                    />
                    <ActivityDetailCard
                        title="Discovery Garden"
                        desc="From seed to sprout! Children learn about biology in nature."
                        color="#B7E4C7"
                        image="https://picsum.photos/seed/garden1/400/300"
                    />
                    <ActivityDetailCard
                        title="Creative Hub"
                        desc="Art therapy and clay modeling to enhance motor skills."
                        color="#FFB7C5"
                        image="https://picsum.photos/seed/art1/400/300"
                    />
                </div>
            </section>

            {/* Programs */}
            <section className="section" id="programs">
                <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', textAlign: 'center', marginBottom: '40px' }}>Guided Programs</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <ProgramCard
                        title="Toddler (18m-3y)"
                        icon={<Music />}
                        color="#FFB7C5"
                        desc="Sensory play and social development for explorers."
                    />
                    <ProgramCard
                        title="Preschool (3y-5y)"
                        icon={<Palette />}
                        color="#B7E4C7"
                        desc="Foundations in literacy, math, and expression."
                    />
                    <ProgramCard
                        title="Discovery Club"
                        icon={<Stars />}
                        color="#FFD97D"
                        desc="Advanced project-based learning for curious minds."
                    />
                </div>
            </section>

            {/* Contact */}
            <section className="section" id="contact">
                <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: 'clamp(1.8rem, 6vw, 2.5rem)' }}>Join the Magic</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: '#A2D2FF', padding: '12px', borderRadius: '50%' }}><MapPin color="white" size={20} /></div>
                                <div>
                                    <strong style={{ fontSize: '1rem' }}>Visit Us</strong>
                                    <p style={{ color: '#4F5D75', fontSize: '0.9rem' }}>123 Playful Lane, Magic City</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ background: '#FFB7C5', padding: '12px', borderRadius: '50%' }}><Phone color="white" size={20} /></div>
                                <div>
                                    <strong style={{ fontSize: '1rem' }}>Contact</strong>
                                    <p style={{ color: '#4F5D75', fontSize: '0.9rem' }}>hello@magicdaycare.com</p>
                                </div>
                            </div>
                        </div>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="text" placeholder="Name" style={inputStyle} />
                            <input type="email" placeholder="Email" style={inputStyle} />
                            <textarea placeholder="Message..." rows="3" style={inputStyle}></textarea>
                            <button type="submit" className="btn-primary" style={{ marginTop: 0 }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProgramCard({ title, icon, color, desc }) {
    return (
        <Motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{ borderTop: `8px solid ${color}` }}
        >
            <div style={{ background: color, width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '20px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.2rem' }}>{title}</h3>
            <p style={{ color: '#4F5D75', marginTop: '10px', fontSize: '0.95rem' }}>{desc}</p>
        </Motion.div>
    );
}

function ActivityDetailCard({ title, desc, color, image }) {
    return (
        <Motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card"
            style={{ padding: '0', overflow: 'hidden' }}
        >
            <img src={image} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
                <h3 style={{ borderLeft: `5px solid ${color}`, paddingLeft: '12px', marginBottom: '12px', fontSize: '1.2rem' }}>{title}</h3>
                <p style={{ color: '#4F5D75', fontSize: '0.95rem' }}>{desc}</p>
            </div>
        </Motion.div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    borderRadius: 'var(--radius-md)',
    border: '2px solid #E0F2F1',
    background: 'white',
    fontFamily: 'var(--font-main)',
    outline: 'none',
    fontSize: '0.95rem'
};
