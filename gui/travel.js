// import {gameState} from "./../modules/gameState.js"

export function html(gameState){
    return (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: rgb(34, 34, 34);">
    <div style="background-color: rgb(92, 92, 92); color:white;">
    ${gameState.mapX}
    ${gameState.mapY}
    
    <a href="http://localhost:3000/travel/north">  <button> NORTH </button></a>
    <a href="http://localhost:3000/travel/south">  <button> SOUTH </button></a>
    <a href="http://localhost:3000/travel/east">   <button> EAST </button></a>
    <a href="http://localhost:3000/travel/west">   <button> WEST </button></a>
    </div>
</body>
</html>
`)}