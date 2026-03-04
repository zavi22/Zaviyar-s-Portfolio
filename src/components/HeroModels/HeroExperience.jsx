import React, { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights'
import { Room } from './Room';
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Particles from './Particles';

function CameraController({ moveTo }) {
    const { camera } = useThree()
    const targetPosition = useRef(new THREE.Vector3(...moveTo))
    const lookAtTarget = new THREE.Vector3(0, 0, 0)

    useFrame(() => {
        // Smooth camera position
        camera.position.lerp(targetPosition.current, 0.05)

        // Smooth lookAt
        camera.lookAt(lookAtTarget)
    })

    return null
}

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [cameraTarget, setCameraTarget] = useState([0, 0, 15])

    const [lightSettings, setLightSettings] = useState([
        {
            position: [-3, 5, 5],
            intensity: 100,
            angle: 0.4,
            penumbra: 1,
            color: "#9d4edd"
        },
        {
            position: [4, 5, 4],
            intensity: 100,
            angle: 0.3,
            penumbra: 0.5,
            color: "#4cc9f0"
        },
        {
            position: [2, 5, 6],
            intensity: 100,
            angle: 0.11,
            penumbra: 0.2,
            color: "white"
        }
    ])

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            {/* In three.js everything begins with Canvas */}

            <OrbitControls
                enableZoom={false}
                enablePan={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <CameraController moveTo={cameraTarget} />
            <HeroLights LightSettings={lightSettings} />
            <Particles count={100} />

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room onModelClick={() => {
                    setLightSettings([
                        {
                            position: [0, 0, 10],
                            intensity: 100,
                            angle: 1,
                            penumbra: 0.2,
                            color: "#ffffff"
                        },
                        {
                            position: [0, 0, 0],
                            intensity: 100,
                            angle: 1,
                            penumbra: 0.2,
                            color: "#ffffff"
                        },
                        {
                            position: [0, 0, 0],
                            intensity: 100,
                            angle: 1,
                            penumbra: 0.2,
                            color: "#ffffff"
                        },
                    ])
                    setCameraTarget([0, 0, 10])
                }
                }
                />
                {/* Room is a custom react component not a three.js feature that we can directly put animations on it. The only thing we can do is to use props */}
            </group>

        </Canvas>
    )
}

export default HeroExperience
