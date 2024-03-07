import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blog;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ blog } = data);
  return `<section id="main-banner-page" class="position-relative page-header blog-header parallax section-nav-smooth" data-svelte-h="svelte-11847aw"><div class="overlay overlay-dark opacity-7 z-index-1"></div> <div class="container"><div class="row shift-tole"><div class="col-lg-8 offset-lg-2"><div class="page-titles whitecolor text-center padding_top padding_bottom"><h2 class="font-xlight">مجله رایاناب</h2></div></div></div> <div class="gradient-bg title-wrap"><div class="row"><div class="col-lg-12 col-md-12 whitecolor"><h3 class="float-end">بلاگ</h3> <ul class="breadcrumb top10 bottom10 float-start"><li class="breadcrumb-item hover-light"><a href="/">خانه</a></li> <li class="breadcrumb-item hover-light">بلاگ</li></ul></div></div></div></div></section>   <section id="our-shop" class="bglight padding"><div class="container"><div id="blog-measonry container"><div class="row">${each(blog, (blogs) => {
    return `<div class="col-lg-4 col-md-6 col-sm-6"><div class="news_item shadow text-center text-md-start"><a class="image" href="${"blog/" + escape(blogs.title, true)}"><img src="${"https://rayanabcom.storage.iran.liara.space/blog/" + escape(blogs.image, true)}"${add_attribute("alt", blogs.title, 0)} class="img-responsive"></a> <div class="news_desc"><h3 class="text-capitalize font-normal darkcolor"><a href="${"blog/" + escape(blogs.title, true)}">${escape(blogs.title)} </a></h3> <ul class="meta-tags top20 bottom20"><li><a href="${"blog/" + escape(blogs.title, true)}"><i class="fas fa-calendar-alt"></i> ${escape(blogs.tarikh)} </a></li> <li><a href="${"blog/" + escape(blogs.title, true)}"><i class="far fa-user"></i> ${escape(blogs.submmitedby)} </a></li></ul> <p class="bottom35">${escape(blogs.matnkholase)}</p> <a href="${"blog/" + escape(blogs.title, true)}" class="button gradient-btn">بیشتر</a> </div></div> </div>`;
  })}</div></div></div></section>`;
});
export {
  Page as default
};
