import React from 'react'
import { useGLTF } from '@react-three/drei';

import skyScene from "../assets/3d/sky.glb"

const Sky = () => {
    // importing a 3d model to run as a scene inside a primitive tag
    const sky = useGLTF(skyScene)

  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky