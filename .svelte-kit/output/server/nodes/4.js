import * as universal from '../entries/pages/blog/_blogid_/_page.ts.js';
import * as server from '../entries/pages/blog/_blogid_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_blogid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[blogid]/+page.ts";
export { server };
export const server_id = "src/routes/blog/[blogid]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.-vmnHold.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = [];
export const fonts = [];
