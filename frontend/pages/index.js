
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9gOetNNR6vCltoBxAcHwfUvKKXp7wU8I",
  authDomain: "wikit-xino.firebaseapp.com",
  projectId: "wikit-xino",
  storageBucket: "wikit-xino.appspot.com",
  messagingSenderId: "1006145371026",
  appId: "1:1006145371026:web:ede61cc6179d280c071f4b",
  measurementId: "G-E6RKPVEWST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
 const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}
function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
  }
  function SignOut(){
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  function ChatRoom(){
   const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'}); 
    return(
      <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      </div>
      </>
    )
  
  }
  function ChatMessage(props){
    const {text, uid} = props.message;
    return <p>{text}</p>
  }

export default App;
