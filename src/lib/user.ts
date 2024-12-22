import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import type { UserPreferences, UserData } from './types';

export const createUserProfile = async (
  userId: string,
  email: string,
  preferences: UserPreferences
): Promise<void> => {
  const userData: UserData = {
    id: userId,
    email,
    preferences,
    createdAt: new Date(),
  };

  await setDoc(doc(db, 'users', userId), userData);
};

export const getUserProfile = async (userId: string): Promise<UserData | null> => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as UserData;
  }
  
  return null;
};