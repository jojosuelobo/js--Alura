const botao = document.querySelectorAll("[data-botao]")
const cores = document.querySelectorAll("[data-cor]")

botao.forEach((element) => {
    element.addEventListener("click", (evento) =>{
        //console.log(evento.target.dataset.botao)
        if (evento.target.dataset.botao == "sumir"){
            cores.forEach(cor => {
                cor.innerHTML = ""
            })
        } else {
            cores.forEach(cor =>{
                //console.log(cores)
                cor.innerHTML = "Tinta " + cor.dataset.cor
            })
        }
    })
});

// Resolução do instrutor

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});