
import { storage, ref, uploadBytesResumable, getDownloadURL } from '/firebase.js'

const logo = document.getElementById("categoryLogo");
const selectedLogo = document.getElementById("selectedLogo");
let file;
logo.addEventListener("change", (e) => {
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
submitcategory.addEventListener("click", async () => {
    const categoryName = document.getElementById("categoryName");
    const categoryVariation = document.getElementById("categoryVariation");
    const categoryIndustry = document.getElementById("categoryIndustry");
   const categoryLogo = await uploadFile(file, categoryName.value)
    console.log(categoryName.value, categoryVariation.value, categoryIndustry.value, file)

})