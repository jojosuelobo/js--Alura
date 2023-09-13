var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
console.log(lista)

/* Retirar o item VERMELHO */

// Posição de "Vermelho"
console.log(lista.indexOf('Vermelho'))

// splice( [posição do array a ser removida] , [Quantidade de vezes que vai ser removido]) 
lista.splice( lista.indexOf('Vermelho') ,1)

console.log(lista)