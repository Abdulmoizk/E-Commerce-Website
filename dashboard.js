import {
  auth,
  onAuthStateChanged,
  signOut,
  collection,
  getDocs,
  db,
  query,
  where,


} from './firebase.js';



onAuthStateChanged(auth, (user) => {
  if (user) {
    if (user.email !== "admin@gmail.com") {
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


// const getTotal = async () => {
//   const productTotal = document.getElementById("productTotal");
//   const categoryTotal = document.getElementById("categoryTotal");
//   const porder = document.getElementById("porder");
//   const dorder = document.getElementById("dorder");
//   const corder = document.getElementById("corder");
//   const category = collection(db, "categories");
//   const product = collection(db, "products");
//   const pendingOrders = query(collection(db, "orders"), where("status", "==", "pending"));
//   const deliveredOrders = query(collection(db, "orders"), where("status", "==", "delivered"));
//   const cancelledOrders = query(collection(db, "orders"), where("status", "==", "cancelled"));
//   const categorySnapshot = await getDocs(category);
//   const productSnapshot = await getDocs(product);
//   const porderSnapshot = await getDocs(pendingOrders);
//   const dorderSnapshot = await getDocs(deliveredOrders);
//   const corderSnapshot = await getDocs(cancelledOrders);
//   porderSnapshot.forEach((doc) => {
//     porder.innerHTML = porderSnapshot.size;
//   })
//   dorderSnapshot.forEach((doc) => {
//     dorder.innerHTML = dorderSnapshot.size;
//   })
//   corderSnapshot.forEach((doc) => {
//     corder.innerHTML = corderSnapshot.size;
//   })
//   const totalCategories = categorySnapshot.size;
//   const totalProducts = productSnapshot.size;
//   categoryTotal.innerHTML = totalCategories;
//   productTotal.innerHTML = totalProducts;
// };

// getTotal();


const getElement = (id) => document.getElementById(id);

const getCountAndUpdateElement = async (query, element) => {
  try {
    const snapshot = await getDocs(query);
    element.innerHTML = snapshot.size;
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

const getTotal = async () => {
  const productTotal = getElement('productTotal');
  const categoryTotal = getElement('categoryTotal');
  const porder = getElement('porder');
  const dorder = getElement('dorder');
  const corder = getElement('corder');

  const categoryQuery = collection(db, 'categories');
  const productQuery = collection(db, 'products');
  const pendingOrdersQuery = query(collection(db, 'orders'), where('status', '==', 'pending'));
  const deliveredOrdersQuery = query(collection(db, 'orders'), where('status', '==', 'delivered'));
  const cancelledOrdersQuery = query(collection(db, 'orders'), where('status', '==', 'cancelled'));

  await Promise.all([
    getCountAndUpdateElement(categoryQuery, categoryTotal),
    getCountAndUpdateElement(productQuery, productTotal),
    getCountAndUpdateElement(pendingOrdersQuery, porder),
    getCountAndUpdateElement(deliveredOrdersQuery, dorder),
    getCountAndUpdateElement(cancelledOrdersQuery, corder),
  ]);
};

getTotal();


// 