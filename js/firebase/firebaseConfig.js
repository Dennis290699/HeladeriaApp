// js/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

class Firebase {
  constructor() {
    if (!Firebase.instance) {
      const firebaseConfig = {
        apiKey: "AIzaSyDjD-hv1CeGoBIlh7rOWrzIv48HJgzOU-Q",
        authDomain: "heladeriaapp-738de.firebaseapp.com",
        projectId: "heladeriaapp-738de",
        storageBucket: "heladeriaapp-738de.appspot.com",
        messagingSenderId: "700077320362",
        appId: "1:700077320362:web:65c64389f272deb6fa88d3",
        measurementId: "G-7KNG86ZZ98"
      }
      
      const app = initializeApp(firebaseConfig);
      this.db = getFirestore(app);
      this.auth = getAuth(app);
      Firebase.instance = this;
    }

    return Firebase.instance;
  }
}

const firebaseInstance = new Firebase();
Object.freeze(firebaseInstance);
export default firebaseInstance;
