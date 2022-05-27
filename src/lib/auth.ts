import Router from 'next/router';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/index';
import { User } from '../types/user';

export const testLogin = async () => {
  signInWithEmailAndPassword(auth, 'test@test.com', 'test1234').then(() => {
    Router.push('/');
  });
};

export const login = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider).catch((e) => {
    alert(e.message);
  });
};

export const logout = async () => {
  await signOut(auth).catch((e) => {
    alert(e.message);
  });
};

export const listenAuthState = (): Promise<User | undefined> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        Router.push('/login');
        reject(undefined);
      } else {
        const { email } = user;
        const uid = user.uid;
        if (email === 'test@test.com') {
          resolve({ uid: uid });
        } else {
          const res = await fetch('/api/auth', {
            method: 'POST',
            body: email,
          });
          await res
            .json()
            .then((data) => {
              if (data) {
                resolve({
                  uid: uid,
                });
                Router.push('/');
              } else {
                logout();
                Router.push('/login');
                reject(undefined);
              }
            })
            .catch((e) => {
              alert(e.message);
            });
        }
      }
    });
  });
};
