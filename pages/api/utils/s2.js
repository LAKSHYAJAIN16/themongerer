import { S2 } from "s2-geometry";

export default async function handler(req, res){
    //Get the params
    const lat = req.body.lat;
    const long = req.body.long;

    //Get the s2 point
    const s2HASH = S2.latLngToKey(lat, long, 20);
    
    res.json(s2HASH);
}