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
import { useGroup } from "./GroupProvider";

const TankContext = createContext();

export const TankProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const { groups } = useGroup();
  const [tanks, setTanks] = useState([]);
  const groupId = groups[0].id;

  useEffect(() => {
    const tanksCollection = onSnapshot(
      collection(db, `users/${currentUser.uid}/groups/${groupId}/tanks`),
      (querrySnapshot) => {
        const myTanks = querrySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTanks(myTanks);
      }
    );
    return () => tanksCollection();
  }, []);

  const handleAdd = async (currentName, currentDesc) => {
    const newTank = {
      name: currentName,
      description: currentDesc,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    };

    const collectionRef = collection(
      db,
      `users/${currentUser.uid}/groups/${groupId}/tanks`
    );

    await addDoc(collectionRef, newTank);
  };

  const handleDelete = async (id) => {
    const docRef = doc(
      db,
      `users/${currentUser.uid}/groups/${groupId}/tanks/`,
      id
    );
    await deleteDoc(docRef);
  };

  return (
    <TankContext.Provider
      value={{
        tanks,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </TankContext.Provider>
  );
};

export const useTank = () => {
  const context = useContext(TankContext);

  if (context === undefined) {
    throw new Error("useTank must be used within a TankContext");
  }

  return context;
};
