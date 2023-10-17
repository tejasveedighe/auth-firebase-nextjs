// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA8cMZy-LAbAGLeIhSd88o7kCZYfRlFVmA",
	authDomain: "testnumberauth.firebaseapp.com",
	projectId: "testnumberauth",
	storageBucket: "testnumberauth.appspot.com",
	messagingSenderId: "1063336667102",
	appId: "1:1063336667102:web:f6769a5b5f342f9ce49f4f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
