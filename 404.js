// Array com os nomes dos GIFs
const gifs = ["erro1.gif", "erro2.gif", "erro3.gif"];

// Seleciona aleatoriamente um GIF
const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

// Atualiza o src da imagem
const errorGif = document.getElementById("errorGif");
errorGif.src = randomGif;

// Caso o GIF não seja encontrado, exibe uma mensagem alternativa
errorGif.onerror = () => {
    errorGif.alt = "Ocorreu um problema ao carregar a imagem.";
};
