let gameseq = [];
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
    }, 150);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
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
    for (let idx = 0; idx < userseq.length; idx++) {
        if (userseq[idx] !== gameseq[idx]) {
            h2.innerHTML = `Game Over! Your score was <br>${level}</br><br>Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            reset();
            return;
        }
    }

    // If all elements match, check if the sequences are the same length
    if (userseq.length === gameseq.length) {
        setTimeout(levelUP, 1000);
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