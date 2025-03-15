"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FastForward, Pause, Rewind, Volume2 } from "lucide-react"
import Image from "next/image"

export default function MediaPlayer() {
  return (
    <Card className="fixed bottom-0 left-0 right-0 p-4 rounded-none border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/placeholder.svg" alt="Album art" width={48} height={48} className="rounded" />
          <div>
            <h3 className="font-medium">Fireborne</h3>
            <p className="text-sm text-muted-foreground">by Charlie Ryan</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Rewind className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FastForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

