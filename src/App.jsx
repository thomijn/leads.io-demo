import { Environment } from '@react-three/drei'
import { Model } from './Leads'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, N8AO } from '@react-three/postprocessing'

function App() {
  return (
    <Canvas orthographic camera={{ zoom: 150, position: [10, 4, 10] }}>
      <ambientLight />
      <Environment preset="sunset" />
      <pointLight position={[10, 10, 10]} />
      <group position={[0, -0.5, 0]}>
        <Model position={[0, -2.05, 0]} />
        <Model order position={[0, -4.1, 0]} />
        <Model position={[0, -6.15, 0]} />
      </group>
      <CameraControls />
      <EffectComposer>
        <N8AO />
        <Bloom />
      </EffectComposer>
    </Canvas>
  )
}

const CameraControls = () => {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 5 - camera.position.x) * 0.01
    camera.lookAt(0, 0, 0)
  })
}

export default App
