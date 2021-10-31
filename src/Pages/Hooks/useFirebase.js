import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    }
    return {
        user,
        setUser,
        signInUsingEmail,
        signInUsingGoogle
    }
}

export default useFirebase;