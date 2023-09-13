## useState em React 

No React, o ``useState`` é um hook que permite adicionar estado a componentes funcionais. O estado é basicamente um objeto que armazena e controla os dados de um componente. O useState é usado para declarar uma variável de estado dentro de um componente.

Para começar, você precisa importar o hook useState do pacote 'react' no início do seu arquivo. Isso pode ser feito assim:

````
import React, { useState } from 'react';
````


Em seguida, você pode usar o useState dentro do corpo do seu componente. Ele retorna um par de valores: a variável de estado atual e uma função para atualizar esse estado. Aqui está um exemplo:

````

function MeuComponente() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
````

Neste exemplo, declaramos uma variável de estado chamada contador e a inicializamos com o valor 0 usando o useState(0). Em seguida, usamos essa variável no nosso componente.

Na renderização inicial, o valor de contador será 0. O valor atual da variável de estado pode ser acessado diretamente no código JSX usando {contador}.

O botão "Incrementar" possui um evento onClick que chama a função setContador com o novo valor do contador (incrementado em 1). Isso atualiza o estado e faz com que o componente seja renderizado novamente, exibindo o novo valor do contador.

É importante ressaltar que a função setContador não atualiza diretamente o valor da variável contador. Em vez disso, ela cria uma nova versão do estado e substitui a anterior. Isso é conhecido como "imutabilidade". O React compara o novo estado com o estado anterior para determinar quais partes do componente precisam ser atualizadas na interface do usuário.

Você pode usar vários useState em um único componente para controlar diferentes variáveis de estado. Cada chamada do useState retorna uma variável de estado separada e sua função de atualização correspondente.
