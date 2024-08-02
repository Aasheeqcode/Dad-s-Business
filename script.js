let offers=["Buy one Get one Free","Belts are going in 25% off","Don't Miss the oppurtunity"];
let offerdisplay=document.getElementById("offers");
offerdisplay.innerHTML=offers[2];
let i=0;
let loop=setInterval(() => {
    offerdisplay.innerHTML=offers[i%3];
    offerdisplay.style.animation="up 3s infinite 0s ease";
    i++;
}, 3000);
document.getElementById("l").onclick=()=>{
    clearInterval(loop);
    offerdisplay.innerHTML=offers[(--i)%3];
    offerdisplay.style.animation="up 0s infinite 0s ease";
}
document.getElementById("r").onclick=()=>{
    clearInterval(loop);
    offerdisplay.innerHTML=offers[(++i)%3];
    offerdisplay.style.animation="up 0s infinite 0s ease";
}
// let slides=["./andrew-neel-fqoYO9MjLLQ-unsplash-1600x900_2000x.webp","./R.jpeg","./Signature Lifestyle Shoes Ad - Leather Shoes DVC - Product Video.mp4"];
// let bg=document.querySelector(".video-background");
// let s=0;
// let screenflow=setInterval(()=>{
// bg.style.background='url(slides[s%3])';
// s++;
// },1000)
const backgrounds = [
    './OIP.jpeg',
    './R.jpeg',
    "./Signature Lifestyle Shoes Ad - Leather Shoes DVC - Product Video.mp4"
];

let currentIndex = 0;

function changeBackground() {
    const container = document.getElementById('background-image');
    const video = document.getElementById('background-video');

    if (backgrounds[currentIndex].endsWith('.mp4')) {
        container.style.display = 'none';
        video.src = backgrounds[currentIndex];
        video.style.display = 'block';
    } else {
        video.style.display = 'none';
        container.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
        container.style.display = 'block';
    }

    currentIndex = (currentIndex + 1) % backgrounds.length;
}
setInterval(changeBackground, 8000);
document.getElementById("view").onclick=()=>{
    if(document.getElementById("view").innerHTML="View All"){
        fetch("./data.json")
        .then(res=>res.json())
        .then(res=>{
            const data=res.Product;
            let cards='';
            let pdetail=document.querySelector(".product-title");
            let k=0;
            data.forEach(element=>{
                cards+=`<div class="product-card">
                  <img src="${element.image}" alt="Product Image" class="product-image">
                  <div class="product-info">
                    <h2 class="product-title">${element.pname}</h2>
                    <p class="product-description">This is a brief description of the product.</p>
                    <p class="product-price">$19.99</p>
                    <button class="buy-button">Buy Now</button>
                  </div>
                </div>
              </div>`
        });
        document.querySelector(".cards").innerHTML=cards;
        })
        .catch(err=>console.log(err))
        document.getElementById("view").innerHTML="Hide Items"
    }
    else {
        document.querySelector(".cards").innerHTML=`<div class="product-card">
        <img src="./WhatsApp Image 2024-06-16 at 19.16.47_57236d63.jpg" alt="Product Image" class="product-image">
        <div class="product-info">
          <h2 class="product-title">Roped Brown Belt</h2>
          <p class="product-description">This is a brief description of the product.</p>
          <p class="product-price">$19.99</p>
          <button class="buy-button">Buy Now</button>
        </div>
    </div>
    <div class="product-card">
        <img src="./WhatsApp Image 2024-06-16 at 19.16.47_66a8f5c6.jpg" alt="Product Image" class="product-image">
        <div class="product-info">
          <h2 class="product-title">Dotted Brown Belt</h2>
          <p class="product-description">This is a brief description of the product.</p>
          <p class="product-price">$19.99</p>
          <button class="buy-button">Buy Now</button>
        </div>
      </div>
    <div class="product-card">
        <img src="./WhatsApp Image 2024-06-16 at 19.16.48_010db329.jpg" alt="Product Image" class="product-image">
        <div class="product-info">
          <h2 class="product-title">Formal Belt
        </h2>
          <p class="product-description">This is a brief description of the product.</p>
          <p class="product-price">$19.99</p>
          <button class="buy-button">Buy Now</button>
        </div>
      </div>`
         document.getElementById("view").innerHTML="View All"
    }
}
document.getElementById("login").onclick=()=>{
    document.querySelector(".wrapper").style.display="flex";
    document.getElementById("close").onclick=function(){
      document.querySelector(".wrapper").style.display="none";
    }
    // document.body.style.background="rgba(0,0,0,0.5)"
    // document.body.style.position="fixed";
}
const namei=document.getElementById("name")
const agei=document.getElementById("age")
const emaili=document.getElementById("mailid")
const rolli=document.getElementById("roll")

document.querySelector("form").onsubmit=function(e){
  e.preventDefault();
  const datafield={
    name:namei.value,
    age:agei.value,
    email:emaili.value,
    roll:rolli.value
  }
  console.log(datafield);
  fetch("http://localhost:5000/create-user",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(datafield)
  }).then(res=>res.json()).then(d=>console.log(d))
}