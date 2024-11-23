window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loadingScreen');
    const content = document.getElementById('content');

    // Garante que a tela de carregamento dure 5 segundos
    setTimeout(() => {
        loadingScreen.style.display = 'none';

        // Exibe o conteúdo com animações
        content.style.display = 'block';
        setTimeout(() => {
            content.classList.add('visible');
        }, 300); // Delay para animação suave
    }, 5000); // Tempo de 5 segundos
});
// Define a data e hora do redirecionamento
const redirectionDate = new Date("2024-11-23T17:25:00");

// Verifica a cada segundo se a data atual passou do redirecionamento
setInterval(() => {
    const now = new Date();
    if (now >= redirectionDate) {
        window.location.href = "https://8anooceu.github.io/Thomaz1/libre.html";
    }
}, 1000);
