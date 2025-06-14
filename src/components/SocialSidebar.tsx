import { Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com',
      name: 'GitHub',
      color: 'hover:text-gray-300 hover:bg-gray-800'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com',
      name: 'LinkedIn',
      color: 'hover:text-blue-500 hover:bg-blue-500/10'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://instagram.com',
      name: 'Instagram',
      color: 'hover:text-pink-500 hover:bg-pink-500/10'
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: 'https://youtube.com',
      name: 'YouTube',
      color: 'hover:text-red-500 hover:bg-red-500/10'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://twitter.com',
      name: 'Twitter',
      color: 'hover:text-sky-500 hover:bg-sky-500/10'
    }
  ];

  return (
    <div className="fixed left-4 bottom-4 z-40 hidden md:block">
      <div className="flex flex-col space-y-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className={`
              group relative p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 
              rounded-lg text-gray-400 transition-all duration-300 
              hover:scale-110 hover:border-gray-600/50 hover:shadow-lg
              ${social.color}
            `}
            title={social.name}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {social.icon}
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {social.name}
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-current blur-sm"></div>
          </a>
        ))}
      </div>
      
      {/* Connecting line */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-t from-gray-600 to-transparent"></div>
    </div>
  );
};

export default SocialSidebar;