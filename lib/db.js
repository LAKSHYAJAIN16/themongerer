import { Client } from "faunadb";

export default function db() {
  const cl = new Client({
    secret: "fnAEsG3qkAAASegrmzP2DDUAArWUGJfuFTiXZkaR",
    domain: "db.us.fauna.com",
  });
  return cl;
}
