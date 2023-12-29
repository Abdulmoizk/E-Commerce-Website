import {
    auth,
    onAuthStateChanged ,
  
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
  