import * as universal from '../entries/pages/contact/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.ts";
export const imports = ["_app/immutable/nodes/5.W1d5MPxL.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js"];
export const stylesheets = [];
export const fonts = [];
