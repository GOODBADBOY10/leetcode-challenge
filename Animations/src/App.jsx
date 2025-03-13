import { MeshBasicMaterial } from 'three'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <boxGeometry args={[4, 4, 4]} />
            {/* <sphereGeometry /> */}
            {/* <octahedronGeometry args={[4, 4, 4]} /> */}
            {/* <meshPhongMaterial /> */}
            {/* <meshNormalMaterial /> */}
            <meshBasicMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} color="green" />
        </Canvas>
      </div>
    </>
  )
}

export default App






// You can live-edit the code above:

// try different materials, like MeshNormalMaterial or MeshBasicMaterial, give them a color
// try different geometries, like SphereGeometry or OctahedronGeometry
// try changing the position on our mesh component, by setting the prop with the same name
// try extracting our mesh to a new component
