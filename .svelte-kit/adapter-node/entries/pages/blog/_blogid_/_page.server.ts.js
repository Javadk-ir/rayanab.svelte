import { b as blog } from "../../../../chunks/collections.js";
const load = async function({ params }) {
  const id = params.blogid;
  const data = await blog.findOne({ title: id });
  const datas = await blog.find({}, { limit: 10 }).toArray();
  return {
    blog: structuredClone(data),
    blogs: structuredClone(datas)
  };
};
export {
  load
};
