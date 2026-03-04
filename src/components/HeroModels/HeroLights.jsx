import React, { useState } from 'react'

const HeroLights = ({ LightSettings }) => {

    return (
        <>
            {/* <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position={[5, 5, 5]} intensity={1} /> */}

            <spotLight
                position={LightSettings[0].position}
                intensity={LightSettings[0].intensity}
                angle={LightSettings[0].angle}
                penumbra={LightSettings[0].penumbra}
                color={LightSettings[0].color}
            />

            <spotLight
                position={LightSettings[1].position}
                intensity={LightSettings[1].intensity}
                angle={LightSettings[1].angle}
                penumbra={LightSettings[1].penumbra}
                color={LightSettings[1].color}
            />
            <spotLight
                position={LightSettings[2].position}
                intensity={LightSettings[2].intensity}
                angle={LightSettings[2].angle}
                penumbra={LightSettings[2].penumbra}
                color={LightSettings[2].color}
            />
        </>
    )
}

export default HeroLights
