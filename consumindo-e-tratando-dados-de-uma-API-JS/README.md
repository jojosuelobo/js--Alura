# JavaScript: consumindo e tratando dados de uma API
* Entenda como funciona o JavaScript assíncrono
* Consuma a API do ViaCEP com o fetch API
* Conheça as Promises e seus métodos
* Saiba como utilizar async await para criar funções assíncronas
* Trate possíveis erros de requisição retornados da API
* Aprenda a tornar uma página de formulário estática em dinâmica

# **Síncrono e Assíncrono**
No JavaScript **síncrono**, o código é executado de forma sequencial, linha por linha. Isso significa que cada instrução é executada uma após a outra, e o programa só passa para a próxima instrução quando a anterior é concluída.

No JavaScript **assíncrono**, você pode executar tarefas que levam tempo em segundo plano, enquanto o código principal continua sendo executado. Isso é útil para lidar com operações demoradas, como fazer uma solicitação para um servidor ou carregar um arquivo grande. Em vez de bloquear a execução do código, você pode continuar executando outras instruções ou aguardar uma resposta sem bloquear o restante do programa.

# **Promisses**

Uma Promise em JavaScript é semelhante a uma promessa do seu amigo. É um objeto especial que representa um valor que pode não estar disponível imediatamente, mas que será fornecido no futuro.

Uma Promise pode ter dois resultados:

**Sucesso**: A promessa é cumprida e você recebe o que foi prometido, como o brinquedo do seu amigo.
**Falha**: A promessa não é cumprida e você não recebe o que foi prometido. Isso pode acontecer se o brinquedo estiver quebrado ou se o seu amigo não puder te emprestar.
> A vantagem de usar uma Promise em JavaScript é que você pode continuar fazendo outras coisas enquanto espera que a promessa seja cumprida. Você não precisa ficar esperando bloqueado até que a promessa seja realizada.

# **Async e Await**
No contexto de JavaScript, quando você usa a palavra-chave `async` antes de uma função, você está dizendo que essa função pode ter tarefas assíncronas e que você pode fazer outras coisas enquanto espera que elas sejam concluídas.

Quando você usa a palavra-chave `await` dentro de uma função assíncrona, você está dizendo para a função pausar e aguardar a conclusão de uma tarefa específica antes de continuar para a próxima linha de código. Isso permite que você escreva o código de forma mais simples e sequencial, como se estivesse seguindo as etapas de uma receita.

Geralmente, você usa `await` com Promises, que são objetos especiais que representam resultados assíncronos, como fazer uma solicitação para um servidor ou ler um arquivo do disco.

Usando `async` e `await`, você pode escrever código JavaScript mais fácil de ler e entender, lidando com tarefas assíncronas de forma mais eficiente.

*Exemplo de métudo e estrutura ASYNC e AWAIT*
```
async function getBuscarLivrosDaApi(){
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    console.log(livros)
}
```

# **Fetch** 
Em JavaScript, o `fetch` é como se você estivesse pedindo ao seu computador para pegar informações de algum lugar, como uma página da web ou um servidor. É como pedir para o seu computador buscar algo para você.

Quando você usa o `fetch` em JavaScript, você pode especificar o endereço (URL) de onde deseja obter informações, como o endereço de um site ou de uma API (um serviço que fornece dados). O JavaScript então "estica os braços" e busca essas informações para você.

Depois que o `fetch` busca as informações, ele retorna uma "promessa" (lembrando da explicação anterior sobre Promises) que representa a resposta da busca. Essa resposta pode conter diferentes tipos de informações, como texto, JSON (um formato comum de dados) ou até mesmo imagens.

Você pode usar métodos especiais, como o `then()`, para tratar a resposta do `fetch`. Isso significa que você pode fazer algo específico quando a resposta é recebida, como exibir o texto no seu site, processar os dados JSON ou mostrar uma imagem.

Em resumo, o `fetch` no contexto de JavaScript é como pedir ao seu computador para buscar informações de algum lugar, e depois você pode usar essas informações de várias maneiras para fazer coisas interessantes com o seu código.

*Exemplo de métudo e estrutura FETCH*
```
fetch('http://localhost:4000/jsonform', { 
  method: 'POST', 
  headers: { 
    'Content-Type': 'application/json' 
  }, 
  body:
  JSON.stringify({ 
    JsonName: jsonName, 
    OriginalValues: originalJson, 
    NewValues: newJson 
  }), 
}) 
.then(response => response.json()) 
.then(data => { 
  console.log('Success:', data); 
  alert("Formulário Criado Com Sucesso");
}) 
.catch((error) => { 
  console.error('Error:', error); alert("Erro ao Criar Formulário");
});
```
