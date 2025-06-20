
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Youtube, MessageSquare, Image } from 'lucide-react';

const JoinTheSpell = () => {
  const socialLinks = [
    { icon: Youtube, label: 'YouTube', handle: '@FritzyRosmerian', color: 'hover:text-red-400' },
    { icon: MessageSquare, label: 'Twitter', handle: '@FritzyMagic', color: 'hover:text-blue-400' },
    { icon: Image, label: 'Instagram', handle: '@fritzy.enchanted', color: 'hover:text-pink-400' },
    { icon: Mail, label: 'TikTok', handle: '@fritzyspells', color: 'hover:text-black' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple to-midnight-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-magenta-glow rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-magenta-glow">Spell</span>
          </h2>
          <p className="font-poppins text-violet-light text-lg">
            Stay connected with Fritzy's magical journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Newsletter Signup */}
          <Card className="bg-royal-violet/20 border-magenta-glow/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="font-cormorant text-2xl text-white">
                Enchanted Newsletter ✨
              </CardTitle>
              <p className="font-poppins text-violet-light text-sm">
                Get exclusive updates, behind-the-scenes content, and early access to new performances
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                type="email"
                placeholder="Enter your magical email address"
                className="bg-midnight-black/50 border-magenta-glow/30 text-white placeholder-violet-light"
              />
              <Button className="w-full bg-gradient-to-r from-magenta-glow to-royal-violet hover:from-violet-light hover:to-deep-purple text-white font-poppins animate-glow">
                <Mail className="w-4 h-4 mr-2" />
                Cast the Subscription Spell
              </Button>
              <p className="font-poppins text-xs text-violet-light text-center">
                No spam, just pure magic delivered to your inbox ✨
              </p>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-deep-purple/20 border-magenta-glow/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="font-cormorant text-2xl text-white">
                Follow the Magic 🔮
              </CardTitle>
              <p className="font-poppins text-violet-light text-sm">
                Connect with Fritzy across all magical realms
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-midnight-black/30 rounded-lg hover:bg-midnight-black/50 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <social.icon className={`w-5 h-5 text-magenta-glow group-hover:text-white transition-colors ${social.color}`} />
                    <div>
                      <p className="font-poppins text-white font-medium">{social.label}</p>
                      <p className="font-poppins text-violet-light text-sm">{social.handle}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-magenta-glow/30 text-magenta-glow hover:bg-magenta-glow hover:text-white">
                    Follow
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Hashtag Carousel */}
        <div className="mt-16 text-center">
          <h3 className="font-cormorant text-2xl text-white mb-6">
            Trending Magic Hashtags
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['#FritzDay', '#SweetZyDream', '#MornZy', '#MagicIdol', '#EnchantedNight', '#CardMagic', '#IdolLife'].map((hashtag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gradient-to-r from-royal-violet/30 to-deep-purple/30 border border-magenta-glow/30 text-magenta-glow rounded-full font-poppins text-sm hover:border-magenta-glow/60 hover:bg-magenta-glow/10 cursor-pointer transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheSpell;
