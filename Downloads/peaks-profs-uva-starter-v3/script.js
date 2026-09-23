
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(nav.classList.contains("open")));
});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll(".demo-form").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const note=form.querySelector(".form-note");
    if(note) note.textContent="Placeholder form submitted locally. Connect this to your real signup form before launch.";
  });
});
