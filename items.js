
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
  

const getAllCategories = async () => {
    try {

        const categorySelect = document.getElementById("category-select");
        let index = 0;

        const q = collection(db, "categories");
        const querySnapshot = await getDocs(q);
        let categories = [];
        categorySelect.innerHTML = ""; 
        querySnapshot.forEach((doc) => {
            categories.push({ ...doc.data(), id: doc.id });
            index++;
            // console.log(doc.id, " => ", doc.data());
            categorySelect.innerHTML += `
        <option  value="${doc.id}">${doc.data().name}</option>
        `
        });
        return new Promise((resolve, reject) => {
            resolve(categories)
        })
    } catch (err) {
        console.log("error", err);
    }
}
getAllCategories();
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

let productImage = document.getElementById("productImage");
const selectedImage = document.getElementById("selectedImage");
let file;
productImage && productImage.addEventListener("change", (e) => {
    file = e.target.files[0];
    selectedImage.style.display = "block";
    selectedImage.src = URL.createObjectURL(e.target.files[0])
})




const addProduct = document.getElementById("sumbitProduct");
addProduct.addEventListener("click", async () => {
    const closeBtn = document.getElementById("closeBtn");
    const categorySelect = document.getElementById("category-select");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");


    if (categorySelect.value === '' || productName.value === '' || productPrice.value === '' || productDescription.value === '' || productImage.value === '') {
        alert("Please fill out all required fields")
    } else {
        const dishSpinner = document.getElementById("dishSpinner");
        dishSpinner.style.display = "block"
        const image = await uploadFile(productImage.files[0], productName.value)
        const productDetail = {
            category: categorySelect.value,
            name: productName.value,
            price: productPrice.value,
            description: productDescription.value,

            image,
        }
        const docRef = await addDoc(collection(db, "products"), productDetail);
        dishSpinner.style.display = "none"
        categorySelect.value = "";
        productName.value = "";
        productDescription.value = "";
        productPrice.value = "";
        productImage.value = "";
        selectedImage.style.display = "none";
        console.log(docRef)
        closeBtn.click()
        getAllProducts()
    }
})





const getAllProducts = async () => {
    const categories = await getAllCategories();
    const allProducts = document.getElementById("allProducts");
    allProducts.innerHTML = "";
    let index = 0;
    let categoryNames = {};
    for (var i=0; i < categories.length; i++){
       categoryNames [categories[i].id] = categories[i].name
    }
    const q = collection(db, "products");
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        index++;
        console.log(categoryNames[doc.data().category])
        
        
        allProducts.innerHTML += `
        <tr>
                    <th scope="row">1</th>
                    <td><img src="${doc.data().image}" id="product-image" alt=""></td>
                    <td>${doc.data().name}</td>
                    <td>${doc.data().description}</td>
                    <td>${doc.data().price}</td>
                    <td>${categoryNames[doc.data().category]}</td>
                </tr>
        `
       
    });
}
getAllProducts();


