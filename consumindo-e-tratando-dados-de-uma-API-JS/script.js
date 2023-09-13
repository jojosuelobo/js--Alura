async function buscaEndereco(cep) {
    const mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ''
    try{
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertido = await consultaCEP.json()
        if(consultaCEPConvertido.erro){
            throw Error('CEP não existe')
        }

        var cidade = document.querySelector('#cidade');
        var logadouro = document.querySelector('#endereco');
        var estado = document.querySelector('#estado');

        cidade.value = consultaCEPConvertido.localidade
        logadouro.value = consultaCEPConvertido.logradouro
        estado.value = consultaCEPConvertido.uf

        console.log(consultaCEPConvertido)
        return consultaCEPConvertido
    } catch(erro){
        console.log(erro)
        mensagemErro.innerHTML = `<p> CEP INVALIDO, CONSULTE O CEP NOVAMENTE </p>`
    }
    
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => {
    buscaEndereco(cep.value) 
})

// const ceps = ['01001000', '29104340'];
// const conjuntoCEPS = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCEPS).then(respostas => console.log(respostas));

// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('CEP inexistente')
//     } else {
//         console.log(r)
//     }
// })
// .catch(error => console.log(error))
// .finally(mensagem => console.log('Processamento concluido'))