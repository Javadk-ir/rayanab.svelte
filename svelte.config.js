import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: adapter({
		out: 'build',
		precompress: true,
    csp:{
      mode:"hash",
      directives:{"script-src":["self"]},
      },
	}),
    alias: {
      $db: "./src/db",
    },
  },
};

export default config;
