// let categories = {
//     fashion: {
//         men: {
//             traditionalWear: {
//                 brands: ["Sartorial Elegance", "Urban Dapper", "Heritage Threads"],
//                 styles: ["Sherwani", "Kurta-Pajama", "Pathani Suit"],
//                 colors: ["Ivory", "Charcoal", "Emerald Green"],
//                 priceRange: "$99.99 - $399.99"
//             },
//             casualFootwear: {
//                 brands: ["StrideSmart", "Urban Kicks", "Weekend Vibes"],
//                 styles: ["Sneakers", "Loafers", "Canvas Shoes"],
//                 colors: ["Navy Blue", "Tan", "Burgundy"],
//                 priceRange: "$49.99 - $129.99"
//             }
//         },
//         women: {
//             ethnicEnsembles: {
//                 brands: ["Radiant Charisma", "Femme Vogue", "Ethereal Essence"],
//                 styles: ["Anarkali Suit", "Lehenga Choli", "Palazzo Set"],
//                 colors: ["Crimson Red", "Royal Blue", "Mint Green"],
//                 priceRange: "$149.99 - $599.99"
//             },
//             readyToWear: {
//                 brands: ["Chic Couture", "Stylish Silhouettes", "Urbane Allure"],
//                 styles: ["Dresses", "Jumpsuits", "Blouses"],
//                 colors: ["Blush Pink", "Monochrome Stripes", "Mustard Yellow"],
//                 priceRange: "$79.99 - $249.99"
//             }
//         },
//         kids: {
//             playfulAttire: {
//                 brands: ["Tiny Tots Trend", "Kiddie Chic", "Whiz Kidz"],
//                 styles: ["Cute Rompers", "Colorful Tees", "Adorable Dresses"],
//                 colors: ["Bubblegum Pink", "Sky Blue", "Sunny Yellow"],
//                 priceRange: "$19.99 - $69.99"
//             }
//         },  
//     },
//     beauty: {
//         makeup: {
//             foundation: {
//                 brand: ["Maybelline", "L'Oreal", "Fenty Beauty", "MAC", "Revlon"],
//                 type: ["Liquid", "Powder", "Stick"],
//                 price: 29.99,
//                 collection: "Matte Finish"
//             },
//             lipstick: {
//                 brand: ["NYX", "Sephora", "Urban Decay", "ColourPop", "Clinique"],
//                 shades: ["Red", "Nude", "Pink", "Berry"],
//                 price: 14.99,
//                 collection: "Velvet Matte"
//             },
//             eyeshadowPalette: {
//                 brand: ["Anastasia Beverly Hills", "Huda Beauty", "Too Faced", "Morphe", "NARS"],
//                 colors: ["Neutral", "Smokey", "Bold"],
//                 price: 39.99,
//                 collection: "Shimmer & Matte"
//             }
//         },
//         skincare: {
//             cleanser: {
//                 brand: ["Cetaphil", "Neutrogena", "La Roche-Posay", "Clinique", "Garnier"],
//                 type: ["Gel", "Foam", "Micellar Water"],
//                 price: 19.99,
//                 collection: "Hydrating"
//             },
//             moisturizer: {
//                 brand: ["Olay", "CeraVe", "The Ordinary", "Kiehl's", "Burt's Bees"],
//                 type: ["Day Cream", "Night Cream", "Gel"],
//                 price: 24.99,
//                 collection: "Anti-Aging"
//             },
//             faceMask: {
//                 brand: ["Origins", "GlamGlow", "Lush", "Peter Thomas Roth", "Sephora Collection"],
//                 types: ["Clay", "Sheet", "Peel-off"],
//                 price: 9.99,
//                 collection: "Detoxifying"
//             }
//         },
//         fragrance: {
//             perfume: {
//                 brand: ["Chanel", "Dior", "Gucci", "Versace", "YSL"],
//                 notes: ["Floral", "Citrus", "Woody", "Spicy"],
//                 price: 79.99,
//                 collection: "Eau de Parfum"
//             },
//             bodyMist: {
//                 brand: ["Bath & Body Works", "Victoria's Secret", "Hollister", "The Body Shop", "Calvin Klein"],
//                 scents: ["Fruity", "Fresh", "Sweet"],
//                 price: 14.99,
//                 collection: "Summer Edition"
//             }
//         }
//     },
//     furniture: {
//         livingRoom: {
//             sofa: {
//                 brand: ["IKEA", "Ashley Furniture", "West Elm", "La-Z-Boy", "Crate & Barrel"],
//                 type: ["Sectional", "Sofa Set", "Recliner"],
//                 price: 899.99,
//                 material: ["Leather", "Fabric", "Microfiber"],
//                 style: ["Modern", "Traditional", "Mid-Century"]
//             },
//             coffeeTable: {
//                 brand: ["Wayfair", "Target", "Pottery Barn", "Urban Outfitters", "CB2"],
//                 shape: ["Rectangular", "Round", "Square"],
//                 price: 149.99,
//                 material: ["Wood", "Glass", "Metal"],
//                 color: ["Walnut", "White", "Black"]
//             },
//             rug: {
//                 brand: ["Ruggable", "Safavieh", "nuLOOM", "Mohawk", "Home Dynamix"],
//                 size: ["5x7", "8x10", "Runner"],
//                 price: 79.99,
//                 pattern: ["Geometric", "Traditional", "Bohemian"]
//             }
//         },
//         bedroom: {
//             bed: {
//                 brand: ["Casper", "IKEA", "Serta", "Zinus", "Pottery Barn"],
//                 size: ["Queen", "King", "Full"],
//                 price: 599.99,
//                 style: ["Platform", "Canopy", "Upholstered"]
//             },
//             dresser: {
//                 brand: ["West Elm", "Raymour & Flanigan", "Room & Board", "IKEA", "Ashley Furniture"],
//                 size: ["3-Drawer", "6-Drawer", "Tall"],
//                 price: 299.99,
//                 color: ["Espresso", "White", "Gray"]
//             },
//             bedsideTable: {
//                 brand: ["Target", "Bed Bath & Beyond", "Wayfair", "IKEA", "Amazon"],
//                 style: ["Nightstand", "Accent Table", "End Table"],
//                 price: 79.99,
//                 material: ["Wood", "Metal", "Glass"]
//             }
//         },
//         decor: {
//             wallArt: {
//                 brand: ["Etsy", "Society6", "IKEA", "Hobby Lobby", "Target"],
//                 type: ["Canvas Print", "Wall Tapestry", "Framed Art"],
//                 price: 49.99,
//                 theme: ["Abstract", "Nature", "Typography"]
//             },
//             lighting: {
//                 brand: ["Lamps Plus", "Wayfair", "Home Depot", "CB2", "West Elm"],
//                 type: ["Chandelier", "Floor Lamp", "Table Lamp"],
//                 price: 89.99,
//                 style: ["Modern", "Industrial", "Bohemian"]
//             },
//             throwPillows: {
//                 brand: ["Pier 1", "Bed Bath & Beyond", "Target", "Anthropologie", "West Elm"],
//                 size: ["18x18", "20x20", "Decorative Shapes"],
//                 price: 24.99,
//                 material: ["Cotton", "Velvet", "Linen"]
//             }
//         }
//     },
//     kitchenAppliances: {
//         kitchen: {
//             stove: {
//                 brand: ["Samsung", "Whirlpool", "LG", "GE", "Bosch"],
//                 type: ["Gas", "Electric", "Induction"],
//                 price: 699.99,
//                 features: ["Convection Oven", "Touch Controls", "Self-Cleaning"]
//             },
//             microwave: {
//                 brand: ["Panasonic", "Sharp", "LG", "Samsung", "Breville"],
//                 type: ["Countertop", "Over-the-Range", "Built-in"],
//                 price: 149.99,
//                 features: ["Inverter Technology", "Sensor Cooking", "Grill Function"]
//             },
//             blender: {
//                 brand: ["Vitamix", "Ninja", "KitchenAid", "Blendtec", "Hamilton Beach"],
//                 type: ["Countertop", "Personal", "Immersion"],
//                 price: 89.99,
//                 features: ["Variable Speed", "Pulse Function", "Ice Crushing"]
//             }
//         },
//         refrigeration: {
//             refrigerator: {
//                 brand: ["LG", "Samsung", "Whirlpool", "GE", "Frigidaire"],
//                 type: ["French Door", "Side-by-Side", "Top Freezer"],
//                 price: 1299.99,
//                 features: ["Ice Maker", "Water Dispenser", "Smart Technology"]
//             },
//             freezer: {
//                 brand: ["Kenmore", "Haier", "Maytag", "Danby", "Amana"],
//                 type: ["Chest", "Upright"],
//                 price: 499.99,
//                 features: ["Frost-Free", "Adjustable Shelves", "Energy Efficient"]
//             }
//         },
//         smallAppliances: {
//             coffeeMaker: {
//                 brand: ["Keurig", "Breville", "Hamilton Beach", "Cuisinart", "Nespresso"],
//                 type: ["Drip", "Single Serve", "Espresso"],
//                 price: 49.99,
//                 features: ["Programmable", "Built-in Grinder", "Pod Compatibility"]
//             },
//             toaster: {
//                 brand: ["Breville", "KitchenAid", "Cuisinart", "Hamilton Beach", "Oster"],
//                 type: ["2-Slice", "4-Slice", "Toaster Oven"],
//                 price: 29.99,
//                 features: ["Bagel Setting", "Defrost Function", "Crumb Tray"]
//             }
//         },

//         mobile: {
//             smartphones: {
//                 brand: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
//                 model: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"],
//                 operatingSystem: ["iOS", "Android"],
//                 price: 799.99,
//                 features: ["5G Connectivity", "High-Resolution Camera", "Face ID/Fingerprint Sensor"]
//             },
//             phoneCases: {
//                 brand: ["Spigen", "OtterBox", "Caseology", "Supcase", "Ringke"],
//                 type: ["Slim Fit", "Heavy Duty", "Clear", "Leather"],
//                 price: 19.99,
//                 compatibleModels: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"]
//             },
//             headphones: {
//                 brand: ["Sony", "Bose", "Apple", "JBL", "Sennheiser"],
//                 type: ["Over-Ear", "In-Ear", "True Wireless"],
//                 price: 129.99,
//                 features: ["Noise Cancelling", "Bluetooth Connectivity", "Touch Controls"]
//             },
//             chargers: {
//                 brand: ["Anker", "Belkin", "RAVPower", "Samsung", "Apple"],
//                 type: ["Wireless Charger", "Wall Charger", "Car Charger"],
//                 price: 29.99,
//                 compatibleDevices: ["iPhone", "Samsung Galaxy", "Google Pixel", "OnePlus", "Qi-Enabled Devices"]
//             },
//             screenProtectors: {
//                 brand: ["ZAGG", "Spigen", "amFilm", "Tech Armor", "Maxboost"],
//                 type: ["Tempered Glass", "Film"],
//                 price: 14.99,
//                 compatibleModels: ["iPhone 13", "Galaxy S21", "Pixel 6", "OnePlus 9", "Redmi Note 10"]
//             },
//             powerBanks: {
//                 brand: ["Anker", "RAVPower", "Xiaomi", "Mophie", "AUKEY"],
//                 capacity: ["5000mAh", "10000mAh", "20000mAh"],
//                 price: 39.99,
//                 compatibleDevices: ["Smartphones", "Tablets", "Laptops"]
//             }
//         },

//     }
// }
import {
    collection,
    getDocs,
    where,
    query,
    db,
    getDoc,
    doc,
    signOut,


} from '/firebase.js';
var urlParams = new URLSearchParams(window.location.search);



const getCategory = async () => {
    const productHeader = document.getElementById('product-header');
    const docRef = doc(db, "categories", urlParams.get('category'));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        productHeader.innerHTML = `
        <div class="card ">
                    <h5 class="card-header text-center fw-bold ">Jannat Collection - ${docSnap.data().name}</h5>
                    <div class="d-flex gap-2">
                        <div>
                            <img src="${docSnap.data().categoryLogo}" class="img-fashion" alt="">
                        </div>
                        <div>

                            <div class="card-body">
                                <h5 class="card-title">${docSnap.data().variation}</h5>
                                <p class="card-text">${docSnap.data().industry}</p>
                                <span class="badge">Men</span>
                                <span class="badge">Women</span>
                                <span class="badge">Kids</span>
                            </div>
                        </div>
                    </div>
                </div>
        `

    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
};


getCategory();

let allaProducts = [];

const getAllProducts = async () => {
    const allProducts = document.getElementById("allProducts");
    const q = query(collection(db, "products"), where('category', '==', urlParams.get('category')));
    const querySnapshot = await getDocs(q);
    allProducts.innerHTML = "";
    let products = [];
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
        allProducts.innerHTML += `
        <div class="d-flex m-2 justify-content-between align-items-center ">
        <div class="d-flex align-items-center gap-2 ">
            <div class="">
                <img src="${doc.data().image}" class="m-1 img-fashion rounded" alt="...">
            </div>
            <div class="">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">${doc.data().name}</p>
                    <p class="card-text">${doc.data().description}</p>
                    <h3 class="card-text">Rs ${doc.data().price}/-</h3>
                    <p class="card-text"><small class="text-body-secondary">MS</small></p>
                </div>
            </div>
        </div>
        <div class="fw-bold d-flex text-center gap-3 me-2 align-items-center flex-column">
            <div class="qty-btn d-flex align-items-center gap-2">

                <button onclick="updateQty('+', '${doc.id}')" class="btn "><i
                        class="fa-solid fa-plus"></i></button>
                <span id="${doc.id}">1</span>
                <button onclick="updateQty('-', '${doc.id}')" class="btn "><i
                        class="fa-solid fa-minus"></i></button>
            </div>
            <div>
                <button class="btn " onclick="addtoCart('${doc.id}')">Add to cart</button>
            </div>
        </div>
    </div><hr>
        `

    });
    allaProducts = products;
}
getAllProducts();

const updateQty = (type, id) => {
    const qty = document.getElementById(id);
    if (Number(qty.innerHTML) < 2 && type === "-") {
        return;
    }
    if (type === "+") {
        qty.innerHTML = Number(qty.innerHTML) + 1
    } else {
        qty.innerHTML = Number(qty.innerHTML) - 1
    }
}

window.updateQty = updateQty;


const addtoCart = (id) => {
    const cartItems = localStorage.getItem("cart");
    const cart = cartItems ? JSON.parse(cartItems) : [];
    const qty = document.getElementById(id);
    const product = allaProducts.filter(v => v.id === id)
    console.log(product[0])
    cart.push({ ...product[0], qty: Number(qty.innerHTML) })
    localStorage.setItem("cart", JSON.stringify(cart))
    getCartItems()
    orderAmount()

}

const orderAmount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const totalAmount = document.getElementById("totalAmount");
    const sum = cartItems.reduce((a, b) => a + Number(b.price) * b.qty, 0)
    totalAmount.innerHTML = `Rs: ${sum + 100} /-`
}

window.addtoCart = addtoCart;

const deleteCartItem = (i) => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(Number(i), 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    getCartItems();
    orderAmount()

}
window.deleteCartItem = deleteCartItem;

const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const cart = document.getElementById("cart");
    cart.innerHTML = "";
    if (cartItems) {
        for (var i = 0; i < cartItems.length; i++) {
            console.log(cartItems[i].name);
            // cart.innerHTML = ""
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
    }
};
getCartItems()


const getAllCategories = async () => {
    const categoryList = document.getElementById('category-list');
    const q = collection(db, "categories");
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        categoryList.innerHTML += `
    <li><a class="dropdown-item" href="product.html?category=${doc.id}">${doc.data().name}</a></li>
    `
    });
}
getAllCategories();


import {
    auth,
    onAuthStateChanged,

} from './firebase.js';



// onAuthStateChanged(auth, (user) => {
//     const dashboardBtn = document.getElementById("dashboardBtn");
//     if (user) {
//         if (user.email === "admin@gmail.com") {
//             dashboardBtn.style.display = "block";
//             console.log("runningauth")
//         }        
//         const uid = user.uid;
//         // ...
//     }
// });


let logout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location = '/index.html'
    }).catch((error) => {
        // An error happened
    });
}

window.logout = logout;

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