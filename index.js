let heroi = {
    nome: "Boni Souza",
    xp: 1001,
    nivel: null
};

let resultado = (heroi.xp <= 1000) ? heroi.nivel = "Ferro" : (heroi.xp <= 2000) ? heroi.nivel = "Bronze" : (heroi.xp <= 5000) ? heroi.nivel = "Prata" : (heroi.xp <= 7000) ? heroi.nivel = "Ouro" : (heroi.xp <= 8000) ? heroi.nivel = "Platina" : (heroi.xp <= 9000) ? heroi.nivel = "Ascendente" : (heroi.xp <= 10000) ? heroi.nivel = "Imortal" : heroi.nivel = "Radiante";

console.log(`O Herói de ${heroi.nome} está no ${heroi.nivel}`);