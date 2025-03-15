"use client"

import { Battery, Signal, Wifi } from "lucide-react"

export default function TopBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Battery className="h-4 w-4" />
        <span>72%</span>
      </div>
      <div className="flex items-center gap-2">
        <Signal className="h-4 w-4" />
        <Wifi className="h-4 w-4" />
        <span>5:16 pm</span>
      </div>
    </div>
  )
}

