import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Redux', level: 88 }
      ]
    },
    {
      title: 'Backend',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 },
        { name: 'Socket.io', level: 75 }
      ]
    },
    {
      title: 'Database',
      color: 'from-amber-400 to-orange-500',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 78 },
        { name: 'Mongoose', level: 92 },
        { name: 'Prisma', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 78 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 }
      ]
    }
  ];

  const SkillBar = ({ skill, color, delay }: { skill: any; color: string; delay: number }) => {
    const [ref, isVisible] = useScrollAnimation(0.3) as [React.RefObject<HTMLDivElement>, boolean];

    return (
      <div ref={ref} className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-gray-400 text-sm">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${delay}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across the full stack development spectrum
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection
                key={categoryIndex}
                animation="fadeUp"
                delay={categoryIndex * 200}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      color={category.color}
                      delay={skillIndex * 100}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={800} className="mt-16 text-center">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Jest', 'Cypress', 'Webpack', 'Vite', 'ESLint', 'Prettier',
                  'Figma', 'Postman', 'Vercel', 'Netlify', 'Firebase', 'Stripe'
                ].map((tech, index) => (
                  <span
                    key={index}
                    data-cursor="pointer"
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 hover:scale-110 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;