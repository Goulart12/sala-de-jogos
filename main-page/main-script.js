//Flappy bird
var flappyCard = document.querySelector('.flappy-bird-card');
flappyCard.addEventListener("mouseover", changeBackgroundFlappy);

function changeBackgroundFlappy() {
    let h1 = document.querySelector('.title');
    let img = document.querySelector('.img-title');
    let hover = img.getAttribute('data-hover');
    let h2 = document.querySelector('.card-title');
    h1.style.display = "none";
    img.src = hover;
    img.style.width = "491px";
    img.style.height = "164px";
    h2.style.color = "#F8F9FF";
   
    //document.body.style.background = "url('./assets/flappybird-background.png')";
}

flappyCard.addEventListener("mouseout", changeBackgroundCommonFlappy);

function changeBackgroundCommonFlappy() {
    let h1 = document.querySelector('.title');
    let img = document.querySelector('.img-title');
    let start = img.getAttribute('data-normal');
    let h2 = document.querySelector('.card-title');
    h1.style.display = "block";
    img.src = start;
    img.style.width = "139px";
    img.style.height = "144px";
    h2.style.color = "#8F87F1";
    
    //document.body.style.background = "#F8F9FF";
};

//Snake
var snakeCard = document.querySelector('.snake-card');
snakeCard.addEventListener("mouseover", changeBackgroundSnake);

function changeBackgroundSnake() {
    let img = document.querySelector('.img-title');
    let hover = img.getAttribute('data-hover1');
    let h2 = document.querySelectorAll('.card-title')[1];
    let h1 = document.getElementById("main-title");
    h1.innerHTML = "Snake";
    h1.style.color = "#1E7200";
    img.src = hover;
    h2.style.color = "#F8F9FF";

    //document.body.style.background = "url('./assets/snake-background.png')";
};

snakeCard.addEventListener("mouseleave", changeBackgroundCommonSnake);

function changeBackgroundCommonSnake() {
    let img = document.querySelector('.img-title');
    let start = img.getAttribute('data-normal');
    let h2 = document.querySelectorAll('.card-title')[1];
    let h1 = document.getElementById("main-title");
    h1.innerHTML = "Sala de Jogos";
    h1.style.color = "#8F87F1";
    img.src = start;
    h2.style.color = "#8F87F1";

    //document.body.style.background = "#F8F9FF";
};

//memória
var memoryCard = document.querySelector('.memory-game-card');
memoryCard.addEventListener("mouseover", changeBackgroundMemory);

function changeBackgroundMemory() {
    let img = document.querySelector('.img-title');
    let hover = img.getAttribute('data-hover2');
    let h2 = document.querySelectorAll('.card-title')[2];
    let h1 = document.getElementById("main-title");
    h1.innerHTML = "Jogo da Memória";
    h1.style.color = "#050AB1";
    img.src = hover;
    h2.style.color = "#F8F9FF";
    //document.body.style.background = "url('./assets/memory-game-background.png')";
};

memoryCard.addEventListener("mouseleave", changeBackgroundCommonMemory);

function changeBackgroundCommonMemory() {
    let img = document.querySelector('.img-title');
    let start = img.getAttribute('data-normal');
    let h2 = document.querySelectorAll('.card-title')[2];
    let h1 = document.getElementById("main-title");
    h1.innerHTML = "Sala de Jogos";
    h1.style.color = "#8F87F1";
    img.src = start;
    h2.style.color = "#8F87F1";
    //document.body.style.background = "#F8F9FF";
};

//modal
var modal = document.getElementById("myModal");

function abrirModal() { //função para abrir o modal
    myModal.style.display = "flex";
}

//var span = document.getElementsByClassName("close")[0];

function fecharModal() { //função para fechar o modal
    myModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      myModal.style.display = "none";
    }
  }




