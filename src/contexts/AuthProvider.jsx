import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "../utils/firebase/firebase.config";
import { storage } from "../utils/firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("obgerver user", currentUser);
      setUser(currentUser);
      setLoading(false);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
