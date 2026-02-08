import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { SchoolScene } from './components/3d/SchoolScene';
import { Overlay } from './components/ui/Overlay';
import { Navbar } from './components/ui/Navbar';
import './index.css';

function App() {
  return (
    <main>
      <Navbar />

      <div className="canvas-container">
        <Suspense fallback={<div className="loader">Loading School Scene...</div>}>
          <Canvas shadows camera={{ position: [0, 5, 15], fov: 45 }} dpr={[1, 2]}>
            <ScrollControls pages={5} damping={0.2}>
              <SchoolScene />
              <Scroll html>
                <Overlay />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}

export default App;
