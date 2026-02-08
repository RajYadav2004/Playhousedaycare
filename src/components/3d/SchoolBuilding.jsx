import React from 'react';
import { Float } from '@react-three/drei';

export function SchoolBuilding(props) {
  return (
    <group {...props}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Building Body */}
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[4, 3, 3]} />
          <meshStandardMaterial color="#FFB7C5" roughness={0.3} />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 3.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[3.5, 2, 4]} />
          <meshStandardMaterial color="#FFD97D" roughness={0.3} />
        </mesh>

        {/* Windows */}
        <mesh position={[-1, 2, 1.51]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial color="#B7E4C7" />
        </mesh>
        <mesh position={[1, 2, 1.51]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial color="#B7E4C7" />
        </mesh>

        {/* Door */}
        <mesh position={[0, 0.75, 1.51]}>
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial color="#A2D2FF" />
        </mesh>

        {/* Smiling face on building (suggested in prompt) */}
        <group position={[0, 2, 1.52]}>
          {/* Eyes */}
          <mesh position={[-0.3, 0.3, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#2D3142" />
          </mesh>
          <mesh position={[0.3, 0.3, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#2D3142" />
          </mesh>
          {/* Smile */}
          <mesh position={[0, 0.1, 0]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.2, 0.02, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#2D3142" />
          </mesh>
        </group>
      </Float>

      {/* Ground/Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#B7E4C7" />
      </mesh>
    </group>
  );
}
