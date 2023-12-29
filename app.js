import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,

} from './firebase.js';


function openModal() {
  document.getElementById('aboutUsModal').style.display = 'flex';
}

window.openModal = openModal;
window.closeModal = closeModal;
function closeModal() {
  document.getElementById('aboutUsModal').style.display = 'none';
}

let aboutInfo = document.getElementById("contactInfo");
let aboutBtn = document.getElementById("aboutBtn");


aboutBtn && aboutBtn.addEventListener("click", () => {

  window.scrollTo({
    top: aboutInfo.offsetTop,
    behavior: "smooth",
  })
});



/////////scrollToTop////////

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function () {
    // Show the button when the page is scrolled down
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn && scrollToTopBtn.addEventListener('click', function () {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


//login

let login = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      if(user.email === "admin@gmail.com"){
        window.location = '/dashboard.html'
      } else {
        window.location = '/index.html'
      }
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

}

let loginBtn = document.getElementById("loginBtn");
loginBtn && loginBtn.addEventListener('click', login);

//register

let signup = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
     
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

}

let signupBtn = document.getElementById("signupBtn");
signupBtn && signupBtn.addEventListener('click', signup);


//logout

let logout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location = '/index.html'
  }).catch((error) => {
    // An error happened
  });
}


let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click", logout)