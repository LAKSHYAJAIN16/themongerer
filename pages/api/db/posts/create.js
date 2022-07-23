import { Create, Collection } from "faunadb";
import { randomBytes } from "crypto";
import { S2 } from "s2-geometry";

import db from "../../../../lib/db";

export default async function handler(req, res) {
  //Create Client
  const fauna = db();

  //Gen some stuff
  const id = randomBytes(16).toString("hex");
  const coords = {
    lat: req.body.lat,
    long: req.body.long,
  };
  const geohash = S2.latLngToKey(coords.lat, coords.long, 20);

  const data = {
    id: id,
    ts: new Date(Date.now()).toISOString(),
    content: req.body.content,
    postName: req.body.postName,
    geo: {
      coords: coords,
      hash: geohash,
    },
    security : {
      ...req.body.security
    }
  };

  //Query
  try {
    const docs = await fauna.query(Create(Collection("posts"), { data: data }));
    res.status(200).json(docs);
  } catch (err) {
    res.json(err);
  }
}
