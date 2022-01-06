import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC2a5bAPnwuWPyQuOLWXVCnecGeYHVLhiI",
  authDomain: "complaintforum-50db0.firebaseapp.com",
  projectId: "complaintforum-50db0",
  storageBucket: "complaintforum-50db0.appspot.com",
  messagingSenderId: "501982554573",
  appId: "1:501982554573:web:1262ef601865ecfb1bbc84" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

