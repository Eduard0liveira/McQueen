const elQuiz = document.querySelector(".quiz")
const elPergunta = elQuiz.querySelector(".pergunta")
const elAlternativas = elQuiz.querySelector(".alternativas")

async function main() {
  const request = await fetch("quiz.json")
  const quiz = await request.json()
  let perguntaAtual = 0

  function mostrarPergunta(perguntaAtual) {
    elPergunta.innerText = quiz[perguntaAtual].pergunta
    elAlternativas.innerHTML = ""
    quiz[perguntaAtual].alternativas.forEach(alt => elAlternativas.innerHTML += `<button>${alt}</button>`)
    // for (let i = 0; i <= 9; i++) {
    //   elAlternativas.innerHTML += `<button>${quiz[perguntaAtual].alternativas[i]}</button>`
    // }
  }

  elAlternativas.addEventListener("click", ev => {
    const arrAlternativas = [...elAlternativas.children]
    const botaoQueFoiClicado = ev.target
    const indexDoBotaoQueFoiClicado = arrAlternativas.indexOf(botaoQueFoiClicado)

    if (indexDoBotaoQueFoiClicado == quiz[perguntaAtual].resposta) {
      mostrarPergunta(++perguntaAtual)
      return
    }

    alert("EROOOOOOUUUUUU!")
  })

  mostrarPergunta(perguntaAtual)
}

main()