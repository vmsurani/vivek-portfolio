'use client'

interface GlowingOrbProps {
  size?: number
  color?: string
  className?: string
}

export default function GlowingOrb({ size = 200, color = 'blue', className = '' }: GlowingOrbProps) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`absolute rounded-full animate-pulse opacity-20 blur-xl bg-${color}-500`}
        style={{ 
          width: size, 
          height: size,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className={`absolute rounded-full animate-ping opacity-30 bg-${color}-400`}
        style={{ 
          width: size * 0.8, 
          height: size * 0.8,
          top: size * 0.1,
          left: size * 0.1,
          animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}
      />
      <div 
        className={`absolute rounded-full bg-gradient-to-r from-${color}-500 to-${color}-700 opacity-60`}
        style={{ 
          width: size * 0.6, 
          height: size * 0.6,
          top: size * 0.2,
          left: size * 0.2,
          animation: 'spin 20s linear infinite'
        }}
      />
    </div>
  )
}