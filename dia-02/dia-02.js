const nome = prompt('Qual é o seu nome?');
const idade = prompt('Qual a sua idade?');
const ling = prompt('Qual linguagem de programação você está estudando?');

alert(`Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${ling}!`);

const gosta = prompt(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO`)

if (gosta == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso!')
}
if (gosta == 2) {
  alert('Ah, que pena... Já tentou aprender outrar linguagens?')
}
