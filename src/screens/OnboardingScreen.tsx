import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock } from 'lucide-react';
import { signUp } from '@/lib/auth';
import { createUserProfile } from '@/lib/user';
import type { UserPreferences } from '@/lib/types';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selections, setSelections] = useState<UserPreferences>({
    background: '',
    interests: [],
    preferredTime: '',
  });

  const backgrounds = [
    'Spiritual but not religious',
    'Christianity',
    'Buddhism',
    'Islam',
    'Hinduism',
    'Philosophy',
    'Open to all'
  ];

  const handleSignUp = async () => {
    try {
      setError('');
      const user = await signUp(email, password);
      await createUserProfile(user.uid, email, selections);
      onComplete();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold mb-8">Welcome to Enlighten</h1>
            <p className="text-gray-600 mb-8">Let's create your personal journey of wisdom</p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <Button 
              className="w-full bg-indigo-600" 
              onClick={() => setStep(2)}
              disabled={!email || !password}
            >
              Begin
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">What resonates with you?</h2>
            <div className="grid grid-cols-1 gap-3">
              {backgrounds.map((bg) => (
                <Card 
                  key={bg}
                  className={`p-4 cursor-pointer transition-all ${
                    selections.background === bg ? 'border-indigo-600 bg-indigo-50' : ''
                  }`}
                  onClick={() => setSelections({...selections, background: bg})}
                >
                  {bg}
                </Card>
              ))}
            </div>
            <Button 
              className="w-full mt-6 bg-indigo-600"
              onClick={() => setStep(3)}
              disabled={!selections.background}
            >
              Continue
            </Button>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Choose your interests</h2>
            <div className="grid grid-cols-2 gap-3">
              {['Moral guidance', 'Daily reflection', 'Historical wisdom', 'Sacred art', 'Meditation', 'Life advice'].map((interest) => (
                <Card
                  key={interest}
                  className={`p-4 cursor-pointer text-center transition-all ${
                    selections.interests.includes(interest) ? 'border-indigo-600 bg-indigo-50' : ''
                  }`}
                  onClick={() => {
                    const newInterests = selections.interests.includes(interest)
                      ? selections.interests.filter(i => i !== interest)
                      : [...selections.interests, interest];
                    setSelections({...selections, interests: newInterests});
                  }}
                >
                  {interest}
                </Card>
              ))}
            </div>
            <Button 
              className="w-full mt-6 bg-indigo-600"
              onClick={() => setStep(4)}
              disabled={selections.interests.length === 0}
            >
              Continue
            </Button>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">When would you like your daily reflection?</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                <Card
                  key={time}
                  className={`p-4 cursor-pointer flex items-center justify-between ${
                    selections.preferredTime === time ? 'border-indigo-600 bg-indigo-50' : ''
                  }`}
                  onClick={() => setSelections({...selections, preferredTime: time})}
                >
                  <span>{time}</span>
                  <Clock className="w-5 h-5" />
                </Card>
              ))}
            </div>
            <Button 
              className="w-full mt-6 bg-indigo-600"
              onClick={() => setStep(5)}
              disabled={!selections.preferredTime}
            >
              Continue
            </Button>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold mb-6">Your journey awaits</h2>
            <p className="text-gray-600">We've personalized your experience based on your choices.</p>
            <Button 
              className="w-full bg-indigo-600"
              onClick={handleSignUp}
            >
              Begin Your Journey
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <div className="max-w-md mx-auto">
        {step > 1 && step < 5 && (
          <div className="flex justify-between mb-8">
            {[2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 mx-1 rounded ${
                  s <= step ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        )}
        
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingScreen;