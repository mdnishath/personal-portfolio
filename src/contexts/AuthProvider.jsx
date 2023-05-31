import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import auth from "../utils/firebase/firebase.config";
import { storage } from "../utils/firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { API } from "../hooks/useAxios";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // const [axiosSecure] = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // =============Social Login ==============
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // =============Social Login ==============

  //update profile
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  //upload Image
  const uploadImage = async (file) => {
    // Create a storage reference
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      // Upload the file to Firebase storage
      const snapshot = await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      // setUploadedImageUrl(downloadURL);
      return downloadURL;
      // Do something with the uploaded image and the download URL
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //obgerver
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("obgerver user", currentUser);
      setUser(currentUser);
      setLoading(false);
      // get and set token
      if (currentUser) {
        const token = localStorage.getItem("access-token");

        const res = await API.post("/jwt", {
          email: currentUser.email,
        });
        localStorage.setItem("access-token", res.data.token);
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //Value of auth
  const authInfo = {
    user,
    isOpen,
    setOpen,
    createUser,
    updateUser,
    uploadImage,
    loading,
    setLoading,
    logOut,
    signIn,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
