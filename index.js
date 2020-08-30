import express from "express";
const app = express();
import fs from "fs";
import "./mod_test.mjs";
import { test } from "./mod_test.mjs";
import { travel } from "./modules/travel.js";
import { gameState } from "./modules/gameState.js";
import { html } from "./gui/travel.js";

Error.stackTraceLimit = 1;

function gamePrototype(data) {

    this.travel=(data)=>{
        return (gameState.allowTravel ? travel(data): "not allowed")
    }
}

const game = new gamePrototype()

app.get("/:command/:value", (req,res)=>{
    res.writeHeader(200, {"Content-Type": "text/html"});  
    game[req.params.command](req.params.value)
    res.write(html(gameState)); 
    res.end()
})

    app.get("/:command/:value", (req,res)=> {
    
    res.send("...")
    }
)

app.listen(3000, ()=> {
    console.log("@ port 3000")
})
