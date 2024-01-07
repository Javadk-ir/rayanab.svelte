import { s as shop } from "../../../chunks/collections.js";
const load = async function() {
  const data = await shop.find({}).toArray();
  return {
    shop: structuredClone(data)
  };
};
export {
  load
};
