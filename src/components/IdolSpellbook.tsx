
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Heart, User, Sparkles } from 'lucide-react';

const IdolSpellbook = () => {
  const profileData = [
    { icon: Calendar, label: 'Date of Birth', value: 'March 15, 2005' },
    { icon: User, label: 'Height', value: '158 cm' },
    { icon: Heart, label: 'Blood Type', value: 'B' },
    { icon: Sparkles, label: 'Magic Origin', value: 'Jakarta, Indonesia' }
  ];

  const timeline = [
    { year: '2020', event: 'Started magic training at age 15' },
    { year: '2021', event: 'First idol audition success' },
    { year: '2022', event: 'Debut performance combining magic & singing' },
    { year: '2023', event: 'Won "Rising Star Magician" award' },
    { year: '2024', event: 'Center position in major idol group' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-midnight-black to-deep-purple">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            The Idol's <span className="text-magenta-glow">Spellbook</span>
          </h2>
          <p className="font-poppins text-violet-light text-lg">
            Discover the magical journey of Indonesia's enchanting performer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <Card className="bg-gradient-to-br from-royal-violet/20 to-deep-purple/30 border-magenta-glow/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-cormorant text-2xl font-bold text-white mb-6 text-center">
                Magical Profile
              </h3>
              <div className="space-y-4">
                {profileData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-midnight-black/30">
                    <item.icon className="w-5 h-5 text-magenta-glow" />
                    <span className="font-poppins text-violet-light font-medium">{item.label}:</span>
                    <span className="font-poppins text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="font-cormorant text-2xl font-bold text-white mb-6">
              Journey Through Time
            </h3>
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-magenta-glow to-royal-violet rounded-full flex items-center justify-center">
                  <span className="font-poppins font-bold text-white text-sm">{item.year}</span>
                </div>
                <div className="flex-grow p-4 bg-royal-violet/20 rounded-lg border border-magenta-glow/20">
                  <p className="font-poppins text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdolSpellbook;
