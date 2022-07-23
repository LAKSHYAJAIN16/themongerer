import { Paginate, Match, Index } from "faunadb";

import db from "../../../../../lib/db";
import cdfl from "../../../../../lib/cdfl";

export default async function handler(req, res) {
  //Create Client
  const fauna = db();

  //Get the Geohash we're querying for
  const hash = req.query.h;
  const thresh = req.query.t;
  const amount = req.query.a;

  //Query da index
  try {
    //Get all of the docs
    const docs = await fauna.query(Paginate(Match(Index("posts_geo"))));

    //Declare return array
    const returnArray = [];
    let totalReturned = 0;

    //Filter through all of them
    const docData = docs["data"];
    for (let i = 0; i < docData.length; i++) {
      const doc = docData[i];

      //Extract Hash
      const docHash = doc[1];

      //Calculate s2 distance
      const distance = cdfl(hash, docHash);

      //If above our thresh, add it
      if (distance >= thresh) {
        totalReturned += 1;
        const r = docData[i];
        r.push(distance);
        returnArray.push(r);

        if (totalReturned >= amount) break;
      }
    }

    //Get some of dem
    res.status(200).json(returnArray);
  } catch (err) {
    res.json(err);
  }
}
