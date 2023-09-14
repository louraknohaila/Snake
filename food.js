import { onSnake ,expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let food =getRandomFoodPosition();
const EXPANSION_RATE =1;/*ziyada dyal snak fash yakel l7alwa*/
 export function update()/*pour animée le snake*/
 {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food =getRandomFoodPosition();
       
     
    }

 }
 export function draw(gameBoard) /*pour dessiner le snake*/
 {
        const foodElement = document.createElement("div");
        foodElement.style.gridColumnStart =food.x;
        foodElement.style.gridRowStart =food.y;
        foodElement.classList.add("food");
        const stem = document.createElement("div");
        stem.classList.add("stem");
        foodElement.appendChild(stem);
        gameBoard.appendChild(foodElement);
 
 }
 

 function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition))
    {
        newFoodPosition = randomGridPosition();/*return random position existe dans le grid*/

    }
    return  newFoodPosition;

 }

