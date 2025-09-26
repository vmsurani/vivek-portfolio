export default function Skills() {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-black' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 98, color: 'bg-orange-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'Git', level: 88, color: 'bg-red-500' },
  ]

  const tools = [
    'VS Code', 'Figma', 'Photoshop', 'Postman', 'Chrome DevTools', 'Webpack', 'Vite', 'Vercel'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills & Technologies</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-8">Tools & Software</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-4">What I Bring to the Table</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Responsive & Mobile-First Design</li>
                  <li>• Performance Optimization</li>
                  <li>• Cross-Browser Compatibility</li>
                  <li>• SEO Best Practices</li>
                  <li>• Accessibility Standards</li>
                  <li>• Clean, Maintainable Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}