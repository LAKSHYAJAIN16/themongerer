import {
  Paginate,
  Map,
  Collection,
  Lambda,
  Get,
  Filter,
  ContainsStr,
  LowerCase,
  Var,
  Select,
} from "faunadb";
import db from "../../../../../lib/db";

export default async function handler(req, res) {
  //Create Client
  const fauna = db();

  //Get params
  const name = req.query.name;

  //FQL
  try {
    const docs = await fauna.query(
      Map(
        Filter(
          Paginate(Collection("communities")),
          Lambda(
            ContainsStr(
              LowerCase(Select(["data", "name"], Get(Var("name")))),
              name
            )
          )
        ),
        Lambda((x) => Get(x))
      )
    );
    res.send(docs);
  } catch (err) {
    res.send(err);
  }
}
