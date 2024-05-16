import React from 'react'
import { IntroCanvasWrapper, IntroContainer } from '@components/IntroPage/style/IntroStyle'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'


const Model = ({ url, position, scale }: {
  url: string,
  position: [number, number, number],
  scale?: [number, number, number]
}) => {
  const { scene } = useGLTF(url)
  return <primitive object={scene} position={position} scale={scale} />
}

const Intro = () => {
  return (
    <IntroContainer>
      <IntroCanvasWrapper>
        <Canvas camera={{ position: [0, 1000, 0], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[10000, 10000, 10000]} intensity={2} />
          <Model url={'/3DIllustrations/blockhomes.glb'} position={[-30, 0, 0]} scale={[60, 60, 60]} />
          <Model url={'/3DIllustrations/UserDID.glb'} position={[-0.5, 0, 0]} scale={[0.3, 0.3, 0.3]} />
          <Model url={'/3DIllustrations/Estate.glb'} position={[-0.5, 0, 0]} scale={[0.8, 0.8, 0.8]} />
          <Model url={'/3DIllustrations/Contract.glb'} position={[-0.5, 0, 0]} scale={[1.0, 1.0, 1.0]} />
          <OrbitControls />
        </Canvas>
      </IntroCanvasWrapper>
    </IntroContainer>
  )
}

export default Intro
