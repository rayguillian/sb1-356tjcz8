import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { PathsList } from '@/components/profile/PathsList';
import { SettingsMenu } from '@/components/profile/SettingsMenu';
import type { UserData } from '@/lib/types';

interface ProfileScreenProps {
  userData: UserData;
  onSignOut: () => Promise<void>;
}

const ProfileScreen = ({ userData, onSignOut }: ProfileScreenProps) => {
  const [currentPaths, setCurrentPaths] = useState([
    { id: 1, name: "Stoicism", active: true },
    { id: 2, name: "Buddhism", active: true },
    { id: 3, name: "Renaissance Art", active: false }
  ]);

  const userStats = {
    daysActive: 42,
    reflectionsCompleted: 36,
    savedContent: 15
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pb-20">
      <ProfileHeader 
        userName={userData.email.split('@')[0]} 
        stats={userStats} 
      />

      <div className="max-w-lg mx-auto p-4 space-y-6">
        <PathsList 
          paths={currentPaths}
          onPathToggle={(id) => {
            setCurrentPaths(currentPaths.map(p => 
              p.id === id ? {...p, active: !p.active} : p
            ));
          }}
        />
        
        <SettingsMenu 
          preferredTime={userData.preferences.preferredTime}
          onSignOut={onSignOut}
        />
      </div>
    </div>
  );
};

export default ProfileScreen;