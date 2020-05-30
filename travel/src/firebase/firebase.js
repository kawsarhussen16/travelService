import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDJx7Vgymhyo7kgw74lJ-hwYprzl8XWXts",
  authDomain: "travel-b4615.firebaseapp.com",
  databaseURL: "https://travel-b4615.firebaseio.com",
  projectId: "travel-b4615",
  storageBucket: "travel-b4615.appspot.com",
  messagingSenderId: "979764515006",
  appId: "1:979764515006:web:8d89c55d721d3c8d450eef",
  measurementId: "G-RGMVJRNDH5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (key, obj) => {
  const collectionRef = firestore.collection(key);
  const batch = firestore.batch();
  console.log(collectionRef, "firebase ref");
  obj.forEach((data) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, data);
  });

  return await batch.commit();
};
export const addOneObj = async (key, obj) => {
  const collectionRef = firestore.collection(key);
  const batch = firestore.batch();
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, obj);

  return await batch.commit();
};

export const firestore = firebase.firestore();
export default firebase;
