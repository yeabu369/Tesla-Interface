"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Car, Lock, Thermometer, ChevronUp, ChevronDown, Lightbulb } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CarControls() {
  const [trunkOpen, setTrunkOpen] = useState(false)
  const [locked, setLocked] = useState(true)
  const [lightsOn, setLightsOn] = useState(false)

  const controls = [
    {
      icon: Lock,
      label: locked ? "Unlock" : "Lock",
      action: () => setLocked(!locked),
    },
    {
      icon: Car,
      label: trunkOpen ? "Close Trunk" : "Open Trunk",
      action: () => setTrunkOpen(!trunkOpen),
    },
    {
      icon: Lightbulb,
      label: lightsOn ? "Lights Off" : "Lights On",
      action: () => setLightsOn(!lightsOn),
    },
    {
      icon: Thermometer,
      label: "Climate",
      action: () => console.log("Climate control"),
    },
  ]

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <Card className="p-2 bg-background/80 backdrop-blur">
        <div className="flex gap-2">
          {controls.map((control, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      (index === 0 && !locked) || (index === 1 && trunkOpen) || (index === 2 && lightsOn)
                        ? "default"
                        : "ghost"
                    }
                    size="icon"
                    className="h-12 w-12"
                    onClick={control.action}
                  >
                    <control.icon className="h-6 w-6" />
                    <span className="sr-only">{control.label}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{control.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </Card>

      <Card className="p-2 bg-background/80 backdrop-blur">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <ChevronUp className="h-6 w-6" />
            <span className="sr-only">Raise Suspension</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Lower Suspension</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}

