const modalGaleria = document.querySelector("div.modal-galeria")
const conteudo = modalGaleria.querySelector(".conteudo") 
const btClose = modalGaleria.querySelector(".bt-close") 
const imgs = document.querySelectorAll("div.galeria-fotos img")

btClose.addEventListener("click", () => {
  modalGaleria.classList.remove("show")
})

imgs.forEach(img => {
  img.addEventListener("click", (ev) => {
    // const srcClickedImage = ev.target.src
    // const newImg = document.createElement("img")
    // newImg.src = srcClickedImage 
    // conteudo.innerHTML = ""
    // conteudo.append(newImg)
    conteudo.innerHTML = `<img src="${ev.target.src}">`
    modalGaleria.classList.add("show")
  })
})