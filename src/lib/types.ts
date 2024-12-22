export interface UserPreferences {
  background: string;
  interests: string[];
  preferredTime: string;
}

export interface UserData {
  id: string;
  email: string;
  preferences: UserPreferences;
  createdAt: Date;
}