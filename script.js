import { 
    SNAK_SPEED ,
    update as updateSnake ,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection,

} from "./snake.js";
import {
    update as updateFood,
    draw as drawFood,
} from "./food.js";

import { outsideGrid } from "./grid.js";

let LastRenderTime =0;
let gameOver =false;
const gameBoard = document.getElementById("game-board");




/*function loop function tatb9a t2awd au cours de la3eba*/
/*currentTime == lwa9ete li bdate la fonction khedama fiih*/


function main(currentTime)
{

if (gameOver) {
 // Changer le fond en rouge transparent
 document.body.style.background = "rgba(255, 0, 0, 0.5)";
 
 // Afficher la fenêtre d'échec personnalisée
 const failureWindow = document.createElement("div");
 failureWindow.classList.add("failure-window");
 failureWindow.innerHTML = `
     <div class="failure-message">
         <h2>Échec !</h2>
         <p>Vous avez perdu.</p>
         <button id="replayButton">Rejouer</button>
       
     </div>
 `;

 document.body.appendChild(failureWindow);

 return ;
}

window.requestAnimationFrame(main);
/*lwa9ete bayena setid3a2 function and another function*/
const secondsSinceLastRender = (currentTime - LastRenderTime)/1000;
if(secondsSinceLastRender<1 /SNAK_SPEED)
         return;

/*le temp kifash ghady tl3ab lo3ba*/
// console.log(secondsSinceLastRender);
//  console.log("Render");
LastRenderTime = currentTime;
update();/*pour modifier le logique est les variables apres ca=haque fois le main fonction*/
draw();/* rasm dakeshy f shy haja apres les modofocation faitres dans le fonction update*/
}

function restartGame() {
document.body.innerHTML = ""; // Vider le contenu de la page
location.reload(); // Recharger la page
}
// Écoute l'événement de chargement de la page
window.addEventListener("load", () => {
// Appeler la fonction principale pour démarrer le jeu
main();

// Écouteur d'événement de clic au niveau du document
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.id === "replayButton") {
      restartGame();
  }
});
});

const gameInfo = document.querySelector(".info");
const timeCounter = document.createElement("span");
timeCounter.id = "timeCounter";
// const appleCounter = document.createElement("span");
// appleCounter.id = "appleCounter";

gameInfo.appendChild(document.createTextNode("Temps : "));
gameInfo.appendChild(timeCounter);
// gameInfo.appendChild(document.createTextNode(` s | Pommes mangées : `));
// gameInfo.appendChild(appleCounter);

let startTime = 0;

document.addEventListener("changeSpeed", (event) => {
startTime = Date.now(); // Enregistrez le moment où la vitesse a changé
});

window.requestAnimationFrame(main);    



function update(){/*il faut faire update pour snake and food*/
   updateSnake();
   updateFood();
   checkDeath();
   updateCounters();
}
function draw(){
/*il faut faire  draw pour snake and food*/
gameBoard.innerHTML ="";/*bash fash yzid ykhwi lblassa fin kan*/
drawSnake(gameBoard);
drawFood(gameBoard);
}
function updateCounters() {
const currentTime = (Date.now() - startTime) / 1000;
 const timeCounterElement = document.getElementById("timeCounter");
// const appleCounterElement = document.getElementById("appleCounter");

timeCounterElement.textContent = currentTime.toFixed(1); // Utilisez le format souhaité
// appleCounterElement.innerHTML = appleCounter; // Utilisez innerHTML pour insérer l'élément
}

function  checkDeath(){
gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
// Dans le fichier script.js

document.addEventListener("DOMContentLoaded", () => {
const easyButton = document.getElementById("easyButton");
const intermediateButton = document.getElementById("intermediateButton");
const advancedButton = document.getElementById("advancedButton");

easyButton.addEventListener("click", () => selectlevel("easy"));
intermediateButton.addEventListener("click", () => selectlevel("intermediate"));
advancedButton.addEventListener("click", () => selectlevel("advanced"));
});

const levelOverlay = document.getElementById('level-overlay');

function setSnakeSpeed(speed) {
document.dispatchEvent(new CustomEvent('changeSpeed', { detail: speed }));
}

// Modifiez la fonction selectlevel pour appeler setSnakeSpeed
function selectlevel(level) {
if (level === 'easy') {
 setSnakeSpeed(5);
} else if (level === 'intermediate') {
 setSnakeSpeed(15);
} else if (level === 'advanced') {
 setSnakeSpeed(25);
}

levelOverlay.style.display = 'none';
}