import { useGLTF } from '@react-three/drei'
import React from 'react'

const Character = () => {
  const { scene, animations } = useGLTF("./models/character.gltf")
  return (
    <>
      <primitive object={scene} scale={0.5} position={[0, 0.5, 0]} rotation={[0, Math.PI, 0]} />
    </>
  )
}

export default Character
