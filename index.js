let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started= false;
let level=0;
let highScore=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game started");
        started =true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText= `level ${level}`;
    let ranind=Math.floor(Math.random()*3);
    let rancolor=btns[ranind];
    let ranbtn= document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    btnflash(ranbtn);
}

function checkans(ind){

 if (userseq[ind]===gameseq[ind]) {
    if (userseq.length==gameseq.length) {
        setTimeout(levelup,1000);    
    }
 } else{
    if (level > highScore) {
        highScore = level;
    }
    h2.innerHTML=`Game over! your score was <b>${level}</b> high score was: ${highScore}<br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor="white";   
    },150);
    reset();
 }
}
function btnpress(){
 let btn =this;
 btnflash(btn);

 usercolor=btn.getAttribute("id");
 userseq.push(usercolor);
 checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click", btnpress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}