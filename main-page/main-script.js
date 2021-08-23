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
    img.style.width = "431px";
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
    img.style.width = "139px";
    img.style.height = "144px";
    h2.style.color = "#8F87F1";

    //document.body.style.background = "#F8F9FF";
};

//memória
var memoryCard = document.querySelector('.memory-game-card');
memoryCard.addEventListener("mouseover", changeBackgroundMemory);

function changeBackgroundMemory() {
    document.body.style.background = "url('./assets/memory-game-background.png')";
};

memoryCard.addEventListener("mouseleave", changeBackgroundCommonMemory);

function changeBackgroundCommonMemory() {
    document.body.style.background = "#F8F9FF";
};






