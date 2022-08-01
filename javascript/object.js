// 4º Você deseja conhecer novas formas de acessa objetos. Tente acessa o objeto acima de uma forma diferente. Para isso você deve criar uma variável que receberá uma string que será o valor de uma das chaves. Em seguida use essa variável para acessar um valor do objeto acima. Depois altere o valor da variável para outra chave e rode seu código novamente!
// var key = "sobrenome";

// var ceoGoogle = {
//   nome: "Sundar",
//   sobrenome: "Pichai",
//   cargo: "CEO",
//   rua: "Rua Microsoft",
//   bairro: "Google",
//   numero: 123,
// };

// console.log(ceoGoogle[key]);
// ====================
// const produto = {
//   info: {
//     nome: "Camisa",
//     descricao: "Camisa mó da hora",
//     valor: 3.99,
//     bonus: {
//       valor: 2.33,
//     },
//   },
//   categoria: {
//     nome: "Roupa",
//     descricao: "Aqui tem todo tipo de roupa",
//   },
//   quantidade: 5,
//   criado_em: "10/10/2013",
// };
// var key1 = "info";
// var key2 = "nome";
// var key3 = "bonus";
// var key4 = "valor";
// console.log(produto.info.nome);
// console.log(produto[key1]);
// console.log(produto[key1][key2]);
// console.log(produto[key1][key3][key4]);

// 6º Na empresa onde você trabalha existe um sistema que gerencia os funcionários. Todo funcionário possui os dados pessoais (nome, sobrenome, idade), endereço (rua, numero, bairro) e cargo. Você deve criar um array chamado funcionarios com 3 funcionários, cada posição do array será um funcionário, e cada um deles deve ser um objeto. Em cada um dos funcionários deve contendo a chave dadosPessoais (com os valores dos dados pessoais acima), endereco (com os valores do endereço acima) e o cargo. Imprima a variável funcionários e depois imprima o valor da posição 2.

// var funcionarios = [
//   {
//     dadosPessoais: {
//       nome: "Leo",
//       sobrenome: "Maranhão",
//       idade: 20,
//     },
//     endereco: {
//       rua: "Maceio",
//       numero: 200,
//       bairro: "São Paulo",
//     },
//     cargo: "Dev Senior",
//   },
//   {
//     dadosPessoais: {
//       nome: "Leon",
//       sobrenome: "Silva",
//       idade: 20,
//     },
//     endereco: {
//       rua: "Portugal",
//       numero: 201,
//       bairro: "Alemanha",
//     },
//     cargo: "Dev Pleno",
//   },
// ];

// console.log(funcionarios);
// console.log(funcionarios[1]);
