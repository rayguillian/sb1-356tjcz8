import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { auth } from './firebase';

export const signUp = async (email: string, password: string): Promise<User> => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signIn = async (email: string, password: string): Promise<User> => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOut = () => firebaseSignOut(auth);