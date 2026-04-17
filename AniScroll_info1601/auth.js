import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { app } from "./firebaseConfig.js";

export const auth = getAuth(app);

// logout
export function logout() {
    signOut(auth);
}

// listen for login state
export function setAuthListeners(onLogin, onLogout) {
    onAuthStateChanged(auth, user => {
        if (user) {
            onLogin(user);
        } else {
            onLogout();
        }
    });
}
