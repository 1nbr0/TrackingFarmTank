import React, { createContext, useState, useContext, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "./AuthProvider";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const groupsColletion = onSnapshot(
      collection(db, `users/${currentUser.uid}/groups`),
      (querrySnapshot) => {
        const myGroups = querrySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setGroups(myGroups);
      }
    );
    return () => groupsColletion();
  }, []);

  const handleAdd = async (currentName, currentDesc) => {
    const newGroup = {
      name: currentName,
      description: currentDesc,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    };

    const collectionRef = collection(db, `users/${currentUser.uid}/groups`);
    console.log(collectionRef);

    await addDoc(collectionRef, newGroup);
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, `users/${currentUser.uid}/groups/`, id);
    await deleteDoc(docRef);
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => {
  const context = useContext(GroupContext);

  if (context === undefined) {
    throw new Error("useGroup must be used within a GroupProvider");
  }

  return context;
};
