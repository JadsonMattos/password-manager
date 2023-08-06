# Boas-vindas ao repositório do projeto Gerenciador de Senhas!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto, você vai desenvolver um gerenciador de senhas. Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

  - Cadastrar senhas para serviços que ela utiliza na internet.

  - Visualizar as próprias senhas cadastradas e as informações do serviço utilizado.

  - Esconder as senhas salvas.

  - Remover os dados armazenados anteriormente.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, verificamos se você é capaz de:

  - Ler o estado de um componente e utilizá-lo para alterar o que é exibido na tela.

  - Atualizar o estado de um componente.

  - Listar componentes de maneira dinâmica.

  - Criar formulários.

  - Renderizar componentes de maneira condicional.

  - Transmitir informações entre componentes por meio de _props_.

  - Transmitir informações de componentes-filhos para componentes-pais via callbacks.
</details>

## 1 - Crie um título para a aplicação

Adicione um título à sua aplicação.

- O título deve estar em uma _tag_ `<h1>`.
- O título deve conter o texto `Gerenciador de senhas`.
- Você pode escolher onde colocar o título, mas ele deve estar dentro do componente `App`.

---

## 2 - Crie um componente Form

Crie um componente chamado `Form`.

Esse componente deve ser renderizado no `<App>` e deve possuir:

- Um _input_ do tipo _text_ com o texto `Nome do serviço` como label.
- Um _input_ do tipo _text_ com o texto `Login` como label.
- Um _input_ do tipo _password_ com o texto `Senha` como label.
- Um _input_ do tipo _text_ com o texto `URL` como label.
- Um _button_ com o texto `Cadastrar`.
- Um _button_ com o texto `Cancelar`.

---

## 3 - Renderize condicionalmente o formulário

- Renderize um botão com o texto "Cadastrar nova senha"

Inicialmente a aplicação deverá exibir apenas o botão com o texto "Cadastrar nova senha".

- Ao clicar no botão "Cadastrar nova senha":
  - ele deverá desaparecer;
  - o componente `<Form />` deverá ser renderizado.
- Ao clicar no botão do formulário com o texto `Cancelar`:
  - o formulário deverá desaparecer.
  - o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

---

## 4 - Valide os campos do formulário

O botão `Cadastrar` do formulário só poderá estar habilitado caso todas as verificações a seguir sejam atendidas.

- O input com o "nome do serviço" deve estar preenchido.
- O input com o "login" deve estar preenchido.
- O input com a "senha" deve estar preenchido.
  - A senha deve ter no mínimo 8 caracteres.
  - A senha deve ter no máximo 16 caracteres.
  - A senha deve ter letras e números.
  - A senha deve ter algum caractere especial.

Caso alguma das verificações acima não seja atendida, o botão `Cadastrar` deverá estar desabilitado.

---

## 5 - Crie um display para a validação da senha

Quando o formulário for renderizado, as seguintes mensagens também deverão ser renderizadas na tela:

- "Possuir 8 ou mais caracteres".
- "Possuir até 16 caracteres".
- "Possuir letras e números".
- "Possuir algum caractere especial".

Os elementos podem ser renderizados em qualquer lugar da página, com qualquer tag html, desde que estejam visíveis.

Para cada mensagem, você deverá verificar se o que está sendo digitado no _input_ com a label `Senha` atende à respectiva verificação. Caso a verificação seja atendida, o elemento com o texto deverá receber o atributo `className="valid-password-check"`. Caso contrário, o elemento que contém o texto deverá receber o atributo `className="invalid-password-check"`.

Por exemplo, caso a senha digitada seja "@Senha", os elementos deverão apresentar as seguintes classes:

- "Possuir 8 ou mais caracteres": `invalid-password-check`.
- "Possuir até 16 caracteres": `valid-password-check`.
- "Possuir letras e números": `invalid-password-check`.
- "Possuir algum caractere especial": `valid-password-check`.

---

## 6 - Implemente a função do botão "Cadastrar" do formulário

Implemente a função "Cadastrar" do formulário, de modo que a aplicação liste todos os serviços cadastrados.

- Se nenhum serviço estiver cadastrado, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada na tela.
- Ao clicar no botão "Cadastrar" do formulário, as informações do serviço deverão ser renderizadas da seguinte forma:
  - O `Nome do serviço` deverá ser renderizado dentro de um `link` que, quando clicado, deverá direcionar a pessoa usuária para a `URL` cadastrada.
  - O `Login` cadastrado deverá ser renderizado.
  - A `Senha` cadastrada deverá ser renderizada e estar visível.
- Deve ser possível cadastrar mais de um serviço.
- Ao cadastrar um novo serviço, este deve aparecer ao final da lista.
- Após cadastrar um novo serviço:
  - O formulário deverá desaparecer.
  - O botão com o texto "Cadastrar nova senha" deverá ser renderizado.

---

## 7 - Permita apagar um serviço cadastrado

Para cada serviço cadastrado, adicione um botão que, ao ser clicado, remove da lista o serviço correspondente. Esse botão deve ter o atributo `data-testid="remove-btn"`.

Caso todos os serviços cadastrados sejam removidos, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada.

---

## 8 - Implemente um checkbox para esconder/mostrar as senhas

A aplicação deve renderizar um input do tipo checkbox e que tenha uma label com o texto "Esconder senhas". Esse checkbox deve começar desmarcado.

- Com o checkbox desmarcado, todas as senhas cadastradas devem estar visíveis.
- Com o checkbox marcado, todas as senhas cadastradas devem estar "escondidas", renderizando exatamente o seguinte texto: `******`.

O checkbox pode ser implementado em qualquer lugar da aplicação.

## 9 - No formulário, implemente um botão para esconder/mostrar a senha que está sendo digitada

Crie outro botão no formulário:

- Adicione o atributo `data-testid="show-hide-form-password"`.
- Ao ser clicado, o _input_ com a label `Senha` deverá ter seu tipo alterado de _"password"_ para _"text"_, de modo que a senha fique visível.
- Ao ser clicado, caso o _input_ esteja com o tipo _"text"_, seu tipo deve ser alterado para _"password_, de modo que a senha fique escondida.

## 10 - Exibe um alerta ao cadastrar um novo serviço corretamente

Ao clicar no botão "Cadastrar" do formulário, utilize a biblioteca [sweetalert2](https://sweetalert2.github.io/) para mostrar um alerta que informe à pessoa usuária que um novo serviço foi cadastrado.

O alerta deverá:
  - Desaparecer após 1500ms (1.5 segundo).
  - Mostrar a mensagem "Serviço cadastrado com sucesso".
