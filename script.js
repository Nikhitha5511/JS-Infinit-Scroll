let ready = false;
let imagesLoaded=0;
const  count=20;

const spinner = document.createElement("div");
spinner.classList.add("spinner");


let apiKey ='bjlwDda3Em5DKL-F8KhFG_x_Qv4lmmc0kwj6XaJTnbs';

const imagesContainer = document.getElementById('imagesContainer');
imagesContainer.appendChild(spinner);
const fetchImages= async()=>{
 try{
   spinner.style.display='block'; 
 const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&page=2`);
 const imageArray = await response.json();
 console.log(imageArray);
 displayImages(imageArray);
 
 }
   catch(error){
    console.log(error);
    }

};
const onImageLoad=()=>{
 imagesLoaded++;
 if(count===imagesLoaded){
    ready = true;
    spinner.style.display='none';

 }
 console.log("loading of images finished");
}

const displayImages=(imageArray)=>{
    imageArray.forEach((imageObject)=>{
    const img = document.createElement('img');
    img.src = imageObject.urls.regular;
    img.alt ="Image";
    img.addEventListener('load',onImageLoad);
    imagesContainer.append(img);
    });
}

fetchImages();

window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >= document.body.offsetHeight &&
      ready === true
    ) {
      ready = false;
      imagesLoaded = 0;
      fetchImages();
      console.log("Reached bottom");
    }
  });





// let ready = false;
// const count = 20;
// let imagesLoaded = 0;
// const apikey = "PSamZAYc_GPjgMKg9L2BpIWS0Mp7tz2jSPNZsy-iE3c";
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}&page=2`;

// const imagesContainer = document.getElementById("imagesContainer");

// const getImages = async () => {
//   try {
//     const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}&page=2`);
//     const imagesArray = await response.json();
//     displayImages(imagesArray);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const onImageLoaded = () => {
//   imagesLoaded++;
//   if (count === imagesLoaded) {
//     ready = true; 
//     loader.style.display = "none";
//     console.log("READY IS BEING SET TO TRUE");
//   }
//   console.log("Img finished loading");
// };

// const displayImages = (imagesArray) => {
//   imagesArray.forEach((imageObject) => {
//     const img = document.createElement("img");
//     img.src = imageObject.urls.regular;
//     img.alt = "Random Image";
//     img.addEventListener("load", onImageLoaded);
//     imagesContainer.append(img);
//   });
// };

// getImages();

// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY + window.innerHeight >= document.body.offsetHeight &&
//     ready === true
//   ) {
//     ready = false;
//     imagesLoaded = 0;
//     getImages();
//     console.log("Reached bottom");
//   }
// });