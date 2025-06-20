
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare, Send } from 'lucide-react';

const FritzFeed = () => {
  const newsItems = [
    {
      date: '2024-06-18',
      title: 'New Magic Trick Revealed!',
      content: 'Fritzy just mastered a new card transformation that will debut in next week\'s performance! 🎴✨',
      likes: 1247,
      comments: 89
    },
    {
      date: '2024-06-15',
      title: 'Backstage Rehearsal Update',
      content: 'The team is working hard preparing for the upcoming "Enchanted Night" concert. Magic and music coming together! 🎵🔮',
      likes: 892,
      comments: 156
    },
    {
      date: '2024-06-12',
      title: 'Fan Art Feature',
      content: 'Amazing artwork by @MagicFan2024! Fritzy loves seeing your creative interpretations of her performances! 🎨💜',
      likes: 2156,
      comments: 234
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-midnight-black to-deep-purple">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-magenta-glow">Fritz</span>Feed
          </h2>
          <p className="font-poppins text-violet-light text-lg">
            Latest news and updates from the magical world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Feed */}
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-midnight-black/40 border-magenta-glow/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-cormorant text-xl text-white">
                      {item.title}
                    </CardTitle>
                    <span className="font-poppins text-violet-light text-sm">
                      {item.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-poppins text-gray-300 mb-4">
                    {item.content}
                  </p>
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-magenta-glow hover:text-violet-light transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="font-poppins text-sm">{item.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-magenta-glow hover:text-violet-light transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="font-poppins text-sm">{item.comments}</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fan Message Submission */}
          <div className="space-y-6">
            <Card className="bg-royal-violet/20 border-magenta-glow/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cormorant text-xl text-white text-center">
                  Send a Message ✨
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Your name" 
                  className="bg-midnight-black/50 border-magenta-glow/30 text-white placeholder-violet-light"
                />
                <Textarea 
                  placeholder="Your message of support or fan art submission..." 
                  className="bg-midnight-black/50 border-magenta-glow/30 text-white placeholder-violet-light min-h-[100px]"
                />
                <Button className="w-full bg-gradient-to-r from-magenta-glow to-royal-violet hover:from-violet-light hover:to-deep-purple text-white font-poppins">
                  <Send className="w-4 h-4 mr-2" />
                  Send Magic Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-deep-purple/20 border-magenta-glow/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-cormorant text-xl text-white text-center">
                  Trending Hashtags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['#FritzDay', '#SweetZyDream', '#MornZy', '#MagicIdol', '#EnchantedNight'].map((hashtag, index) => (
                    <span key={index} className="px-3 py-1 bg-magenta-glow/20 text-magenta-glow rounded-full font-poppins text-sm hover:bg-magenta-glow/30 cursor-pointer transition-colors">
                      {hashtag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FritzFeed;
