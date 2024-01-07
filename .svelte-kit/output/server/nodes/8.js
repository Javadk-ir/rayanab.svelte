import * as universal from '../entries/pages/work/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/work/+page.ts";
export const imports = ["_app/immutable/nodes/8.Hjrkbv26.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.qldEyqwz.js"];
export const stylesheets = [];
export const fonts = [];
