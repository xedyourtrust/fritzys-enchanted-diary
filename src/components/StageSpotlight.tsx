
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Youtube, Star } from 'lucide-react';

const StageSpotlight = () => {
  const performances = [
    {
      title: 'Wimbledon e Tsureteitte',
      unit: 'Sweet Dream Girls',
      isCenter: true,
      description: 'Magical performance with card tricks and choreography',
      videoId: 'dQw4w9WgXcQ' // placeholder
    },
    {
      title: 'Tenshi no Shippo',
      unit: 'Mystic Angels',
      isCenter: true,
      description: 'Angelic themed performance with levitation magic',
      videoId: 'dQw4w9WgXcQ' // placeholder
    },
    {
      title: 'Midnight Spell',
      unit: 'Solo Performance',
      isCenter: false,
      description: 'Solo magical act combining singing and illusions',
      videoId: 'dQw4w9WgXcQ' // placeholder
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-purple to-royal-violet">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            Stage & <span className="text-magenta-glow">Spotlight</span>
          </h2>
          <p className="font-poppins text-violet-light text-lg">
            Witness the magic unfold on stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <Card key={index} className="bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm hover:bg-midnight-black/60 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-cormorant text-xl text-white mb-2">
                      {performance.title}
                    </CardTitle>
                    <p className="font-poppins text-violet-light text-sm mb-2">
                      {performance.unit}
                    </p>
                  </div>
                  {performance.isCenter && (
                    <Badge className="bg-gradient-to-r from-magenta-glow to-royal-violet text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Center
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-gray-300 text-sm mb-4">
                  {performance.description}
                </p>
                <div className="aspect-video bg-gradient-to-br from-royal-violet/30 to-deep-purple/30 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Youtube className="w-12 h-12 text-magenta-glow" />
                </div>
                <Button className="w-full bg-gradient-to-r from-magenta-glow to-royal-violet hover:from-violet-light hover:to-deep-purple text-white font-poppins">
                  Watch Performance
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StageSpotlight;
