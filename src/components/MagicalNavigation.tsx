
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const MagicalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Enchanted World', href: '#hero' },
    { label: 'Spellbook', href: '#about' },
    { label: 'Performances', href: '#stage' },
    { label: 'Crystal Room', href: '#media' },
    { label: 'FritzFeed', href: '#news' },
    { label: 'Join Spell', href: '#connect' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight-black/80 backdrop-blur-md border-b border-magenta-glow/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-magenta-glow animate-sparkle" />
            <span className="font-cormorant text-xl font-bold text-white">
              Fritzy Rosmerian
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-poppins text-violet-light hover:text-magenta-glow transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta-glow transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-magenta-glow hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-magenta-glow/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-poppins text-violet-light hover:text-magenta-glow transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MagicalNavigation;
