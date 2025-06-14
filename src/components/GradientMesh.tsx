import React from 'react';

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent animate-gradient-y"></div>
      
      {/* Radial gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-cyan-500/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-radial-gradient from-purple-500/10 via-transparent to-transparent"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-noise"></div>
    </div>
  );
};

export default GradientMesh;