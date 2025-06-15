import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from "../firebase/firebase.init";



const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();




 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>;
  }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
 const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


      const userInfo = {
        user,
        createUser,
        loginUser,
        signInWithGoogle,
        loading
        }
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;