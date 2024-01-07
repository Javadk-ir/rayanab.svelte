import { s as shop } from './collections-51l-ACPJ.js';
import './mongo-n06qetVz.js';
import 'mongodb';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DxjSgDfX.js')).default;
const universal_id = "src/routes/shop/[shopid]/+page.ts";
const server_id = "src/routes/shop/[shopid]/+page.server.ts";
const imports = ["_app/immutable/nodes/7.nYOfvtEt.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js","_app/immutable/chunks/each.-oqiv04n.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=7-GcbnwChI.js.map
