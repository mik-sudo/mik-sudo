import { useState, useEffect } from 'react'

export const StarBackground = () => {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        generateParticles();

        const handleResize = () => {
            generateParticles();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const generateParticles = () => {
        const count = Math.floor((window.innerWidth * window.innerHeight) / 18000);
        const newParticles = [];

        for (let i = 0; i < count; i++) {
            const duration = Math.random() * 10 + 12;
            const delay = -Math.random() * duration;

            newParticles.push({
                id: i,
                size: Math.random() * 3 + 3,
                x: Math.random() * 100,
                y: Math.random() * 100 + 100,
                opacity: Math.random() * 0.3 + 0.7,
                duration: duration,
                delay: delay
            })
        }

        setParticles(newParticles);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <div key={p.id} className="particle animate-rise" style={{
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    opacity: p.opacity,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                }}/>
            ))}
        </div>
    ) 
}