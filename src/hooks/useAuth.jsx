import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebase from '../api/firebase';

function useAuth() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth(firebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    setInit(true);
  });

  return { init, isLogin };
}

export default useAuth;
