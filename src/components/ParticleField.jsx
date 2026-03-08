import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 300

const colors = [
  new THREE.Color('#CE1126'),
  new THREE.Color('#FCD116'),
  new THREE.Color('#006B3F'),
  new THREE.Color('#ffffff'),
]

const grayscaleColors = [
  new THREE.Color('#888888'),
  new THREE.Color('#aaaaaa'),
  new THREE.Color('#666666'),
  new THREE.Color('#cccccc'),
]

function Particles({ grayscale }) {
  const mesh = useRef()
  const light = useRef()

  const [positions, colorArray, sizes, velocities] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const sz = new Float32Array(PARTICLE_COUNT)
    const vel = []

    const palette = grayscale ? grayscaleColors : colors

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10

      const color = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b

      sz[i] = Math.random() * 0.08 + 0.02

      vel.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.003,
      })
    }
    return [pos, col, sz, vel]
  }, [grayscale])

  useFrame((state) => {
    if (!mesh.current) return
    const positions = mesh.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] += velocities[i].x + Math.sin(time * 0.3 + i) * 0.001
      positions[i * 3 + 1] += velocities[i].y + Math.cos(time * 0.2 + i) * 0.001
      positions[i * 3 + 2] += velocities[i].z

      if (Math.abs(positions[i * 3]) > 10) velocities[i].x *= -1
      if (Math.abs(positions[i * 3 + 1]) > 6) velocities[i].y *= -1
      if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i].z *= -1
    }

    mesh.current.geometry.attributes.position.needsUpdate = true

    const sizesArr = mesh.current.geometry.attributes.size.array
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      sizesArr[i] = (Math.sin(time * 1.5 + i * 0.5) * 0.5 + 0.5) * 0.08 + 0.02
    }
    mesh.current.geometry.attributes.size.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colorArray}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleField({ grayscale = false }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ filter: grayscale ? 'grayscale(100%)' : 'none', transition: 'filter 1.5s ease' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Particles grayscale={grayscale} />
      </Canvas>
    </div>
  )
}
