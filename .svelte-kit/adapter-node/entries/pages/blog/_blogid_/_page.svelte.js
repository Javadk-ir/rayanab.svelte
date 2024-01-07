import { c as create_ssr_component, e as escape, f as add_attribute, d as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blog;
  let blogs;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ blog, blogs } = data);
  return ` <section id="our-blog" class="bglight padding"><div class="container"><div class="row"><div class="col-lg-8 col-md-7"><div class="news_item shadow"><div class="image"><img src="${"https://rayanabco.ir/" + escape(blog.image, true)}"${add_attribute("alt", blog.title, 0)} class="img-responsive"></div> <div class="news_desc text-center text-md-start"><h3 class="text-capitalize font-normal darkcolor"><a href="${"/blog/" + escape(blog.title, true)}">${escape(blog.title)}</a></h3> <ul class="meta-tags top20 bottom20"><li><a href="${"/blog/" + escape(blog.title, true)}"><i class="fas fa-calendar-alt"></i> ${escape(blog.tarikh)}</a></li> <li><a href="${"/blog/" + escape(blog.title, true)}"><i class="far fa-user"></i> ${escape(blog.submmitedby)}</a></li></ul> <div><!-- HTML_TAG_START -->${blog.matn.replace(/\n/g, "<br />")}<!-- HTML_TAG_END --></div></div></div></div> <div class="col-lg-4 col-md-5"><aside class="sidebar whitebox mt-5 mt-md-0"><div class="widget heading_space shadow wow fadeIn" data-wow-delay="350ms"><h4 class="text-capitalize darkcolor bottom20 text-center text-md-start" data-svelte-h="svelte-34420b">پست اخیر</h4> ${each(blogs, (related) => {
    return `<div class="single_post d-table bottom15"><a href="${"/blog/" + escape(related.title, true)}" class="post"><img src="${"https://rayanabco.ir/" + escape(related.image, true)}"${add_attribute("alt", blog.title, 0)}></a> <div class="text"><a href="${"/blog/" + escape(related.title, true)}">${escape(related.title)}</a> <span>${escape(related.tarikh)}</span></div> </div>`;
  })}</div> <div class="widget shadow heading_space text-center text-md-start"><h4 class="text-capitalize darkcolor bottom20" data-svelte-h="svelte-zmytz6">تگ ها</h4> <ul class="webtags">${each(blog.tags, (tags) => {
    return `<li><a href="#.">${escape(tags)}</a></li>`;
  })}</ul></div></aside></div></div></div></section>`;
});
export {
  Page as default
};
