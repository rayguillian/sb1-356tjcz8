import { Button } from "@/components/ui/button";
import { Sun, Compass, Book, User } from 'lucide-react';

interface BottomNavProps {
  onNavigate: (screen: 'home' | 'profile') => void;
}

export function BottomNav({ onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t">
      <div className="max-w-lg mx-auto flex justify-around p-4">
        <Button 
          variant="ghost" 
          className="flex-col items-center"
          onClick={() => onNavigate('home')}
        >
          <Sun className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </Button>
        <Button variant="ghost" className="flex-col items-center">
          <Compass className="w-5 h-5" />
          <span className="text-xs mt-1">Guide</span>
        </Button>
        <Button variant="ghost" className="flex-col items-center">
          <Book className="w-5 h-5" />
          <span className="text-xs mt-1">Paths</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex-col items-center"
          onClick={() => onNavigate('profile')}
        >
          <User className="w-5 h-5" />
          <span className="text-xs mt-1">Profile</span>
        </Button>
      </div>
    </div>
  );
}