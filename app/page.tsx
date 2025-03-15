"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Card } from "@/components/ui/card"
import CarControls from "@/car-controls"
import TeslaModel from "@/tesla-model"
import MediaPlayer from "@/media-player"
import TopBar from "@/top-bar"

export default function TeslaInterface() {
  return (
    <div className="h-screen w-full bg-background text-foreground">
      <Card className="w-full h-full rounded-none">
        <TopBar />
        <div className="relative h-[70vh]">
          <Canvas shadows className="w-full h-full">
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <PerspectiveCamera makeDefault position={[6, 3, 6]} fov={40} />
              <TeslaModel />
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={5}
                maxDistance={10}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
              <Environment preset="city" />
              <gridHelper args={[20, 20, "#444444", "#222222"]} position={[0, -0.01, 0]} />
            </Suspense>
          </Canvas>
          <CarControls />
        </div>
        <MediaPlayer />
      </Card>
    </div>
  )
}

