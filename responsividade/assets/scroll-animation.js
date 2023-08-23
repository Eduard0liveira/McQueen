const nav = document.querySelector("header nav")

window.addEventListener("scroll", ev => {
  const scry = window.scrollY 
  
  if(scry > 200 && scry < 400) {
    nav.classList.add("scrolled")
    return
  }
  
  if(scry < 200) {
    nav.classList.remove("scrolled")
  }
})