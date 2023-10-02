import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/fireBaseConfig";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(true);
  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //singUp
  const creatUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //singIn
  const singInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  console.log(user);

  // update user data
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //LOGOUT
  const logOut = () => {
    return signOut(auth);
  };

  const authentication = {
    googleLogin,
    creatUser,
    singInUser,
    logOut,
    user,
    loading,
    handleUpdateProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authentication}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
