import { TopBar } from "@/components/home/TopBar";
import { BottomNav } from "@/components/home/BottomNav";
import { QuoteCard } from "@/components/home/QuoteCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Book, Compass, ArrowRight } from 'lucide-react';
import type { UserData } from '@/lib/types';

interface HomeScreenProps {
  userData: UserData;
  onNavigate: (screen: 'home' | 'profile') => void;
}

const HomeScreen = ({ userData, onNavigate }: HomeScreenProps) => {
  const dailyContent = {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
    artworkTitle: "The Thinker",
    artworkArtist: "Auguste Rodin"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <TopBar userName={userData.email.split('@')[0]} />

      <div className="max-w-lg mx-auto p-4 space-y-6">
        <div className="flex gap-2">
          {userData.preferences.interests.map(interest => (
            <span key={interest} className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              {interest}
            </span>
          ))}
        </div>

        <QuoteCard 
          quote={dailyContent.quote}
          author={dailyContent.author}
        />

        <Card className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
            alt="Daily artwork"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium">{dailyContent.artworkTitle}</h3>
            <p className="text-sm text-gray-600">{dailyContent.artworkArtist}</p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 hover:bg-indigo-50 transition-colors cursor-pointer">
            <div className="space-y-2">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-medium">Ask for Guidance</h3>
              <p className="text-sm text-gray-600">Find wisdom in your dilemmas</p>
            </div>
          </Card>
          
          <Card className="p-4 hover:bg-indigo-50 transition-colors cursor-pointer">
            <div className="space-y-2">
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-medium">Explore Paths</h3>
              <p className="text-sm text-gray-600">Discover new perspectives</p>
            </div>
          </Card>
        </div>

        <Card className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Evening Reflection</h3>
              <p className="text-sm opacity-90">Set your reminder for daily wisdom</p>
            </div>
            <Button variant="ghost" className="text-white hover:text-white">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>

      <BottomNav onNavigate={onNavigate} />
    </div>
  );
};

export default HomeScreen;