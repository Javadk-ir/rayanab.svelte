import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shop;
  let shops;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ shop, shops } = data);
  return ` <section id="main-banner-page" class="position-relative page-header shopinfo-header section-nav-smooth parallax"><div class="overlay overlay-dark opacity-6 z-index-1"></div> <div class="container"><div class="row shift-tole" data-svelte-h="svelte-8c43ss"><div class="col-lg-8 offset-lg-2"><div class="page-titles whitecolor text-center padding_top padding_bottom"><h2 class="font-xlight">تنها</h2> <h2 class="font-bold">تامین کننده</h2> <h2 class="font-xlight">برند ایگو</h2> <h3 class="font-light pt-2">رایاناب ارائه دهنده خدمات ناب</h3></div></div></div> <div class="gradient-bg title-wrap"><div class="row"><div class="col-lg-12 col-md-12 whitecolor"><h3 class="float-end" data-svelte-h="svelte-s89h6w">فروشگاه</h3> <ul class="breadcrumb top10 bottom10 float-start"><li class="breadcrumb-item hover-light" data-svelte-h="svelte-1mlljgp"><a href="/">خانه</a></li> <li class="breadcrumb-item hover-light" data-svelte-h="svelte-1894zm0"><a href="/shop">فروشگاه</a></li> <li class="breadcrumb-item hover-light">${escape(shop.title)}</li></ul></div></div></div></div></section>   <section id="shop" class="padding"><div class="container"><div class="row">  <div class="col-lg-5 col-md-5 col-sm-12 wow fadeInLeft heading-space shift-tole" id="shop-dual-carousel"><div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"><div class="carousel-indicators" data-svelte-h="svelte-jfk1ur"><button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button></div> <div class="carousel-inner"><div class="carousel-item active" data-bs-interval="10000"><img src="${"https://rayanabcom.storage.iran.liara.space/mahsolat/" + escape(shop.images[0], true)}" class="d-block w-100" alt="..."></div> ${each({ length: shop.images.length }, (_, i) => {
    return `<div class="carousel-item" data-bs-interval="2000"><img src="${"https://rayanabcom.storage.iran.liara.space/mahsolat/" + escape(shop.images[i + 1], true)}" class="d-block w-100" alt="..."> </div>`;
  })}</div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" data-svelte-h="svelte-1mcmu9q"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" data-svelte-h="svelte-7tf5yy"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span></button></div></div> <div class="col-lg-7 col-md-7 col-sm-12 shop_info heading-space wow fadeInRight" data-wow-delay="20ms" data-wow-duration="1100ms"> <h1 class="heading darkcolor font-light2 bottom15"><span>${escape(shop.title)}</span><span class="divider-left"></span></h1> <p class="bottom10">${escape(shop.caption[0])}</p> <div class="row"><div class="col-lg-6 col-md-6 col-sm-6"><ul style="list-style: disc;" class="ps-3-rtl">${each(shop.keyinfo, (keyinfo) => {
    return `<li><p class="my-1"><span class="font-light">${escape(keyinfo)}</span></p> </li>`;
  })} ${shops.price == void 0 || shops.price.length < 1 ? `<small data-svelte-h="svelte-fv8kh">قیمت: CALL</small><i class="fa fa-phone-volume"></i>` : `${each(shops.price, (prices) => {
    return `قیمت: ${escape(prices)}<br>`;
  })}`}</ul></div></div></div></div> <div class="row top40"> <div class="col-md-12 wow fadeInUp" data-wow-delay="300ms"><div class="tab-to-accordion heading_space"><div class="tab-container"><div id="tab1"><p class="pb-3">${each({ length: shop.caption.length }, (_, i) => {
    return `<h3 class="heading darkcolor font-light heading_space mt-md-0 mt-3"><strong>${escape([shop.captionTitle[i]])}</strong><span class="divider-left"></span></h3> <p class="pb-3">${escape([shop.caption[i]])} </p>`;
  })}</p></div> <div id="tab2"><table class="table table-striped"><tbody>${typeof shop.detail.size != "undefined" ? `<tr><td data-svelte-h="svelte-1gqwsgy">سایز</td> <td>${escape(shop.detail.size)}</td></tr>` : ``} ${typeof shop.detail.weight != "undefined" ? `<tr><td data-svelte-h="svelte-jsbo72">وزن</td> <td>${escape(shop.detail.weight)}</td></tr>` : ``} ${typeof shop.detail.connector != "undefined" ? `<tr><td data-svelte-h="svelte-bqm4vf">رابط</td> <td>${escape(shop.detail.connector)}</td></tr>` : ``} ${typeof shop.detail.formdactor != "undefined" ? `<tr><td data-svelte-h="svelte-15xmor7">فرم داکتور</td> <td>${escape(shop.detail.formdactor)}</td></tr>` : ``} ${typeof shop.detail.Capacity != "undefined" ? `<tr><td data-svelte-h="svelte-9z16i8">فضای ذخیره سازی</td> <td>${escape(shop.detail.Capacity)}</td></tr>` : ``} ${typeof shop.detail.type != "undefined" ? `<tr><td data-svelte-h="svelte-1usgx7p">نوع</td> <td>${escape(shop.detail.type)}</td></tr>` : ``} ${typeof shop.detail.Readingspeed != "undefined" ? `<tr><td data-svelte-h="svelte-5efc2r">سرعت خواندن</td> <td>${escape(shop.detail.Readingspeed)}</td></tr>` : ``} ${typeof shop.detail.writingspeed != "undefined" ? `<tr><td data-svelte-h="svelte-aa4rgr">سرعت نوشتن</td> <td>${escape(shop.detail.writingspeed)}</td></tr>` : ``} ${typeof shop.detail.color != "undefined" ? `<tr><td data-svelte-h="svelte-1l79uh2">رنگ</td> <td>${escape(shop.detail.color)}</td></tr>` : ``} ${typeof shop.detail.canotg != "undefined" ? `<tr><td data-svelte-h="svelte-1ab5127">قابلیت OTG</td> <td>${escape(shop.detail.canotg)}</td></tr>` : ``} ${typeof shop.detail.steeltype != "undefined" ? `<tr><td data-svelte-h="svelte-1crq2vf">جنس</td> <td>${escape(shop.detail.steeltype)}</td></tr>` : ``} ${typeof shop.detail.light != "undefined" ? `<tr><td data-svelte-h="svelte-1wba2zm">چراغ</td> <td>${escape(shop.detail.light)}</td></tr>` : ``} ${typeof shop.detail.zarbeprof != "undefined" ? `<tr><td data-svelte-h="svelte-yu43j5">ضد ضربه</td> <td>${escape(shop.detail.zarbeprof)}</td></tr>` : ``} ${typeof shop.detail.ghobarprof != "undefined" ? `<tr><td data-svelte-h="svelte-1s8wain">ضد غبار</td> <td>${escape(shop.detail.ghobarprof)}</td></tr>` : ``} ${typeof shop.detail.waterprof != "undefined" ? `<tr><td data-svelte-h="svelte-4cx4ag">ضد اب</td> <td>${escape(shop.detail.waterprof)}</td></tr>` : ``} ${typeof shop.detail.osSupport != "undefined" ? `<tr><td data-svelte-h="svelte-8eutvo">سازگار با</td> <td>${escape(shop.detail.osSupport)}</td></tr>` : ``} ${typeof shop.detail.SpeedStandard != "undefined" ? `<tr><td data-svelte-h="svelte-67e5tc">استاندارد سرعت</td> <td>${escape(shop.detail.SpeedStandard)}</td></tr>` : ``}</tbody></table></div></div></div></div></div> <div class="row"><div class="col-md-12 wow fadeInDown text-center text-md-start" data-svelte-h="svelte-r15r5c"><h3 class="heading darkcolor font-light heading_space mt-md-0 mt-3"><span>محصولات</span> مرتبط<span class="divider-left"></span></h3></div> ${each(shops, (realted) => {
    return `<div class="col-lg-3 col-md-6 col-sm-6 wow fadeIn "><div class="shopping-box top20 "><div class="image"><img src="${"https://rayanabcom.storage.iran.liara.space/mahsolat/" + escape(realted.images[0], true)}"${add_attribute("title", realted.title, 0)}${add_attribute("alt", realted.title, 0)} height="200px"> <div class="overlay center-block"><a class="opens" href="${"/shop/" + escape(realted.title, true)}" title="Add To Cart"><i class="fa fa-eye"></i></a> </div></div> <div class="shop-content text-center"><h4 class="darkcolor"><a href="${"/shop/" + escape(realted.title, true)}">${escape(realted.title)} </a></h4><br> <h4 class="btn darkcolor" style="border:1px solid #ffc107be;"><a href="${"/shop/" + escape(realted.title, true)}">مشاهده محصول</a></h4> </div></div> </div>`;
  })}</div></div></section>`;
});
export {
  Page as default
};
