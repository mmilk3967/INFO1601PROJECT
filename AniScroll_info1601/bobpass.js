import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create the user
async function createBobAccount() {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      "bob@mail.com",
      "bobpass"
    );
    
    // Set display name to "bob"
    await updateProfile(userCredential.user, {
      displayName: "bob"
    });
    
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
}

createBobAccount();