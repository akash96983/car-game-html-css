const bgmusic = new Audio('./assets/mixkit-glitchy-bass-suspense-music-684.wav')
const CollisionSound=new Audio('./assets/crash.mp3')

const enemycar1 = document.getElementById('enemycar1');
const enemycar2 = document.getElementById('enemycar2');
const enemycar3 = document.getElementById('enemycar3');
const enemycar4 = document.getElementById('enemycar4');
bgmusic.play()
bgmusic.loop = true

let n=0
let l=0


let winningScore=0;

function moveCar(car){
  setInterval(()=>{
  const num=Math.floor(Math.random()*(220-150+1)+150)
  enemycar1.style.left=`${num}px`
},7000)

  setInterval(()=>{
  const num=Math.floor(Math.random()*(80 - 20+1)+ 20)
  enemycar2.style.left=`${num}px`
},7000)
  setInterval(()=>{
  const num=Math.floor(Math.random()*(-150 - -150+1)+ -150)
  enemycar3.style.left=`${num}px`
},7000)

  setInterval(()=>{
  const num=Math.floor(Math.random()*(180 - 220+1)+ -220)
  enemycar4.style.left=`${num}px`
},7000)
}



function moveCars(){
  moveCar(enemycar1)
  moveCar(enemycar2)
  moveCar(enemycar3)
  moveCar(enemycar4)
}




window.addEventListener("keydown",function(x){
  if(x.keyCode===65){
    l=l-1
  }
  if(x.keyCode===68){
    l=l+1
  }
  document.getElementById("car").style.left=`${l}vw`
})


setInterval(()=>{
 
  winningScore++
  document.getElementById("score").innerText=`score: ${winningScore}`;
  // n=n+1


},1000)

setInterval(()=>{
function checkCollision() {
  const carRect = car.getBoundingClientRect();
  const carimg = document.getElementsByClassName('carimg');

  for (let i = 0; i < carimg.length; i++) {
    const asteroidRect = carimg[i].getBoundingClientRect();

    if (
      carRect.left < asteroidRect.right &&
      carRect.right > asteroidRect.left &&
      carRect.top < asteroidRect.bottom &&
      carRect.bottom > asteroidRect.top
    ) {
      CollisionSound.pause()
      CollisionSound.currentTime=0;
      CollisionSound.play()
      // Collision detected
      localStorage.setItem('score',winningScore)

      gameOver();
      return;
    }
  }
}
function gameOver() {
  window.location.href = 'gameover.html'; // Redirect to the "gameover.html" page
}
checkCollision()


},100)
moveCars();