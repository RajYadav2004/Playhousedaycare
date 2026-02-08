import React, { Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Environment, ContactShadows, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { SchoolBuilding } from './SchoolBuilding';
import { Playground } from './Playground';
import { ElephantMascot } from './Mascot';
import { PuppetTheater, GardeningPatch } from './ActivitiesAssets';

const tempVector = new THREE.Vector3();
const lookAtVector = new THREE.Vector3();

function ToyBall({ position, color }) {
    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
            <mesh position={position} castShadow>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color={color} roughness={0.3} />
            </mesh>
        </Float>
    );
}

function ToyBlocks({ position }) {
    return (
        <group position={position}>
            <mesh position={[0, 0.25, 0]} castShadow>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#A2D2FF" />
            </mesh>
            <mesh position={[0.4, 0.25, 0.2]} castShadow>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#FFB7C5" />
            </mesh>
            <mesh position={[0.2, 0.75, 0.1]} castShadow>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#FFD97D" />
            </mesh>
        </group>
    );
}

function DrawingEasel({ position }) {
    return (
        <group position={position}>
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[0.1, 2, 0.1]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[0, 1.2, 0.1]} rotation={[-0.2, 0, 0]}>
                <planeGeometry args={[1, 1.2]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[0, 1.2, 0.11]} rotation={[-0.2, 0, 0]}>
                <circleGeometry args={[0.2, 16]} />
                <meshStandardMaterial color="#FFB7C5" />
            </mesh>
        </group>
    );
}

function TeacherAvatar({ position, color, name }) {
    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5}>
                <mesh position={[0, 1.2, 0]} castShadow>
                    <capsuleGeometry args={[0.4, 1, 16, 16]} />
                    <meshStandardMaterial color={color} />
                </mesh>
                <mesh position={[0, 2.2, 0]} castShadow>
                    <sphereGeometry args={[0.35, 16, 16]} />
                    <meshStandardMaterial color="#FFE4E1" />
                </mesh>
                <group position={[0, 2.2, 0.3]}>
                    <mesh position={[-0.1, 0.1, 0]}>
                        <sphereGeometry args={[0.03, 8, 8]} />
                        <meshStandardMaterial color="#2D3142" />
                    </mesh>
                    <mesh position={[0.1, 0.1, 0]}>
                        <sphereGeometry args={[0.03, 8, 8]} />
                        <meshStandardMaterial color="#2D3142" />
                    </mesh>
                    <mesh position={[0, -0.05, 0]} rotation={[0, 0, Math.PI]}>
                        <torusGeometry args={[0.1, 0.02, 8, 16, Math.PI]} />
                        <meshStandardMaterial color="#2D3142" />
                    </mesh>
                </group>
                <Html position={[0, 2.8, 0]} center>
                    <div style={{
                        background: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        border: `2px solid ${color}`,
                        pointerEvents: 'none'
                    }}>
                        {name}
                    </div>
                </Html>
            </Float>
        </group>
    );
}

export function SchoolScene() {
    const scroll = useScroll();
    const { viewport } = useThree();
    const isMobile = viewport.width < 5;

    useFrame((state) => {
        const offset = scroll.offset;

        // Responsive camera path adjustments
        const baseZ = isMobile ? 22 : 15;
        const targetZ = baseZ - offset * 15;
        const targetY = (isMobile ? 6 : 5) + offset * 8;
        const targetX = Math.sin(offset * Math.PI * 2.5) * (isMobile ? 8 : 12);

        tempVector.set(targetX, targetY, targetZ);
        state.camera.position.lerp(tempVector, 0.05);

        // Look at point shifts based on aspect ratio
        lookAtVector.set(0, 1.5, -offset * 10);
        state.camera.lookAt(lookAtVector);
    });

    return (
        <group scale={isMobile ? 0.8 : 1}>
            <Suspense fallback={null}>
                <Environment preset="city" />
            </Suspense>

            <ambientLight intensity={0.6} />
            <directionalLight
                position={[5, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />

            <group>
                <SchoolBuilding position={[0, 0, 0]} />
                <Playground />

                {/* Mascot - more centrally located on mobile */}
                <ElephantMascot
                    position={isMobile ? [-1.5, 0, 2] : [-6, 0, 2]}
                    rotation={[0, 0.8, 0]}
                    scale={isMobile ? 0.6 : 0.8}
                />

                {/* Activities Assets */}
                <ToyBall position={[-2, 0.5, 4]} color="#FFD97D" />
                <ToyBlocks position={isMobile ? [1.5, 0.5, 3] : [3, 0.5, 3]} />
                <DrawingEasel position={[-4, 0, -2]} />
                <PuppetTheater position={isMobile ? [4, 0, -5] : [7, 0, -5]} rotation={[0, -0.5, 0]} />
                <GardeningPatch position={[-8, 0, -10]} rotation={[0, 0.3, 0]} />

                {/* Teachers Avatars */}
                <TeacherAvatar position={[-3, 0, -5]} color="#FFB7C5" name="Ms. Pinky" />
                <TeacherAvatar position={[4, 0, -4]} color="#B7E4C7" name="Mr. Green" />
            </group>

            <ContactShadows
                position={[0, 0, 0]}
                opacity={0.4}
                scale={40}
                blur={2.5}
                far={10}
            />
        </group>
    );
}
