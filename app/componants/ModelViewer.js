'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Load the GLB model
function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.5} />;
}

// Main ModelViewer Component
export default function ModelViewer() {
  const modelUrl = '../../public/auv.glb'; // Update this path to your GLB file

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* 3D Model */}
        <Model url={modelUrl} />

        {/* Orbit Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
