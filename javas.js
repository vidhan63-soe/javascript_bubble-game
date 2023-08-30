var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHi() {
    hitrn = Math.floor(Math.random() * 10);
    console.log(hitrn);
    document.querySelector("#hitval").textContent = hitrn;
    console.log(hitrn);
}

function makeBubble() {
    var clister = ``;
    for (var i = 1; i < 155; i++) {
        var ran = Math.floor(Math.random() * 10) + 1;
        clister += `<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clister;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clicknum = Number(dets.target.textContent);
    console.log(clicknum);
    if (clicknum == hitrn) {
        score += 10;
        document.querySelector("#scoreval").textContent = score; // Update score in HTML
    }
    console.log(score);
});

getNewHi(); // Call getNewHi() when the timer reaches 0

makeBubble();
runTimer();
