const express = require("express")
const app = express();


const staticAssets = {
    locations: [{id:1, name:"Ankorah", x: 1002, y:999, type:"village", shopTier:4}],
    items: [
        {
            id:1, 
            name: "Gold Helmet",
            tier: 4
        },

        {
            id:1, 
            name: "Iron Sword",
            tier: 2
        }
    ]

}


function initLocation(location){

    console.log(`Welcome to ${location.name}`)
    stats.state.travel = false
    stats.state.inTown = true
    stats.state.currentLocation = location
}


const notAllowed =()=>{console.log("Not allowed")}

function initialState(command){

    this.checkLocation=()=> {
        staticAssets.locations.map(
            (location)=> {stats.travel.x === location.x ? initLocation(location) : ""}
        )
    }

    

    this.state = {
        "travel": true,
        "inTown": false,
        "currentLocation" : {}
    }

    

    this.travel = {
        "x": 999,
        "y": 999,
        west :()=> {stats.state.travel  ? stats.travel.x++ : notAllowed},
        east :()=> {stats.state.travel  ? stats.travel.x-- : notAllowed},
        north :()=> {stats.state.travel ? stats.travel.y-- : notAllowed},
        south :()=> {stats.state.travel ? stats.travel.y++ : notAllowed}
    } ,

   this.shop = {
       items:()=> {stats.state.inTown ? 
            staticAssets.items.map((item)=> 
            item.tier === stats.state.currentLocation.shopTier ? console.log(item.name) : "")
            :notAllowed},
        exit:()=> {
            stats.state.inTown = false 
            stats.state.travel = true
            stats.travel.x++
        }
   }
    
    
    this.show=()=> {console.log(stats)}
    
}

const stats = new initialState


app.get("/", (req,res)=>{
    res.send("")
})

    app.get("/:command/:value", (req,res)=> {
    
    // curl localhost:3000/travel/west
    // curl localhost:3000/shop/items

    stats[req.params.command][req.params.value]()
    stats.show()
    stats.checkLocation()    

        

    res.send("...")
    }
)

app.listen(3000, ()=> {
    console.log("@ port 3000")
})
