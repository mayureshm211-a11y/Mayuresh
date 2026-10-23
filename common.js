document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());
const menuButton=document.getElementById("menuButton"),navigation=document.getElementById("navigation");
if(menuButton&&navigation)menuButton.addEventListener("click",()=>navigation.classList.toggle("open"));
