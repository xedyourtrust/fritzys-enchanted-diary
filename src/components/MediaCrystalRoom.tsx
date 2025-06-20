
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Youtube, Camera, Archive } from 'lucide-react';

const MediaCrystalRoom = () => {
  const galleryItems = [
    { type: 'photo', title: 'Backstage Magic', category: 'behind-scenes' },
    { type: 'video', title: 'Practice Session', category: 'rehearsal' },
    { type: 'photo', title: 'Fan Art Feature', category: 'fan-content' },
    { type: 'video', title: 'TV Interview', category: 'media' },
    { type: 'photo', title: 'Costume Fitting', category: 'behind-scenes' },
    { type: 'photo', title: 'Stage Setup', category: 'rehearsal' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-royal-violet to-midnight-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            Media <span className="text-magenta-glow">Crystal Room</span>
          </h2>
          <p className="font-poppins text-violet-light text-lg">
            A magical collection of memories and moments
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-midnight-black/50 mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-magenta-glow data-[state=active]:text-white">
              All Media
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-magenta-glow data-[state=active]:text-white">
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-magenta-glow data-[state=active]:text-white">
              Videos
            </TabsTrigger>
            <TabsTrigger value="archive" className="data-[state=active]:bg-magenta-glow data-[state=active]:text-white">
              Archive
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="group cursor-pointer bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm hover:border-magenta-glow/60 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-royal-violet/30 to-deep-purple/30 rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {item.type === 'photo' ? (
                        <Image className="w-8 h-8 text-magenta-glow" />
                      ) : (
                        <Youtube className="w-8 h-8 text-magenta-glow" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-poppins text-white text-sm font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-violet-light text-xs">
                        {item.category}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.filter(item => item.type === 'photo').map((item, index) => (
                <Card key={index} className="group cursor-pointer bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm hover:border-magenta-glow/60 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-royal-violet/30 to-deep-purple/30 rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Camera className="w-8 h-8 text-magenta-glow" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-poppins text-white text-sm font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-violet-light text-xs">
                        {item.category}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {galleryItems.filter(item => item.type === 'video').map((item, index) => (
                <Card key={index} className="group cursor-pointer bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm hover:border-magenta-glow/60 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-royal-violet/30 to-deep-purple/30 rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Youtube className="w-12 h-12 text-magenta-glow" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-poppins text-white text-sm font-medium mb-1">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-violet-light text-xs">
                        {item.category}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="archive">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Archive className="w-12 h-12 text-magenta-glow mx-auto mb-4" />
                  <h3 className="font-cormorant text-xl text-white mb-2">TV Appearances</h3>
                  <p className="font-poppins text-violet-light text-sm">Collection of television interviews and performances</p>
                </CardContent>
              </Card>
              <Card className="bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Archive className="w-12 h-12 text-magenta-glow mx-auto mb-4" />
                  <h3 className="font-cormorant text-xl text-white mb-2">Early Performances</h3>
                  <p className="font-poppins text-violet-light text-sm">Rare footage from debut performances and training days</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MediaCrystalRoom;
