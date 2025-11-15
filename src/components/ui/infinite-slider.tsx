'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
  className?: string
}

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 24,
  className,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const currentSpeed = isHovered ? speedOnHover : speed

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex w-max"
        style={{
          animation: `slide ${currentSpeed}s linear infinite`,
          gap: `${gap}px`,
        }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
