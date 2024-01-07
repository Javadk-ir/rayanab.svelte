import { c as create_ssr_component, b as subscribe, e as escape, g as getContext } from './ssr-PqYfa7Lv.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<section id="error" class="padding"><div class="container"><div class="row"><div class="col-md-12 text-center"><div class="error wow bounceIn" data-wow-delay="300ms"><h1>${escape($page.status)}</h1> <h2>${escape($page.status)}</h2> <h3>${escape($page.error?.message)}</h3></div> <p class="heading_space" data-svelte-h="svelte-1pztvb3">متأسفیم، مشکلی پیش اومده. شاید یکی از لینک های زیر بتواند کمک کند!</p> <a href="/" class="button gradient-btn wow fadeIn mb-3 mb-sm-0" data-wow-delay="400ms" data-svelte-h="svelte-1it4hjb">بازگشت به صفحه اصلی</a></div></div></div></section> `;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-KvafnY6v.js.map
