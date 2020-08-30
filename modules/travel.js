import {gameState} from "./gameState.js";

export function travel(direction){

    direction === "west"? gameState.mapX--:"";
    direction === "east"? gameState.mapX++:"";
    direction === "north"? gameState.mapY++:"";
    direction === "south"? gameState.mapY--:"";

    return(`You travel ${direction} X: ${gameState.mapX} Y: ${gameState.mapY}`)
}