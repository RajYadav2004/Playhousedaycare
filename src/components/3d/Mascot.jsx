import React from 'react';
import { Float, Html } from '@react-three/drei';

export function ElephantMascot({ position, rotation, scale = 1 }) {
    return (
        <group position={position} rotation={rotation} scale={scale}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Body */}
                <mesh position={[0, 1.2, 0]} castShadow>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#A2D2FF" />
                </mesh>

                {/* Head */}
                <mesh position={[0, 2.2, 0.5]} castShadow>
                    <sphereGeometry args={[0.7, 32, 32]} />
                    <meshStandardMaterial color="#A2D2FF" />
                </mesh>

                {/* Ears */}
                <mesh position={[-0.8, 2.5, 0.3]} rotation={[0, -0.5, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshStandardMaterial color="#FFB7C5" />
                </mesh>
                <mesh position={[0.8, 2.5, 0.3]} rotation={[0, 0.5, 0]}>
                    <boxGeometry args={[0.8, 0.8, 0.1]} />
                    <meshStandardMaterial color="#FFB7C5" />
                </mesh>

                {/* Trunk */}
                <mesh position={[0, 1.9, 1.1]} rotation={[0.4, 0, 0]}>
                    <capsuleGeometry args={[0.15, 0.8, 8, 16]} />
                    <meshStandardMaterial color="#A2D2FF" />
                </mesh>

                {/* Eyes & Glasses (Podar style) */}
                <group position={[0, 2.3, 1.15]}>
                    {/* Eyes */}
                    <mesh position={[-0.2, 0.1, 0]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial color="#2D3142" />
                    </mesh>
                    <mesh position={[0.2, 0.1, 0]}>
                        <sphereGeometry args={[0.05, 8, 8]} />
                        <meshStandardMaterial color="#2D3142" />
                    </mesh>
                    {/* Glasses Frame */}
                    <mesh position={[0, 0.1, 0.05]}>
                        <boxGeometry args={[0.7, 0.05, 0.02]} />
                        <meshStandardMaterial color="black" />
                    </mesh>
                </group>

                {/* Megaphone (Podar style) */}
                <group position={[0.8, 1, 0.8]} rotation={[0, 0.5, -0.5]}>
                    <mesh castShadow>
                        <coneGeometry args={[0.2, 0.6, 16]} />
                        <meshStandardMaterial color="#FFD97D" />
                    </mesh>
                </group>

                <Html position={[0, 3.5, 0]} center>
                    <div style={{
                        background: '#FFD97D',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: '#2D3142',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        I'm Pody! 🐘
                    </div>
                </Html>
            </Float>
        </group>
    );
}
