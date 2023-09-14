import { getInputDirection } from "./input.js";

/* on vas faire tous les code specialiser 
pour la snake pour 
etablir l'organisation du code*/
export let SNAK_SPEED = 20;/*bash nt7akmo f sor3a dyal lo3ba kat tmshy b 2 marate f seconde 9adma kbrnaha 9adma lo3ba tatkUn en vitesse*/
document.addEventListener('changeSpeed', event => {
   SNAK_SPEED = event.detail;
 });
 
const snakeBody = [
    { x:10 ,y: 11 },
];
let newSegments =0;


 export function update()/*pour animée le snake*/
 {
    addSegments();
    let inputDirection = getInputDirection();
           for(let i= snakeBody.length -2 ; i>=0 ;i--)/*pou tout les carreau sauf le premier qui represente le tete du snake*/
           {
                snakeBody[i+1] = { ...snakeBody[i]};
           }
        //    snakeBody[0].x +=0;
        //    snakeBody[0].y +=1;
        /*pour que les mouvement soit faites par l'utilisateur*/
            snakeBody[0].x +=inputDirection.x;
           snakeBody[0].y +=inputDirection.y;
 }
 export function draw(gameBoard) /*pour dessiner le snake*/
 {
 
    snakeBody.forEach((segment, index)=>{
        const snakeElement = document.createElement("div");
        snakeElement.style.gridColumnStart =segment.x;
        snakeElement.style.gridRowStart =segment.y;
      //   snakeElement.classList.add("snake");
      if (index === 0) {
         snakeElement.classList.add("snake-head");
         const eye1 = document.createElement("div");
         const eye2 = document.createElement("div");
         const nose = document.createElement("div");
         eye1.classList.add("eye", "left-eye");
         eye2.classList.add("eye", "right-eye");
         nose.classList.add("nose");
         snakeElement.appendChild(eye1);
         snakeElement.appendChild(eye2);
         snakeElement.appendChild(nose);
     } else {
         snakeElement.classList.add("snake");
     }
     
        gameBoard.appendChild(snakeElement);
    });
 }
 export function expandSnake(amount)
 {
    newSegments += amount;
 }
 export function onSnake(position , {ignoreHead = false }  = {})
 {
    return snakeBody.some((segment ,index) =>{
        if(ignoreHead && index === 0)
        return false;
        return equalPositions(segment , position);
    });
 }
 export function getSnakeHead(){
    return snakeBody[0];
 }
 export function snakeIntersection(){
    /*rasse dtal snake wash tsate7 me3a shy haja sauf rasse psq la dkhlna rasse ghady yraje3 lina dima true dakshy elash kan zido ella dakshy apres la virgul??*/
    return onSnake(snakeBody[0] , {ignoreHead :true});

 }
 function equalPositions(pos1 ,pos2){
            return pos1.x ===pos2.x &&  pos1.y ===pos2.y;   
 }
 function addSegments()
 {
    for(let i=0 ;i<newSegments ;i++)
    {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]});/*ghady ytzad ms ghady yb9a dima ytzad bela ma ye7ebesse et comme ca cette un problm*/
    }
    newSegments = 0;
 }

