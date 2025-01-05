const max = prompt("enter the max number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("gess the number ");

while (true) {
    if (guess == "quite") {
        console.log("user quite");
        break;
    }
    if (guess == random) {
        console.log("you are right! congrats!!");
        break;
    } else if (guess < random) {
       guess= prompt(" hint :your guess was too small.please try again");
    } else {
        guess = prompt("hint : your guess was too large. please try again ");
    }

}


/*let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is stared");
        started = true;

        levelUP();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUP() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq)
    gameflash(randBtn);

}



function checkAns() {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUP, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was <br> ${level}</br> <br>press any key to start.`;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundcolor = "white";
        }, 150);

        reset();
    }
}


function btnPress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;


}