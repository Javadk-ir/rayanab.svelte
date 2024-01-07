import * as universal from '../entries/pages/shop/_page.ts.js';
import * as server from '../entries/pages/shop/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shop/+page.ts";
export { server };
export const server_id = "src/routes/shop/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.x8s7DrfJ.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
