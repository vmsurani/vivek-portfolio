import { Code, Palette, Database, Zap } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import GlowingOrb from './ui/GlowingOrb'

export default function Skills() {
  const skills = [
    { name: 'React', logo: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', logo: '▲', color: 'from-gray-400 to-white' },
    { name: 'TypeScript', logo: 'TS', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', logo: 'JS', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Tailwind CSS', logo: '🎨', color: 'from-teal-400 to-cyan-500' },
    { name: 'Node.js', logo: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', logo: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'Git', logo: '📦', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', logo: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', logo: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'GraphQL', logo: '◉', color: 'from-pink-400 to-purple-500' },
    { name: 'Firebase', logo: '🔥', color: 'from-yellow-400 to-orange-500' },
    { name: 'Vue.js', logo: '💚', color: 'from-green-400 to-green-500' },
    { name: 'Python', logo: '🐍', color: 'from-blue-400 to-yellow-400' },
    { name: 'Three.js', logo: '🎲', color: 'from-purple-400 to-pink-500' },
    { name: 'WebGL', logo: '🌐', color: 'from-cyan-400 to-blue-500' },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <GlowingOrb size={400} color="cyan" className="absolute top-10 left-10 opacity-10" />
      <GlowingOrb size={300} color="purple" className="absolute bottom-20 right-20 opacity-15" />

      <div className="relative container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Code className="text-cyan-400 animate-spin" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold gradient-text animate-glow">
              Skills & Technologies
            </h2>
            <Zap className="text-purple-400 animate-bounce" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
        </AnimatedSection>
        
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 border border-white/10 card-hover relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                      {skill.logo}
                    </div>
                    <h3 className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Additional Skills Categories */}
          <AnimatedSection delay={600} className="mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="text-cyan-400 animate-pulse" size={24} />
                  <h3 className="text-xl font-bold text-white">Design Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Figma 🎨', 'Photoshop 📸', 'Illustrator ✨', 'Blender 🎭'].map((tool) => (
                    <span key={tool} className="glass-card px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-cyan-300 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="text-purple-400 animate-pulse" size={24} />
                  <h3 className="text-xl font-bold text-white">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL 🐘', 'Redis ⚡', 'Supabase 🚀', 'Prisma 💎'].map((db) => (
                    <span key={db} className="glass-card px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-purple-300 transition-colors">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="text-pink-400 animate-pulse" size={24} />
                  <h3 className="text-xl font-bold text-white">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Vercel 🔺', 'Netlify 🌐', 'GitHub Actions 🤖', 'CI/CD ⚙️'].map((tool) => (
                    <span key={tool} className="glass-card px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-pink-300 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}