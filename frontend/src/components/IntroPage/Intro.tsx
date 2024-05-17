import React, { useRef, useState } from 'react'
import { IntroCanvasWrapper, IntroContainer, IntroRefreshButton } from '@components/IntroPage/style/IntroStyle'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Model = ({
                 url,
                 scale,
                 isUserInteracting,
                 modelRef,
               }: {
  url: string
  scale?: [number, number, number]
  isUserInteracting: boolean
  modelRef: React.RefObject<any>
}) => {
  const { scene } = useGLTF(url)

  useFrame(() => {
    if (modelRef.current && !isUserInteracting) {
      modelRef.current.rotation.y += 0.005 // x축을 기준으로 회전
    }
  })

  return <primitive ref={modelRef} object={scene} scale={scale} />
}

const Controls = ({
                    setIsUserInteracting,
                    controlsRef,
                  }: {
  setIsUserInteracting: React.Dispatch<React.SetStateAction<boolean>>
  controlsRef: React.RefObject<any>
}) => {
  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update()
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      maxPolarAngle={Math.PI} // x축 회전 허용
      minPolarAngle={-Math.PI} // x축 회전 허용
      onStart={() => setIsUserInteracting(true)} // 사용자가 모델을 조작할 때
      onEnd={() => setIsUserInteracting(false)} // 사용자가 모델 조작을 멈출 때
    />
  )
}

const Intro = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const initialRotation: [number, number, number] = [0, 0, 0]
  const modelRef = useRef<any>(null)
  const controlsRef = useRef<any>(null)

  const handleReset = () => {
    if (modelRef.current) {
      modelRef.current.rotation.set(...initialRotation)
    }
    if (controlsRef.current) {
      controlsRef.current.reset() // OrbitControls의 회전 축을 초기화
    }
  }

  return (
    <IntroContainer>
      <IntroCanvasWrapper>
        <Canvas camera={{ position: [0, 100, 0], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[1000, 1000, 1000]} intensity={2} />
          <Model
            url={'/3DIllustrations/Intro.glb'}
            scale={[2, 2, 2]}
            isUserInteracting={isUserInteracting}
            modelRef={modelRef}
          />
          <Controls
            setIsUserInteracting={setIsUserInteracting}
            controlsRef={controlsRef}
          />
        </Canvas>
      </IntroCanvasWrapper>
      <IntroRefreshButton onClick={handleReset} />
    </IntroContainer>
  )
}

export default Intro
