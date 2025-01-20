import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import CharacterControls from './components/characterControls'

const RedLightGreenLight = () => {
    const { scene, animations } = useGLTF('./models/doll.glb')
    console.log('animations: ', animations);
    const [start, setStart] = useState(true)
    const [status, setStatus] = useState('redLight')
    return (
        <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.1}
                castShadow
            />

            <spotLight
                position={[5, 4, 0]}
                intensity={150}
                penumbra={1}
                castShadow
                decay={2}
            />
            <CharacterControls />
            <primitive object={scene} scale={0.5} position={[0, Math.PI * 0.5, -Math.PI * 1.5]} />
            <OrbitControls />
            <axesHelper />
        </Canvas>
    )
}

export default RedLightGreenLight
