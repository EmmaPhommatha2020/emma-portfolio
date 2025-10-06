// ==== Typed.js ====
new Typed("#typed-text",{
  strings:[
    "Application Support Specialist",
    "Cybersecurity & IT Enthusiast",
    "Automation + Process Improvement Advocate"
  ],
  typeSpeed:50,backSpeed:25,backDelay:1500,loop:true
});

// ==== Smooth Scroll ====
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// ==== AOS ====
AOS.init({duration:1000,once:true,offset:100});

// ==== Section Fade ====
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:0.2});
document.querySelectorAll("section").forEach(sec=>observer.observe(sec));

// ==== Hero Parallax ====
window.addEventListener("scroll",()=>{
  const heroImg=document.querySelector(".hero img");
  const offset=window.scrollY*0.3;
  heroImg.style.transform=`translateY(${offset}px)`;
});

// ==== Active Nav Highlight ====
const navLinks=document.querySelectorAll(".nav-link");
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    const top=window.scrollY;
    const offset=sec.offsetTop-150;
    const height=sec.offsetHeight;
    if(top>=offset && top<offset+height)current=sec.getAttribute("id");
  });
  navLinks.forEach(l=>{
    l.classList.remove("active");
    if(l.getAttribute("href").includes(current))l.classList.add("active");
  });
});

// ==== Filter Buttons ====
const filterBtns=document.querySelectorAll(".filter-btn");
const cards=document.querySelectorAll(".project-card");
filterBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    const f=btn.dataset.filter;
    filterBtns.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    cards.forEach(c=>{
      const cat=c.dataset.category;
      c.style.display=(f==="all"||cat===f)?"block":"none";
    });
  });
});

// ==== Scroll Top Button ====
const topBtn=document.getElementById("scrollTopBtn");
window.addEventListener("scroll",()=>topBtn.style.display=window.scrollY>400?"block":"none");
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// ==== Dynamic Year ====
document.getElementById("year").textContent=new Date().getFullYear();
