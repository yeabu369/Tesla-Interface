"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function TeslaModel() {
  const modelRef = useRef<THREE.Group>(null)

  // Tesla Model Y colors
  const bodyColor = new THREE.Color("#1e1e1e") // Dark gray/black
  const glassColor = new THREE.Color("#101820") 
  const wheelColor = new THREE.Color("#0a0a0a") // Darker for the black wheels
  const lightColor = new THREE.Color("#ffffff")
  const trimColor = new THREE.Color("#222222")

  // Materials
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: bodyColor,
    metalness: 0.9,
    roughness: 0.2,
  })

  const glassMaterial = new THREE.MeshStandardMaterial({
    color: glassColor,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.7,
  })

  const wheelMaterial = new THREE.MeshStandardMaterial({
    color: wheelColor,
    metalness: 0.7,
    roughness: 0.5,
  })

  const lightMaterial = new THREE.MeshStandardMaterial({
    color: lightColor,
    emissive: lightColor,
    emissiveIntensity: 0.5,
    metalness: 0.9,
    roughness: 0.1,
  })

  const trimMaterial = new THREE.MeshStandardMaterial({
    color: trimColor,
    metalness: 0.7,
    roughness: 0.3,
  })

  useFrame((state) => {
    if (modelRef.current) {
      // Gentle rotation for display
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group ref={modelRef} dispose={null} position={[0, 0, 0]}>
      {/* Main body - lower section (chassis) */}
      <mesh position={[0, 0.45, 0]} material={bodyMaterial}>
        <boxGeometry args={[4.8, 0.7, 2.1]} />
      </mesh>

      {/* Main body - middle section with curved sides */}
      <mesh position={[0, 1.1, 0]} material={bodyMaterial}>
        <boxGeometry args={[4.7, 0.8, 2.2]} />
      </mesh>

      {/* Front hood - more curved and sloped as in Model Y */}
      <mesh position={[1.9, 0.85, 0]} rotation={[Math.PI * -0.04, 0, 0]} material={bodyMaterial}>
        <boxGeometry args={[1.0, 0.25, 2.0]} />
      </mesh>
      
      {/* Front nose cone - more rounded */}
      <mesh position={[2.3, 0.7, 0]} material={bodyMaterial}>
        <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <boxGeometry args={[0.3, 0.5, 1.9]} />
      </mesh>

      {/* Cabin section - with the characteristic Model Y curved roof */}
      <mesh position={[0.2, 1.5, 0]} material={bodyMaterial}>
        <boxGeometry args={[3.0, 0.7, 2.0]} />
      </mesh>
      
      {/* Curved roof section */}
      <mesh position={[0.2, 1.85, 0]} rotation={[0, 0, Math.PI * 0.03]} material={bodyMaterial}>
        <cylinderGeometry args={[1.0, 1.0, 3.0, 32, 1, false, Math.PI * 0.5, Math.PI]} />
      </mesh>

      {/* Rear sloped section - more gradual slope for the crossover look */}
      <mesh position={[-1.7, 1.4, 0]} rotation={[Math.PI * 0.07, 0, 0]} material={bodyMaterial}>
        <boxGeometry args={[1.4, 0.6, 2.0]} />
      </mesh>

      {/* Rear bumper - slightly rounded */}
      <mesh position={[-2.35, 0.6, 0]} material={bodyMaterial}>
        <boxGeometry args={[0.15, 0.6, 2.0]} />
      </mesh>

      {/* Windshield - more sloped as in the image */}
      <mesh position={[1.0, 1.6, 0]} rotation={[Math.PI * 0.12, 0, 0]} material={glassMaterial}>
        <boxGeometry args={[1.5, 1.0, 1.9]} />
      </mesh>

      {/* Roof glass - panoramic */}
      <mesh position={[-0.3, 2.0, 0]} material={glassMaterial}>
        <boxGeometry args={[2.8, 0.1, 1.8]} />
      </mesh>

      {/* Rear window - more sloped */}
      <mesh position={[-1.6, 1.65, 0]} rotation={[Math.PI * -0.15, 0, 0]} material={glassMaterial}>
        <boxGeometry args={[1.2, 0.9, 1.9]} />
      </mesh>

      {/* Side windows */}
      <mesh position={[0.2, 1.5, 1.05]} material={glassMaterial}>
        <boxGeometry args={[3.0, 0.6, 0.1]} />
      </mesh>
      <mesh position={[0.2, 1.5, -1.05]} material={glassMaterial}>
        <boxGeometry args={[3.0, 0.6, 0.1]} />
      </mesh>

      {/* Front lights - sleeker, more horizontal as in Model Y */}
      <mesh position={[2.42, 0.9, 0.7]} material={lightMaterial}>
        <boxGeometry args={[0.05, 0.15, 0.6]} />
      </mesh>
      <mesh position={[2.42, 0.9, -0.7]} material={lightMaterial}>
        <boxGeometry args={[0.05, 0.15, 0.6]} />
      </mesh>

      {/* Rear lights - characteristic Tesla light bar */}
      <mesh position={[-2.42, 1.1, 0]} material={lightMaterial}>
        <boxGeometry args={[0.05, 0.15, 1.9]} />
      </mesh>

      {/* Door handles - flush with body as in newer Teslas */}
      <mesh position={[0.7, 1.1, 1.06]} rotation={[0, 0, Math.PI * 0.5]} material={trimColor}>
        <boxGeometry args={[0.08, 0.25, 0.02]} />
      </mesh>
      <mesh position={[0.7, 1.1, -1.06]} rotation={[0, 0, Math.PI * 0.5]} material={trimColor}>
        <boxGeometry args={[0.08, 0.25, 0.02]} />
      </mesh>
      <mesh position={[-0.7, 1.1, 1.06]} rotation={[0, 0, Math.PI * 0.5]} material={trimColor}>
        <boxGeometry args={[0.08, 0.25, 0.02]} />
      </mesh>
      <mesh position={[-0.7, 1.1, -1.06]} rotation={[0, 0, Math.PI * 0.5]} material={trimColor}>
        <boxGeometry args={[0.08, 0.25, 0.02]} />
      </mesh>

      {/* Wheels with the distinctive Tesla aero wheel design */}
      <group position={[1.5, 0.5, 1.05]}>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 32]} />
        </mesh>
        {/* Aero wheel cover */}
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.18]}>
          <circleGeometry args={[0.48, 32]} />
        </mesh>
        {/* Wheel spokes - simplified representation */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh 
            key={i} 
            material={trimMaterial} 
            rotation={[Math.PI / 2, 0, i * Math.PI / 3]} 
            position={[0, 0, 0.19]}
          >
            <boxGeometry args={[0.08, 0.4, 0.02]} />
          </mesh>
        ))}
      </group>
      
      <group position={[1.5, 0.5, -1.05]}>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 32]} />
        </mesh>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.18]}>
          <circleGeometry args={[0.48, 32]} />
        </mesh>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh 
            key={i} 
            material={trimMaterial} 
            rotation={[Math.PI / 2, 0, i * Math.PI / 3]} 
            position={[0, 0, 0.19]}
          >
            <boxGeometry args={[0.08, 0.4, 0.02]} />
          </mesh>
        ))}
      </group>
      
      <group position={[-1.5, 0.5, 1.05]}>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 32]} />
        </mesh>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.18]}>
          <circleGeometry args={[0.48, 32]} />
        </mesh>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh 
            key={i} 
            material={trimMaterial} 
            rotation={[Math.PI / 2, 0, i * Math.PI / 3]} 
            position={[0, 0, 0.19]}
          >
            <boxGeometry args={[0.08, 0.4, 0.02]} />
          </mesh>
        ))}
      </group>
      
      <group position={[-1.5, 0.5, -1.05]}>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 32]} />
        </mesh>
        <mesh material={wheelMaterial} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.18]}>
          <circleGeometry args={[0.48, 32]} />
        </mesh>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh 
            key={i} 
            material={trimMaterial} 
            rotation={[Math.PI / 2, 0, i * Math.PI / 3]} 
            position={[0, 0, 0.19]}
          >
            <boxGeometry args={[0.08, 0.4, 0.02]} />
          </mesh>
        ))}
      </group>

      {/* Tesla logo on front */}
      <mesh position={[2.43, 0.9, 0]} rotation={[0, 0, 0]} material={trimMaterial}>
        <boxGeometry args={[0.01, 0.15, 0.15]} />
      </mesh>
      
      {/* Front lower grille */}
      <mesh position={[2.4, 0.4, 0]} material={trimMaterial}>
        <boxGeometry args={[0.05, 0.1, 1.0]} />
      </mesh>
      
      {/* Side skirts */}
      <mesh position={[0, 0.3, 1.05]} material={bodyMaterial}>
        <boxGeometry args={[4.0, 0.2, 0.05]} />
      </mesh>
      <mesh position={[0, 0.3, -1.05]} material={bodyMaterial}>
        <boxGeometry args={[4.0, 0.2, 0.05]} />
      </mesh>
      
      {/* Fender flares - subtle */}
      <mesh position={[1.5, 0.7, 1.1]} material={bodyMaterial}>
        <boxGeometry args={[0.8, 0.4, 0.05]} />
      </mesh>
      <mesh position={[1.5, 0.7, -1.1]} material={bodyMaterial}>
        <boxGeometry args={[0.8, 0.4, 0.05]} />
      </mesh>
      <mesh position={[-1.5, 0.7, 1.1]} material={bodyMaterial}>
        <boxGeometry args={[0.8, 0.4, 0.05]} />
      </mesh>
      <mesh position={[-1.5, 0.7, -1.1]} material={bodyMaterial}>
        <boxGeometry args={[0.8, 0.4, 0.05]} />
      </mesh>
    </group>
  )
}

