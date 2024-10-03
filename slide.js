let counter = 1; // Define o slide inicial

// Seleciona todos os inputs de rádio com o nome 'btn-radio'
const radios = document.querySelectorAll('input[name="btn-radio"]'); 

const interval = 5000; // Tempo de mudança entre os slides (em milissegundos)

setInterval(function() {
    // Marca o rádio correspondente ao slide atual
    document.getElementById(`radio${counter}`).checked = true; 
    
    counter++; // Incrementa o contador para o próximo slide
    
    // Verifica se o contador ultrapassa a quantidade de slides
    if (counter > radios.length) {
        counter = 1; // Volta para o primeiro slide quando chega ao último
    }
}, interval); // Define o intervalo de tempo para a troca de slides




let currentSlide = 0; // Posição inicial do carrossel
const cardWidth = 320; // Largura de cada card (320px)
const cardsToShow = 5; // Número de cards visíveis ao mesmo tempo

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel'); // Seleciona o elemento do carrossel
    const totalCards = document.querySelectorAll('.card').length; // Conta o total de cards
    const maxSlide = totalCards - cardsToShow; // Último índice do slide visível

    // Atualiza o slide atual com base na direção (esquerda ou direita)
    currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlide);

    // Calcula o deslocamento do carrossel
    const offset = -currentSlide * cardWidth; // Desloca o carrossel para a esquerda ou direita

    // Move o carrossel usando transform
    carousel.style.transform = `translateX(${offset}px)`;
}

// Inicializa o carrossel no primeiro slide
moveSlide(0);
