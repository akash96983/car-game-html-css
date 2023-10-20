document.getElementById("playagain").addEventListener("click",()=>{
    window.location.href = "index.html";
    });


const score=localStorage.getItem('score')
document.getElementById("playerScore").innerText=score;


if(score < 10){
    document.getElementById('msg').innerText='NOT BAD'
}else if(score > 10 && score <20 ){
    document.getElementById('msg').innerText='GOOD'
}else if(score > 20){
    document.getElementById('msg').innerText='GREATE'
}
