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
