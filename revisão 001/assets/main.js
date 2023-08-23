const main = document.querySelector("main")
const inpAdd = document.querySelector("#inp-add")
const btAdd = document.querySelector("#bt-add")
const template = document.querySelector("#line-template")

function adicionarNovaTarefa() {
  if(inpAdd.value.trim() == "") return
  const clone = template.content.cloneNode(true)
  const remover = clone.querySelector(".bt-rm")
  const checkbox = clone.querySelector(".inp-check")
  const titulo = clone.querySelector(".titulo")
  titulo.innerText = inpAdd.value
  main.append(clone)
  inpAdd.value = ""
  remover.addEventListener("click", removerTarefa)
  checkbox.addEventListener("change", riscarLinha)
}

function riscarLinha(event) {
  const container = event.target.closest(".container")
  const title = container.querySelector(".titulo")
  
  // event.target.checked
  //   ? title.style.textDecoration = "line-through"
  //   : title.style.textDecoration = ""

  if (event.target.checked) {
    title.style.textDecoration = "line-through"
  } else {
    title.style.textDecoration = ""
  }
}

function removerTarefa(event) {
  const container = event.target.closest(".container")
  container.remove()
}

function adicionarComOEnter(event) {
  if(event.key == "Enter")
    return adicionarNovaTarefa()
}

btAdd.addEventListener("click", adicionarNovaTarefa)
inpAdd.addEventListener("keydown", adicionarComOEnter)