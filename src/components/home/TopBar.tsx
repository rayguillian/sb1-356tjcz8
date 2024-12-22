import { Button } from "@/components/ui/button";
import { Sun, User } from 'lucide-react';

interface TopBarProps {
  userName: string;
  onSignOut: () => void;
}

export function TopBar({ userName, onSignOut }: TopBarProps) {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">Good Morning, {userName}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="p-2" onClick={onSignOut}>
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}