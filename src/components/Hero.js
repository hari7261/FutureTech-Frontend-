import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const ParticleBackground = () => {
    const particlesRef = useRef(null);

    useEffect(() => {
        const canvas = particlesRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 0.5 - 0.25,
                speedY: Math.random() * 0.5 - 0.25
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={particlesRef} className="absolute inset-0 -z-10" />;
};

const AnimatedSphere = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#4F46E5" attach="material" distort={0.3} speed={1.5} roughness={0} />
        </Sphere>
    );
};

const Button = ({ children, primary }) => {
    const baseClasses = "px-6 py-3 font-semibold rounded-lg shadow-lg transform transition-all hover:scale-105";
    const primaryClasses = "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white animate-pulse";
    const secondaryClasses = "border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10";

    return (
        <button className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}>
            {children}
        </button>
    );
};

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
            <ParticleBackground />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500 bg-indigo-500/10 backdrop-blur-sm mb-8 animate-pulse">
                            <span className="text-sm text-indigo-300">🚀 Welcome to the future</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-wider">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                                Transform Your Digital Reality
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            Harness the power of AI to create extraordinary digital experiences that transcend imagination and redefine possibility.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button primary>Initiate Free Trial</Button>
                            <Button>Experience Demo</Button>
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse filter blur-3xl" />
                        <Canvas className="rounded-2xl border border-indigo-500/30 shadow-2xl">
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <OrbitControls enableZoom={false} />
                            <AnimatedSphere />
                        </Canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;