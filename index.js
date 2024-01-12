// Variáveis de exemplo
let nomeDoHeroi = "Duda";
let XPDoHeroi = "Imortal";

// Estrutura de decisão
let nivelDoHeroi;
if (XPDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (XPDoHeroi >= 1001 && XPDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (XPDoHeroi >= 2001 && XPDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (XPDoHeroi >= 5001 && XPDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (XPDoHeroi >= 7001 && XPDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (XPDoHeroi >= 8001 && XPDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (XPDoHeroi >= 9001 && XPDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else (XPDoHeroi <= 10001);
  nivelDoHeroi = "Radiante";
 

// Mensagem de saída
let mensagem = `O Herói de nome ${nomeDoHeroi} está no nível de ${XPDoHeroi}`;
console.log(mensagem);
