import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function createStarShape() {
  const shape = new THREE.Shape()
  const outerRadius = 0.5
  const innerRadius = 0.2
  const points = 5

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

export default function BlackStar3D({ pulse = false }) {
  const meshRef = useRef()
  const glowRef = useRef()
  const starShape = useMemo(() => createStarShape(), [])

  const extrudeSettings = useMemo(() => ({
    steps: 1,
    depth: 0.15,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 3,
  }), [])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime

    meshRef.current.rotation.y = t * 0.5
    meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.1

    if (glowRef.current) {
      const scale = pulse
        ? 1.3 + Math.sin(t * 3) * 0.3
        : 1.15 + Math.sin(t * 1.5) * 0.1
      glowRef.current.scale.setScalar(scale)
      glowRef.current.material.opacity = pulse
        ? 0.4 + Math.sin(t * 3) * 0.2
        : 0.15 + Math.sin(t * 1.5) * 0.05
    }
  })

  return (
    <group>
      <mesh ref={glowRef}>
        <extrudeGeometry args={[starShape, { ...extrudeSettings, depth: 0.01 }]} />
        <meshBasicMaterial color="#FCD116" transparent opacity={0.15} />
      </mesh>
      <mesh ref={meshRef}>
        <extrudeGeometry args={[starShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#FCD116"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}
