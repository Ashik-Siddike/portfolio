const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
      <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-float-medium"></div>
      
      {/* Medium floating elements */}
      <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-gradient-to-r from-cyan-300/30 to-blue-400/30 rounded-full blur-2xl animate-float-fast"></div>
      <div className="absolute bottom-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-indigo-500/30 rounded-full blur-2xl animate-float-medium-reverse"></div>
      
      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-1/5 w-16 h-16 border border-cyan-400/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 border border-purple-400/20 rotate-12 animate-pulse"></div>
      <div className="absolute top-2/3 left-2/3 w-8 h-8 bg-gradient-to-r from-amber-400/30 to-orange-500/30 transform rotate-45 animate-bounce-slow"></div>
    </div>
  );
};

export default FloatingElements;