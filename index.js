let heroi = {
    nome: "Boni Souza",
    xp: 2001,
    nivel: null
};

if (heroi.xp <= 1000) {
    heroi.nivel = "Ferro";
} else if (heroi.xp <= 2000) {
    heroi.nivel = "Bronze";
} else if (heroi.xp <= 5000) {
    heroi.nivel = "Prata";
} else if (heroi.xp <= 7000) {
    heroi.nivel = "Ouro";
} else if (heroi.xp <= 8000) {
    heroi.nivel = "Platina";
} else if (heroi.xp <= 9000) {
    heroi.nivel = "Ascendente";
} else if (heroi.xp <= 10000) {
    heroi.nivel = "Imortal";
} else {
    heroi.nivel = "Radiante";
}

console.log(`O Herói de ${heroi.nome} está no ${heroi.nivel}`);