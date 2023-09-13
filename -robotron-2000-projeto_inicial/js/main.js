const controle = document.querySelectorAll("[data-controle]")
const stats = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaStats(evento.target.dataset.peca)
    })
})
//somar.addEventListener("click", () => { manipulaDados("+") })
//subtrair.addEventListener("click", () => { manipulaDados("-") })
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]") 

    if(operacao == "-") { 
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1    
    }
}

function atualizaStats(peca){
    stats.forEach( (elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}





const robotron = document.querySelector("#robotron") 
/* 
function dizOiRobotron()
{
    console.log("Robotron disse OI");
}

// Em forma de função anônima
robotron.addEventListener("click", function(){
    console.log("Robotron disse OI anônimamente")
});

// Em forma de ARROW FUNCTION
robotron.addEventListener("click", () => {
    //console.log(x);
    console.log("Robotron disse OI em Arrow Function")
});

// Em forma de Evento
robotron.addEventListener("click", x => {
    console.log(x);
});

// Em forma de função
robotron.addEventListener("click", dizOiRobotron());
*/