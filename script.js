let currentSlide=0;let timer;const slides=document.querySelectorAll(".hero-slide"),dots=document.querySelectorAll(".dot");
function showSlide(i){currentSlide=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("active",n===currentSlide));dots.forEach((d,n)=>d.classList.toggle("active",n===currentSlide))}
function resetTimer(){clearInterval(timer);timer=setInterval(()=>showSlide(currentSlide+1),6000)}
function changeSlide(d){showSlide(currentSlide+d);resetTimer()}function goToSlide(i){showSlide(i);resetTimer()}
showSlide(0);resetTimer();
function toggleMenu(){document.querySelector(".navbar nav").classList.toggle("active")}
document.querySelectorAll(".navbar nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".navbar nav").classList.remove("active")));
