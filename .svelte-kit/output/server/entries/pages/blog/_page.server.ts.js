import { b as blog } from "../../../chunks/collections.js";
const load = async function() {
  const data = await blog.find({}).toArray();
  return {
    blog: structuredClone(data)
  };
};
export {
  load
};
