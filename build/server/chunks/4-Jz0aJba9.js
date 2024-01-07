import { b as blog } from './collections-51l-ACPJ.js';
import './mongo-n06qetVz.js';
import 'mongodb';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const load = async function({ params }) {
  const id = params.blogid;
  const data = await blog.findOne({ title: id });
  const datas = await blog.find({}, { limit: 10 }).toArray();
  return {
    blog: structuredClone(data),
    blogs: structuredClone(datas)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-py-1gCRT.js')).default;
const universal_id = "src/routes/blog/[blogid]/+page.ts";
const server_id = "src/routes/blog/[blogid]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.FcmgiBO4.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js","_app/immutable/chunks/each.-oqiv04n.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-Jz0aJba9.js.map
