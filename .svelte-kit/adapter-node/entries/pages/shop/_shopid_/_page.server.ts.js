import { s as shop } from "../../../../chunks/collections.js";
const load = async function({ params }) {
  const id = params.shopid;
  let data = await shop.findOne({ title: id });
  if (!data) {
    return data;
  }
  const datas = await shop.find({ category: data.category }, { limit: 4 }).toArray();
  return {
    shop: structuredClone(data),
    shops: structuredClone(datas)
  };
};
export {
  load
};
