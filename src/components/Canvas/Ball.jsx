import React, { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const containerRef = useRef(); // Ref for mouse movement
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!containerRef.current) return;

    // Use a smaller multiplier (0.5 to 1.0) because the 28x28 div is small
    const targetX = hovered ? state.mouse.x * 0.8 : 0;
    const targetY = hovered ? state.mouse.y * 0.8 : 0;

    containerRef.current.position.x = THREE.MathUtils.lerp(
      containerRef.current.position.x,
      targetX,
      0.1
    );
    containerRef.current.position.y = THREE.MathUtils.lerp(
      containerRef.current.position.y,
      targetY,
      0.1
    );

    // OPTIONAL: Make the ball rotate slightly towards the mouse too
    if (hovered) {
        containerRef.current.rotation.y = THREE.MathUtils.lerp(
          containerRef.current.rotation.y,
          state.mouse.x * Math.PI / 4,
          0.1
        );
        containerRef.current.rotation.x = THREE.MathUtils.lerp(
          containerRef.current.rotation.x,
          -state.mouse.y * Math.PI / 4,
          0.1
        );
    }
  });

  return (
    // 1. Outer group follows the mouse
    <group ref={containerRef}>
      {/* 2. Float component handles the internal bobbing */}
      <Float speed={5} rotationIntensity={0.5} floatIntensity={1.5}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />

        <mesh
          castShadow
          receiveShadow
          scale={2.75}
          // 3. Pointer events on the mesh trigger the hover state
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </group>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;