var timer=3;
function getNewHi(){
    var va=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=va;
}


function makeBubble(){ 
    var clister=``;
for(var i=1;i<155;i++){
    var ran=Math.floor(Math.random()*10);
    clister+=`<div class="bubble">${ran}</div>`;

}
document.querySelector("#pbtm").innerHTML=clister;


}


function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
        }
    },1000);
}
makeBubble();
runTimer();
getNewHi();