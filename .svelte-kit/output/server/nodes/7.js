import * as universal from '../entries/pages/shop/_shopid_/_page.ts.js';
import * as server from '../entries/pages/shop/_shopid_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_shopid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shop/[shopid]/+page.ts";
export { server };
export const server_id = "src/routes/shop/[shopid]/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.nYOfvtEt.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
