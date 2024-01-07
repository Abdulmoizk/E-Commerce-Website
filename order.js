import {
    collection,
    getDocs,
    where,
    query,
    addDoc,
    db,
    getDoc,
    doc,
    serverTimestamp,
    updateDoc,
    signOut


} from '/firebase.js';



import {
    auth,
    onAuthStateChanged,

} from './firebase.js';

if(location.pathname === "order.html"){

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
});}


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
  


const placeorder = document.getElementById("placeorder");
placeorder && placeorder.addEventListener("click", async () => {
    const customerName = document.getElementById("customerName");
    const customerContact = document.getElementById("customerContact");
    const customerAddress = document.getElementById("customerAddress");
    const cartDiv = document.getElementById("cart");
    const cart = JSON.parse(localStorage.getItem("cart"));
    const sum = cart.reduce((a, b) => a + Number(b.price) * b.qty, 0)

    const closeBtn = document.getElementById("closeBtn");

    if (customerName.value === "" || customerAddress.value === "" || customerAddress.value === "") {
        alert("Please fill out all required fields")
    } else {
        const placeOderSpinner = document.getElementById("placeOderSpinner");
        placeOderSpinner.style.display = "block";
        const docRef = await addDoc(collection(db, "orders"), {
            customerName: customerName.value,
            customerContact: customerContact.value,
            customerAddress: customerAddress.value,
            status: 'pending',
            cart,
            timestamp: serverTimestamp(),
            orderAmount: sum,
            deliveryCharges: 100,
            totalAmount: sum + 100,

        });
        Swal.fire({
            title: "Order Placed!",
            text: "Your order has been placed!",
            icon: "success",
            timer: 1500,
        });
        customerName.value = "";
        customerContact.value = "";
        customerAddress.value = "";
        localStorage.removeItem("cart");
        cartDiv.innerHTML = "";
        placeOderSpinner.style.display = "block";
        closeBtn.click();

        console.log("Document written with ID: ", docRef.id);
    }
})

const getAllOrders = async () => {
    const allOrders = document.getElementById("allOrders")
    if (allOrders) {
        allOrders.innerHTML = "";
        let index = 0;
        const q = collection(db, "orders");
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            index++;
            let status = doc.data().status
            let statusColor = ""
            if (status === 'pending') {
                statusColor = "pending";
            } else if (status === 'delivered') {
                statusColor = "delivered";
            } else {
                statusColor = "cancelled";
            }
            // console.log(doc.id, " => ", doc.data());
            allOrders.innerHTML += `
        <tr>
        <th scope="row">${index}</th>
        <td>${doc.data().customerName}</td>
        <td>${doc.data().customerContact}</td>
        <td>${doc.data().customerAddress}</td>
        <td><span class="badge ${statusColor}">${doc.data().status}</span></td>
        <td>${doc.data().totalAmount} /-</td>
        <td><button onclick="viewOrderDetails('${doc.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
       View details
      </button></td>
        </tr>
        `

        });
    }
}
getAllOrders();
let updateOrderID;
const viewOrderDetails = async (id) => {
    updateOrderID = id;
    const cart = document.getElementById("cart");
    const orderStatus = document.getElementById("orderStatus");

    cart.innerHTML = "";
    const docRef = doc(db, "orders", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const cartItems = docSnap.data().cart;
        orderStatus.value = docSnap.data().status
        for (var i = 0; i < cartItems.length; i++) {
            cart.innerHTML += `
        <div class="d-flex flex-column gap-2">
                    <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center" >
                    <h5 class="mt-2  fw-bold ">${cartItems[i].name}</h5>
                    <a class="btn" onclick="deleteCartItem(${i})" style="color: #fff;" href="#"><i  class="fa-solid fa-trash"></i></a> 
                    </div>
                        <div class="d-flex align-items-center gap-2">
                            <div>
                                <img src="${cartItems[i].image}" class="img-fashion" alt="">
                            </div>
                            <div>
                                <div class="card-body">
                                    <p class="card-title">${cartItems[i].description}</p>
                                    <span class="card-text">Rs: ${cartItems[i].price} /- </span>
                                    <p class="card-text">Quantity: ${cartItems[i].qty}</p>
                                    <strong class="card-text">Total: ${cartItems[i].price *
                cartItems[i].qty}</strong>
                                </div>
                            </div>
                            </div>
                           
                    </div>
                </div>
        `
        }
    } else {
        console.log("No such document!");
    }
    console.log(id)
}

window.viewOrderDetails = viewOrderDetails;

const updateBtn = document.getElementById("updateBtn");
updateBtn && updateBtn.addEventListener("click", async () => {
    const orderStatus = document.getElementById("orderStatus");
    const closeBtn = document.getElementById("closeBtn");
    const docRef = doc(db, "orders", updateOrderID);

    // Set the "capital" field of the city 'DC'
    await updateDoc(docRef, {
        status: orderStatus.value,
    });
    closeBtn.click()
    getAllOrders();

})
