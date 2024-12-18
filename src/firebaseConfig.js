import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7uEtPPkO03kquDx4apuYftHqJvERJ5s0",
  authDomain: "asda-84b95.firebaseapp.com",
  projectId: "asda-84b95",
  storageBucket: "asda-84b95.firebasestorage.app",
  messagingSenderId: "61035113952",
  appId: "1:61035113952:web:031fde0c4cc7b6e52c8f85",
  measurementId: "G-L3YJVYYJCV",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
export const database = getDatabase(app);