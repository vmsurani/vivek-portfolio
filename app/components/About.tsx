import { Award, Coffee, Heart, Users, Cpu, Rocket } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import GlowingOrb from './ui/GlowingOrb'

export default function About() {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '50+', color: 'text-cyan-400', bg: 'from-cyan-500/20 to-blue-500/20' },
    { icon: Users, label: 'Happy Clients', value: '25+', color: 'text-green-400', bg: 'from-green-500/20 to-emerald-500/20' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'text-amber-400', bg: 'from-amber-500/20 to-orange-500/20' },
    { icon: Heart, label: 'Years Experience', value: '3+', color: 'text-red-400', bg: 'from-red-500/20 to-pink-500/20' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <GlowingOrb size={400} color="purple" className="absolute top-10 right-10 opacity-10" />
      <GlowingOrb size={300} color="cyan" className="absolute bottom-20 left-10 opacity-15" />
      
      <div className="relative container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text animate-glow">About Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
          <div className="flex justify-center mt-4 space-x-2">
            <Cpu className="text-cyan-400 animate-spin" size={20} />
            <Rocket className="text-purple-400 animate-bounce" size={20} />
          </div>
        </AnimatedSection>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeLeft" delay={200}>
              <div className="relative">
                <div className="w-96 h-96 mx-auto relative">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-8 rounded-full border-2 border-pink-400/30 animate-spin" style={{ animationDuration: '10s' }}></div>
                  
                  {/* Main Avatar */}
                  <div className="absolute inset-12 glass-card rounded-full flex items-center justify-center neon-glow animate-float">
                    <div className="text-9xl animate-pulse">👨‍💻</div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-full flex items-center justify-center animate-bounce neon-glow">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-bounce neon-glow" style={{ animationDelay: '0.5s' }}>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="absolute top-1/4 -left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-xl">💎</span>
                  </div>
                  <div className="absolute bottom-1/4 -right-8 w-14 h-14 glass-card rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                    <span className="text-xl">🔥</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeRight" delay={400}>
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Frontend Developer & 
                  <span className="gradient-text block mt-2 animate-pulse">Creative Problem Solver</span>
                </h3>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <div className="glass-card p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                    <p className="text-lg">
                      I'm a passionate frontend developer with <span className="text-cyan-400 font-bold">3+ years of experience</span> creating 
                      modern, responsive web applications. I specialize in <span className="text-purple-400 font-bold">React, Next.js, and TypeScript</span>, 
                      with a keen eye for design and user experience.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                    <p>
                      My journey in web development started with curiosity and has evolved into a passion for 
                      creating <span className="text-pink-400 font-semibold">digital experiences</span> that not only look great but also solve real-world problems.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing to 
                      open-source projects, or sharing knowledge through <span className="text-green-400 font-semibold">blog posts and tutorials</span>.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <AnimatedSection 
                      key={stat.label}
                      animation="scale"
                      delay={600 + index * 100}
                      className={`glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-white/10 bg-gradient-to-br ${stat.bg} card-hover`}
                    >
                      <div className="text-center">
                        <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} animate-pulse`} />
                        <div className="text-3xl font-bold text-white mb-2 animate-glow">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}