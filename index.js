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
    stats.state.travle = false
    stats.state.inTown = true
    stats.state.currentLocation = location
}


const notAllowed =()=>{console.log("Not allowed")}

function initialState(command){

    this.checkLocation=()=> {
        staticAssets.locations.map(
            (location)=> {stats.travle.x === location.x ? initLocation(location) : ""}
        )
    }


    this.state = {
        "travle": true,
        "inTown": false,
        "currentLocation" : {}
    }

    

    this.travle = {
        "x": 999,
        "y": 999,
        west :()=> {stats.state.travle  ? stats.travle.x++ : notAllowed},
        east :()=> {stats.state.travle  ? stats.travle.x-- : notAllowed},
        north :()=> {stats.state.travle ? stats.travle.y-- : notAllowed},
        south :()=> {stats.state.travle ? stats.travle.y++ : notAllowed}
    } ,

   this.shop = {
       items:()=> {stats.state.inTown ? 
            staticAssets.items.map((item)=> 
            item.tier === stats.state.currentLocation.shopTier ? console.log(item.name) : "")
            :notAllowed}
   }
    
    
    this.show=()=> {console.log(stats)}
    
}

const stats = new initialState


app.get("/", (req,res)=>{
    res.send("(e)Explore")
})

    app.get("/:command/:value", (req,res)=> {
    
    // localhost:3000/travle/add

    stats[req.params.command][req.params.value]()
    //stats.show()
    stats.checkLocation()    

        

    res.send("...")
    }
)

app.listen(3000, ()=> {
    console.log("@ port 3000")
})
