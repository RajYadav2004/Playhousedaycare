import React from 'react';
import { Float } from '@react-three/drei';

export function Playground(props) {
    return (
        <group {...props}>
            {/* Toy-like Trees */}
            <Tree position={[-5, 0, -2]} />
            <Tree position={[5, 0, -3]} />
            <Tree position={[-4, 0, 4]} />

            {/* Stylized Clouds */}
            <Cloud position={[-6, 6, -5]} scale={1.5} />
            <Cloud position={[6, 7, -8]} scale={1.2} />
            <Cloud position={[0, 8, -10]} scale={2} />

            {/* Sun with a face */}
            <Sun position={[10, 10, -15]} />
        </group>
    );
}

function Tree({ position }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 1]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 1.5, 0]}>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="#B7E4C7" />
                </mesh>
            </Float>
        </group>
    );
}

function Cloud({ position, scale = 1 }) {
    return (
        <Float speed={1} rotationIntensity={0.1} floatIntensity={1}>
            <group position={position} scale={scale}>
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
                <mesh position={[0.8, -0.2, 0]}>
                    <sphereGeometry args={[0.7, 16, 16]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
                <mesh position={[-0.8, -0.2, 0]}>
                    <sphereGeometry args={[0.7, 16, 16]} />
                    <meshStandardMaterial color="white" transparent opacity={0.8} />
                </mesh>
            </group>
        </Float>
    );
}

function Sun({ position }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial color="#FFD97D" emissive="#FFD97D" emissiveIntensity={0.5} />
            </mesh>
            {/* Face */}
            <group position={[0, 0, 2.1]}>
                <mesh position={[-0.5, 0.5, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#2D3142" />
                </mesh>
                <mesh position={[0.5, 0.5, 0]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#2D3142" />
                </mesh>
                <mesh position={[0, -0.2, 0]} rotation={[0, 0, Math.PI]}>
                    <torusGeometry args={[0.6, 0.05, 16, 32, Math.PI]} />
                    <meshStandardMaterial color="#2D3142" />
                </mesh>
            </group>
        </group>
    );
}
