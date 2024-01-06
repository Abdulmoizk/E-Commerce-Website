import {
    auth,
    onAuthStateChanged ,
    signOut
  
  } from './firebase.js';
  


onAuthStateChanged(auth, (user) => {
    if (user) {
      if(user.email !== "admin@gmail.com"){
        window.location = '/index.html'
      }
      const uid = user.uid;
      // ...
    } else {
        window.location = '/index.html'
    }
  });
  
  //logout

let logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location = '/index.html'
  }).catch((error) => {
    // An error happened
  });
}

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click", logout)
