import { s as start_mongo } from "./mongo.js";
start_mongo().then(() => {
  console.log("Mongo Started successfully");
});
