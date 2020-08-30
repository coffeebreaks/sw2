import {staticAssets} from "./static_assets.mjs"

export function test(p){
  
    return (staticAssets.map((x)=>x[p]))
} 