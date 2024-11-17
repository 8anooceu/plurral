// Array com os nomes dos GIFs
const gifs = ["erro1.gif.gif", "erro2.gif.gif", "erro3.gif.gif"];

// Seleciona aleatoriamente um GIF
const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

// Atualiza o src da imagem
document.getElementById("errorGif").src = randomGif;
