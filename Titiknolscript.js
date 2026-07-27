const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

// TESTIMONI

const reviews = [

{
name:"Andi",
text:"Kopi terenak yang pernah saya coba. Tempatnya juga nyaman!"
},

{
name:"Siska",
text:"Interiornya mewah dan pelayanannya ramah."
},

{
name:"Rizky",
text:"Harga sesuai kualitas. Recommended!"
}

];

let i=0;

setInterval(()=>{

i++;

if(i>=reviews.length)i=0;

document.getElementById("review").textContent='"'+reviews[i].text+'"';

document.getElementById("name").textContent='— '+reviews[i].name;

},4000);


// BACK TO TOP

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// HAMBURGER MENU

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


// LOADER

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader")
        .style.display="none";

    },1000);

});


// FORM RESERVASI

const form =
document.querySelector(".reservation-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Reservasi berhasil dikirim!"
    );

    form.reset();

});
// COUNTER

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const inc=target/100;

if(current<target){

counter.innerText=Math.ceil(current+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});


// LIGHTBOX

const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

}

});

lightbox.onclick=()=>{

lightbox.style.display="none";

}


// CURSOR GLOW

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// PARALLAX

window.addEventListener("scroll",()=>{

document.querySelector(".hero").style.backgroundPositionY=

window.scrollY*0.5+"px";

});


// DARK LIGHT

const theme=document.getElementById("themeBtn");

theme.onclick=()=>{

document.body.classList.toggle("light");

}