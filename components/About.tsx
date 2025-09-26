export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Frontend Developer & UI/UX Enthusiast</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate frontend developer with 3+ years of experience creating modern, 
                responsive web applications. I specialize in React, Next.js, and TypeScript, 
                with a keen eye for design and user experience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}