import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Bell, 
  Heart, 
  Moon, 
  Settings,
  ChevronRight 
} from 'lucide-react';

interface SettingsMenuProps {
  preferredTime: string;
  onSignOut: () => Promise<void>;
}

export function SettingsMenu({ preferredTime, onSignOut }: SettingsMenuProps) {
  const menuItems = [
    {
      icon: Clock,
      title: "Reflection Time",
      description: preferredTime,
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Daily reminders active",
    },
    {
      icon: Heart,
      title: "Saved Content",
      description: "View your library",
    },
    {
      icon: Moon,
      title: "Appearance",
      description: "Light mode",
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Privacy, data, subscription",
      onClick: onSignOut,
    },
  ];

  return (
    <div className="space-y-2">
      {menuItems.map((item, index) => (
        <Card key={index}>
          <button 
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
            onClick={item.onClick}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </Card>
      ))}
    </div>
  );
}