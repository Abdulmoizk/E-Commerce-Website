import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  db,
  query,
  where,
  getDocs,


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
      if (user.email === "admin@gmail.com") {
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

let logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location = '/index.html'
  }).catch((error) => {
    // An error happened
  });
}
window.logout = logout;


let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click", logout)

//userstate

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    console.log("user login")
    // ...
  } else {
    console.log("no user")
  }
});


const getAllCategories = async () => {
  const indexShops = document.getElementById('index-shops');
  const categoryList = document.getElementById('category-list');


  const q = collection(db, "categories");
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    if (indexShops) {
      indexShops.innerHTML += `
  <div class="card" style="width: 18rem;">
                    <img src="${doc.data().categoryLogo}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${doc.data().name}</h5>
                        <p class="card-text">${doc.data().variation}</p>
                        <p class="card-text">${doc.data().industry}</p>
                        <a href="product.html?category=${doc.id}" class="btn btn-primary">Shop it</a>
                    </div>
                </div>
  `
      categoryList.innerHTML += `
  <li><a class="dropdown-item" href="product.html?category=${doc.id}">${doc.data().name}</a></li>
  `}
  });
}
getAllCategories();





onAuthStateChanged(auth, (user) => {
  const userState = document.getElementById("userState");
  const dashboardBtn = document.getElementById("dashboardBtn");
  if (user) {
    if (user.email === "admin@gmail.com") {
      dashboardBtn.style.display = "block";
      console.log("runningauth")
    }
    userState.innerHTML = `
                  <button onclick="logout()" class="btn login-user btn-primary">Logout</button>      
    `
    const uid = user.uid;
    // ...
  } else {
    userState.innerHTML = `
                    <button  class="btn btn-primary"><a href="register.html">Register</a></button>
                    <button   class="btn btn-outline-primary"><a href="login.html">Login</a></button>
  `
  }
});