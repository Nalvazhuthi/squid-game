import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'

const RedLightGreenLight = () => {
    const { scene, animations } = useGLTF('./models/doll.glb')
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
            <primitive object={scene} scale={0.5} />
            <OrbitControls />
        </Canvas>
    )
}

export default RedLightGreenLight
