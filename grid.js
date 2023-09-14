const GRID_SIZE =21;


export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,/*on ajouter 1 pour que la valeur rendue sera entre 0 et 21*/
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
}
export function outsideGrid(position){
     return (
        position.x <1 || 
        position.x >GRID_SIZE || 
        position.y <1 || 
        position.y >GRID_SIZE
     );

}
