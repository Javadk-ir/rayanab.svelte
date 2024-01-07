import { d as db } from "./mongo.js";
const blog = db.collection("blogs");
const shop = db.collection("mahsolats");
export {
  blog as b,
  shop as s
};
