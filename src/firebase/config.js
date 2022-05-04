import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyAN1difuOuCUO-1WgnNBHWZIzvtvSd_DPg',
    authDomain: 'chatapp-8baca.firebaseapp.com',
    databaseURL: 'https://chatapp-8baca-default-rtdb.firebaseio.com',
    projectId: 'chatapp-8baca',
    storageBucket: 'chatapp-8baca.appspot.com',
    messagingSenderId: '810727850476',
    appId: '1:810727850476:web:58ff01c04d4063816240c9',
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  