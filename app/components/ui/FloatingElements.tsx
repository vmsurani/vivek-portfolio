'use client'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
      
      <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-blue-300 opacity-30 animate-spin" style={{ animationDuration: '8s' }} />
      <div className="absolute top-2/3 right-1/3 w-6 h-6 border-2 border-purple-300 opacity-30 animate-spin" style={{ animationDuration: '6s' }} />
    </div>
  )
}