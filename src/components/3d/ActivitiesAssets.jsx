import React from 'react';
import { Float } from '@react-three/drei';

export function PuppetTheater({ position, rotation }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Structure */}
            <mesh position={[0, 1.5, 0]} castShadow>
                <boxGeometry args={[3, 3, 0.5]} />
                <meshStandardMaterial color="#FFB7C5" />
            </mesh>
            {/* Roof */}
            <mesh position={[0, 3.2, 0]} rotation={[0, 0, 0]}>
                <boxGeometry args={[3.2, 0.4, 0.6]} />
                <meshStandardMaterial color="#FFD97D" />
            </mesh>
            {/* Curtains */}
            <mesh position={[-0.8, 1.5, 0.26]}>
                <planeGeometry args={[1, 2]} />
                <meshStandardMaterial color="#A2D2FF" />
            </mesh>
            <mesh position={[0.8, 1.5, 0.26]}>
                <planeGeometry args={[1, 2]} />
                <meshStandardMaterial color="#A2D2FF" />
            </mesh>
            {/* Puppet (Stylized) */}
            <Float speed={5} rotationIntensity={1}>
                <mesh position={[0, 1.2, 0.3]}>
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="#B7E4C7" />
                </mesh>
            </Float>
        </group>
    );
}

export function GardeningPatch({ position, rotation }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Soil Box */}
            <mesh position={[0, 0.1, 0]} receiveShadow>
                <boxGeometry args={[4, 0.2, 2]} />
                <meshStandardMaterial color="#5D4037" />
            </mesh>
            {/* Sunflowers */}
            <Sunflower position={[-1.2, 0.2, -0.5]} />
            <Sunflower position={[0, 0.2, 0.5]} />
            <Sunflower position={[1.2, 0.2, -0.2]} />
        </group>
    );
}

function Sunflower({ position }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.8]} />
                <meshStandardMaterial color="#4CAF50" />
            </mesh>
            <Float speed={2} rotationIntensity={0.5}>
                <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 4, 0, 0]}>
                    <circleGeometry args={[0.2, 16]} />
                    <meshStandardMaterial color="#FFD97D" />
                </mesh>
                <mesh position={[0, 0.8, 0.01]} rotation={[Math.PI / 4, 0, 0]}>
                    <circleGeometry args={[0.08, 16]} />
                    <meshStandardMaterial color="#5D4037" />
                </mesh>
            </Float>
        </group>
    );
}
