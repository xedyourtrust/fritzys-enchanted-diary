
import React from 'react';
import { Button } from '@/components/ui/button';

const MagicalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-violet via-deep-purple to-midnight-black">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-magenta-glow rounded-full animate-sparkle opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to the
          <span className="block bg-gradient-to-r from-magenta-glow to-violet-light bg-clip-text text-transparent">
            Enchanted World
          </span>
          of Fritzy Rosmerian
        </h1>
        
        <p className="font-cormorant text-2xl md:text-3xl text-violet-light mb-8 italic">
          "Abracadabra! Si pesulap yang siap membuat hatimu terpikat."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-gradient-to-r from-magenta-glow to-royal-violet hover:from-violet-light hover:to-deep-purple text-white px-8 py-3 rounded-full font-poppins font-medium text-lg animate-glow">
            Enter the Magic
          </Button>
          <Button variant="outline" className="border-magenta-glow text-magenta-glow hover:bg-magenta-glow hover:text-white px-8 py-3 rounded-full font-poppins font-medium text-lg">
            Watch Performances
          </Button>
        </div>
      </div>

      {/* Floating cards decoration */}
      <div className="absolute bottom-10 left-10 animate-float">
        <div className="w-16 h-24 bg-gradient-to-br from-royal-violet to-deep-purple rounded-lg opacity-70 transform rotate-12"></div>
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-18 bg-gradient-to-br from-magenta-glow to-violet-light rounded-lg opacity-60 transform -rotate-12"></div>
      </div>
    </section>
  );
};

export default MagicalHero;
