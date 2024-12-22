import { User } from 'lucide-react';

interface ProfileHeaderProps {
  userName: string;
  stats: {
    daysActive: number;
    reflectionsCompleted: number;
    savedContent: number;
  };
}

export function ProfileHeader({ userName, stats }: ProfileHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-lg mx-auto p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{userName}</h1>
            <p className="text-gray-600">Seeker of wisdom</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl font-semibold text-indigo-600">{stats.daysActive}</p>
            <p className="text-sm text-gray-600">Days Active</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-indigo-600">{stats.reflectionsCompleted}</p>
            <p className="text-sm text-gray-600">Reflections</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-indigo-600">{stats.savedContent}</p>
            <p className="text-sm text-gray-600">Saved Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}