import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Earth({ isActive }) {
  const earthRef = useRef()
  const markerRef = useRef()
  const [zooming, setZooming] = useState(false)
  const targetRotation = useRef({ x: 0, y: 0 })

  const ghanaLat = 7.9465
  const ghanaLng = -1.0232
  const latRad = (ghanaLat * Math.PI) / 180
  const lngRad = (ghanaLng * Math.PI) / 180
  const radius = 1.52
  const markerPos = [
    radius * Math.cos(latRad) * Math.cos(lngRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.sin(lngRad),
  ]

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setZooming(true), 2000)
      return () => clearTimeout(timer)
    }
    setZooming(false)
  }, [isActive])

  useFrame((state, delta) => {
    if (!earthRef.current) return

    if (!zooming) {
      earthRef.current.rotation.y += delta * 0.15
    } else {
      const targetY = -lngRad + Math.PI
      earthRef.current.rotation.y += (targetY - earthRef.current.rotation.y) * 0.02
    }

    if (markerRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3
      markerRef.current.scale.setScalar(scale)
    }
  })

  return (
    <group ref={earthRef}>
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#1a5276"
          emissive="#0a2a3f"
          emissiveIntensity={0.2}
          wireframe={false}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      <Sphere args={[1.505, 64, 64]}>
        <meshStandardMaterial
          color="#2ecc71"
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>
      <mesh ref={markerRef} position={markerPos}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#FCD116" />
      </mesh>
      <mesh position={markerPos}>
        <ringGeometry args={[0.06, 0.1, 32]} />
        <meshBasicMaterial color="#CE1126" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function Globe3D({ isActive = false }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-5, -3, -5]} intensity={0.3} color="#FCD116" />
        <Earth isActive={isActive} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!isActive}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
