import { ExternalLink, Github, Star, Eye, Zap, Rocket } from 'lucide-react'
import AnimatedSection from './ui/AnimatedSection'
import GlowingOrb from './ui/GlowingOrb'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A futuristic e-commerce platform with AI-powered recommendations, 3D product views, and immersive shopping experience.',
      image: '🛒',
      gif: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
      tech: ['Next.js', 'TypeScript', 'Three.js', 'AI/ML', 'WebGL'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 124, views: '2.1k' },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Neural Task Manager',
      description: 'AI-powered task management with brain-computer interface, holographic displays, and quantum computing integration.',
      image: '🧠',
      gif: 'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif',
      tech: ['React', 'WebGL', 'TensorFlow.js', 'WebXR', 'Quantum'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 89, views: '1.5k' },
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cyber Weather Station',
      description: 'Cyberpunk-themed weather dashboard with real-time climate data, AR overlays, and satellite imagery integration.',
      image: '🌐',
      gif: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
      tech: ['React', 'WebGL', 'AR.js', 'Satellite API', 'Shaders'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      stats: { stars: 67, views: '980' },
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Holographic Portfolio',
      description: 'Next-gen portfolio with holographic projections, voice commands, and immersive 3D navigation experience.',
      image: '💫',
      gif: 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif',
      tech: ['Next.js', 'Three.js', 'WebXR', 'Voice API', 'Holograms'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      stats: { stars: 45, views: '750' },
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Quantum Social Hub',
      description: 'Revolutionary social platform using quantum entanglement for instant communication across dimensions.',
      image: '⚛️',
      gif: 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
      tech: ['Vue.js', 'Quantum.js', 'WebRTC', 'Blockchain', 'Metaverse'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      stats: { stars: 78, views: '1.2k' },
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI Learning Matrix',
      description: 'Advanced learning management system with AI tutors, neural networks, and personalized education paths.',
      image: '🎓',
      gif: 'https://media.giphy.com/media/3oKIPf3C7HqqnsXANA/giphy.gif',
      tech: ['React', 'TensorFlow', 'WebGL', 'Neural Networks', 'AI'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      stats: { stars: 156, views: '3.2k' },
      color: 'from-pink-500 to-rose-600'
    },
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      <GlowingOrb size={500} color="blue" className="absolute top-0 left-0 opacity-10" />
      <GlowingOrb size={300} color="purple" className="absolute bottom-0 right-0 opacity-15" />
      
      <div className="relative container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Rocket className="text-cyan-400 animate-bounce" size={32} />
            <h2 className="text-5xl md:text-6xl font-bold gradient-text animate-glow">
              Featured Projects
            </h2>
            <Zap className="text-purple-400 animate-pulse" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore my <span className="text-cyan-400 font-semibold">futuristic</span> projects that push the boundaries of 
            <span className="text-purple-400 font-semibold"> web technology</span> and create 
            <span className="text-pink-400 font-semibold"> immersive experiences</span>.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                delay={index * 200}
                className="group"
              >
                <div className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/10 card-hover">
                  <div className={`relative h-80 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                    <div className="text-9xl transform group-hover:scale-125 transition-transform duration-700 animate-float">
                      {project.image}
                    </div>
                    <div className="absolute top-6 right-6 glass-card px-4 py-2 rounded-full border border-white/20">
                      <span className="text-sm font-bold text-white flex items-center space-x-2">
                        <Star className="animate-spin" size={16} />
                        <span>Featured</span>
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated Particles */}
                    <div className="absolute inset-0 opacity-30">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1 glass-card px-2 py-1 rounded-full">
                          <Star className="animate-pulse" size={14} />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1 glass-card px-2 py-1 rounded-full">
                          <Eye className="animate-pulse" size={14} />
                          <span>{project.stats.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 glass-card rounded-full text-sm font-medium border border-cyan-400/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 animate-pulse"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 neon-glow"
                      >
                        <Github className="animate-spin" size={20} />
                        <span className="font-semibold">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 neon-glow`}
                      >
                        <ExternalLink className="animate-bounce" size={20} />
                        <span className="font-semibold">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <AnimatedSection delay={800}>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">More Innovations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-500 animate-float">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="flex items-center space-x-1 text-xs text-gray-400 glass-card px-2 py-1 rounded-full">
                      <Star size={12} />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 glass-card rounded text-xs text-cyan-300 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 glass-card rounded text-xs text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}