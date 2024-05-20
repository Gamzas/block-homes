import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import { IntroCanvasWrapper, IntroContainer, IntroHeader } from '@components/IntroPage/style/IntroStyle'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import ThreeRotate from '@assets/lotties/3DRotate.json'
import CandyCaneLoader from '@assets/lotties/CandyCaneLoader.json'

const Model = ({
                 url,
                 scale,
                 isUserInteracting,
                 modelRef,
                 setLoading,
                 index,
               }: {
  url: string
  scale?: [number, number, number]
  isUserInteracting: boolean
  modelRef: React.RefObject<any>
  setLoading: (loading: number) => void
  index: number
}) => {
  const { scene } = useGLTF(url, true, undefined, loader => {
    loader.manager.onLoad = () => setLoading(index + 1)
  })
  useFrame(() => {
    if (modelRef.current && !isUserInteracting) {
      modelRef.current.rotation.y += 0.004 // x축을 기준으로 회전
    }
  })

  return <primitive ref={modelRef} object={scene} scale={scale} />
}

const Controls = ({ setIsUserInteracting, controlsRef }) => {
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
  const models = [
    // '/3DIllustrations/Intro_logo.glb',
    // '/3DIllustrations/Intro_no_pig.glb',
    'https://blockhomes-bucket.s3.ap-northeast-2.amazonaws.com/assets/Intro.glb',
  ]
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const initialRotation: [number, number, number] = [0, 0, 0]
  const modelRef = useRef<any>(null)
  const controlsRef = useRef<any>(null)
  const [loading, setLoading] = useState(0)

  const handleReset = () => {
    if (!loading) {
      window.location.reload()
    }
    if (modelRef.current) {
      modelRef.current.rotation.set(...initialRotation)
    }
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }
  const headerLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: ThreeRotate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const loadingLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: CandyCaneLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  useEffect(() => {
    console.log(loading)
  }, [loading])
  return (
    <IntroContainer>
      <IntroCanvasWrapper>
        {!loading && (
          <div className="three-loading">
            <Lottie
              options={loadingLottieOptions}
              height={200}
              width={200}
              style={{ position: 'absolute', zIndex: 10 }}
            />
          </div>
        )}
        <Canvas camera={{ position: [0, 5, 0], fov: 75 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[50, 50, 50]} intensity={2} />
          {models.map(
            (model, index) =>
              (loading === index || loading === index + 1) && (
                <Model
                  url={model}
                  scale={[3.5, 3.5, 3.5]}
                  isUserInteracting={isUserInteracting}
                  modelRef={modelRef}
                  setLoading={setLoading}
                  index={index}
                />
              ),
          )}
          <Controls
            setIsUserInteracting={setIsUserInteracting}
            controlsRef={controlsRef}
          />
        </Canvas>
      </IntroCanvasWrapper>
      <IntroHeader>
        <div className="lottie">
          <Lottie
            className="icon"
            options={headerLottieOptions}
            height={50}
            width={50}
          />
        </div>
        손가락을 이용하여 360도 돌려보세요.
        <div className="refresh-button" onClick={handleReset} />
      </IntroHeader>
    </IntroContainer>
  )
}

export default Intro
