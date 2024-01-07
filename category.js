
import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    collection,
    addDoc,
    db,
    query,
    where,
    getDocs,
    signOut



} from '/firebase.js'

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
  


let logo = document.getElementById("categoryLogo");
const selectedLogo = document.getElementById("selectedLogo");
let file;
logo && logo.addEventListener("change", (e) => {
    file = e.target.files[0];
    selectedLogo.style.display = "block";
    selectedLogo.src = URL.createObjectURL(e.target.files[0])
})





let uploadFile = (file, categoryName) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${categoryName.split(" ").join("-")}`);

        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error);
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                });
            }
        );

    }
    )
}


const submitcategory = document.getElementById("submitcategory");

submitcategory && submitcategory.addEventListener("click", async () => {
    const closeBtn = document.getElementById("closeBtn");
    const categoryName = document.getElementById("categoryName");
    const categoryVariation = document.getElementById("categoryVariation");
    const categoryIndustry = document.getElementById("categoryIndustry");

    if (categoryName.value === "" || categoryVariation.value === "" || categoryIndustry.value === "" || logo.value === "" ) {
        alert("Please fill out all required fields")
    } else {

        const categorySpinner = document.getElementById("categorySpinner");
        categorySpinner.style.display = "block"
        const categoryLogo = await uploadFile(file, categoryName.value);
        console.log(categoryName.value, categoryVariation.value, categoryIndustry.value, file)

        const docRef = await addDoc(collection(db, "categories"), {
            name: categoryName.value,
            variation: categoryVariation.value,
            industry: categoryIndustry.value,
            categoryLogo,
        });
        categorySpinner.style.display = "none";
        categoryIndustry.value = "";
        categoryName.value = "";
        categoryVariation.value = "";
        logo.value = "";
        selectedLogo.style.display = "none";
        console.log("Document written with ID: ", docRef.id);
        getAllCategories();
        closeBtn.click();
    }
})

const getAllCategories = async () => {
    const categoryList = document.getElementById("list-category");
    categoryList.innerHTML = "";
    let index = 0;
    const q = collection(db, "categories");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        index++;
        console.log(doc.id, " => ", doc.data());
        categoryList.innerHTML += `
        <tr>
        <th scope="row">${index}</th>
        <td><img id="list-img" src="${doc.data().categoryLogo}" alt=""></td>
        <td>${doc.data().name}</td>
        <td>${doc.data().variation}</td>
        <td>${doc.data().industry}</td>
    </tr>
        `
    });
}
getAllCategories();


export { uploadFile };

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
  