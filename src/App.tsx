import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import OnboardingScreen from '@/screens/OnboardingScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { getUserProfile } from '@/lib/user';
import { signOut } from '@/lib/auth';
import type { UserData } from '@/lib/types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'home' | 'profile'>('home');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const profile = await getUserProfile(firebaseUser.uid);
        setUser(profile);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <OnboardingScreen onComplete={() => {}} />;
  }

  return (
    <>
      {currentScreen === 'home' ? (
        <HomeScreen 
          userData={user} 
          onNavigate={setCurrentScreen}
        />
      ) : (
        <ProfileScreen 
          userData={user} 
          onSignOut={handleSignOut}
        />
      )}
    </>
  );
}