import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shop;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ shop } = data);
  return `<section id="main-banner-page" class="position-relative page-header shop-header section-nav-smooth parallax" data-svelte-h="svelte-8cz3ci"><div class="overlay overlay-dark opacity-6 z-index-1"></div> <div class="container"><div class="row shift-tole"><div class="col-lg-8 offset-lg-2"><div class="page-titles whitecolor text-center padding_top padding_bottom"><h2 class="font-xlight">تنها</h2> <h2 class="font-bold">تامین کننده</h2> <h2 class="font-xlight">برند ایگو</h2> <h3 class="font-light pt-2">رایاناب ارائه دهنده خدمات ناب</h3></div></div></div> <div class="gradient-bg title-wrap"><div class="row"><div class="col-lg-12 col-md-12 whitecolor"><h3 class="float-end">فروشگاه</h3> <ul class="breadcrumb top10 bottom10 float-start"><li class="breadcrumb-item hover-light"><a href="/">خانه</a></li> <li class="breadcrumb-item hover-light">فروشگاه</li></ul></div></div></div></div></section>   <section id="our-shop" class="padding"><div class="container"><div class="row"><div class="col-md-12 text-center wow fadeIn" data-wow-delay="300ms" data-svelte-h="svelte-1aob07r"><h2 class="heading bottom30 darkcolor font-light2"><span class="font-normal">کاتالوگ</span> <span class="divider-center"></span></h2> <div class="col-md-8 offset-md-2-rtl heading_space"><p>در بخش زیر لیست محصولات موجود در رایاناب را میتوانید مشاهده کنید</p></div></div> ${each(shop, (shops) => {
    return `<div class="col-lg-4 col-md-6 col-sm-6"><div class="shopping-box bottom30"><div class="image"><img src="${"https://rayanabco.ir/" + escape(shops.images[0], true)}"${add_attribute("title", shops.title, 0)}${add_attribute("alt", shops.title, 0)} height="250px"> <div class="overlay center-block"><a class="opens" href="${"/shop/" + escape(shops.title, true)}" title="Add To Cart"><i class="fa fa-eye"></i></a> </div></div> <div class="shop-content text-center"><h4 class="darkcolor"><a href="${"/shop/" + escape(shops.title, true)}">${escape(shops.title)}</a> <br><br> <span>قیمت:
                                    <br> ${shops.price == void 0 || shops.price.length < 1 ? `<small data-svelte-h="svelte-gemr2w">CALL</small><i class="fa fa-phone-volume"></i>` : `${each(shops.price, (prices) => {
      return `${escape(prices)}<br>`;
    })}`} </span></h4> <br> <h4 class="btn darkcolor" style="border:1px solid #ffc107be;"><a href="${"/shop/" + escape(shops.title, true)}">مشاهده محصول</a></h4> </div></div> </div>`;
  })} <div class="col-lg-12 col-md-12" data-svelte-h="svelte-tlhdjc"><ul class="pagination justify-content-center top20 wow fadeInUp" data-wow-delay="400ms"></ul></div></div></div></section>   <section class="padding bg-shop-quote parallax" data-svelte-h="svelte-1r0k62d"><div class="overlay overlay-dark opacity-6 z-index-0"></div> <div class="container"><div class="row align-items-center text-center"><div class="col-md-8 offset-md-2-rtl"><div class="quote-wrapper"><h3>ازادی در تکنولوژی, ازادی در زندگی</h3></div></div></div></div></section> `;
});
export {
  Page as default
};
