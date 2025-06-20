
import React from 'react';
import MagicalNavigation from '@/components/MagicalNavigation';
import MagicalHero from '@/components/MagicalHero';
import IdolSpellbook from '@/components/IdolSpellbook';
import StageSpotlight from '@/components/StageSpotlight';
import MediaCrystalRoom from '@/components/MediaCrystalRoom';
import FritzFeed from '@/components/FritzFeed';
import JoinTheSpell from '@/components/JoinTheSpell';

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black">
      <MagicalNavigation />
      
      <div id="hero">
        <MagicalHero />
      </div>
      
      <div id="about">
        <IdolSpellbook />
      </div>
      
      <div id="stage">
        <StageSpotlight />
      </div>
      
      <div id="media">
        <MediaCrystalRoom />
      </div>
      
      <div id="news">
        <FritzFeed />
      </div>
      
      <div id="connect">
        <JoinTheSpell />
      </div>

      {/* Footer */}
      <footer className="bg-midnight-black border-t border-magenta-glow/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-poppins text-violet-light text-sm mb-2">
            © 2024 Fritzy Rosmerian. All magical rights reserved.
          </p>
          <p className="font-cormorant text-magenta-glow text-lg italic">
            "Where magic meets melody, dreams come alive" ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
