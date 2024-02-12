import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport"  content="width=device-width, initial-scale=1, shrink-to-fit=no"/>\n		<meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>\n		<link rel="canonical" href="https://rayanab.com">\n		' + head + `
		<title>رایاناب | نماینده انحصاری محصولات ایگو (aigo) در ایران</title>
		<meta name="description" content="شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده (aigo) میباشد.">
		<meta name="author" content="Rayanab Company">
		<meta name="keywords" content="رایاناب,شرکت رایاناب,اروین فروزش رایاناب,ایگو,ایگو چیست,برند,برند ایگو,شرکت رایاناب, شرکت رایاناب رشت,شرکت رایاناب تهران, شرکت بازرگانی رشت,شرکت بازرگانی رایاناب,rayanab,aigo korean, aigo, aigo az300,aigo massage,aigo meaning,aigo bouido,rayana,ایگو,valeu aigo,aigo,aigo welcome family,aigo welcome familys,aigo at,aigo booking,aigo hofer,aigo welcome,family ">
  
		<meta property="og:title" content="رایاناب نماینده انحصاری محصولات ایگو(aigo) در ایران" />
		<meta property="og:site_name" content="رایاناب">
		<meta property="og:description" content="شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده (aigo) میباشد." />
		<meta property="og:image" content="/images/Logo-Web.png" />
		<meta property="og:image:alt" content="Rayanab logo" />
		<meta property="og:url" content="https://rayanab.com" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="fa_IR" />
		<meta property="og:availability" content="in stock">
  
		<meta name="twitter:card" content="شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده (aigo) میباشد." />
		<meta name="twitter:site" content="Rayanab co" />
		<meta name="twitter:creator" content="Rayanab co" />
		<meta name="twitter:description" content="شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده (aigo) میباشد.">
		<meta name="twitter:image" content="/images/Logo-Web.png">
  
		<meta name="apple-mobile-web-app-title" content="Rayanab">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-touch-fullscreen" content="yes">
  
		<meta name="mobile-web-app-capable" content="yes">
		<link rel="icon" href="/images/Logo-Web.png" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/bootstrap.min.css" />
		<link rel="stylesheet" href="/css/all.min.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/owl.carousel.min.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/jquery.fancybox.min.css" />
	
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/cubeportfolio.min.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/revolution/navigation.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/revolution/settings.css" />
		<link rel="stylesheet" href="/css/style.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/rtl.css" />
	
	</head>
	<body data-sveltekit-preload-data="hover">

	  <!--PreLoader Ends-->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-MRRZR2REYZ"><\/script>
		<script async>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());gtag('config', 'G-MRRZR2REYZ');<\/script>
  
<!-- header -->
<header class="site-header" id="header">
	<nav class="navbar navbar-expand-lg transparent-bg darkcolor static-nav">
  
		<div class="container">
			<a class="navbar-brand" href="/">
				<img src="/images/logo-transparent.png" alt="logo" class="logo-default">
				<img src="/images/logo-transparent.png" alt="logo" class="logo-scrolled">
			</a>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav ms-auto-rtl">
				  <li class="nav-item">
					<a class="nav-link" href="/">خانه</a>
				  </li>
					<li class="nav-item">
						<a class="nav-link" data-sveltekit-reload data-sveltekit-preload-data="hover" href="/shop">محصولات</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" data-sveltekit-reload data-sveltekit-preload-data="hover" href="/blog">بلاگ</a>
				  </li>
					<li class="nav-item">
						<a class="nav-link" href="/contact">تماس با ما</a>
					</li>
					<li class="nav-item">
					  <a class="nav-link" href="/work">همکاری با ما</a>
				  </li>
  
				  <li class="nav-item">
					<a class="nav-link text-info" href="https://rayanabco.ir">ورود نمایندگان</a>
				</li>
				</ul>
			</div>
		</div>
		<!--side menu open button-->
		<a href="#" class="d-inline-block sidemenu_btn" id="sidemenu_toggle">
			<span class="navbarcoloritem"></span> <span class="navbarcoloritem"></span> <span class="navbarcoloritem"></span>
		</a>
	</nav>
	<!-- side menu -->
	<div class="side-menu opacity-0 gradient-bg bgrayal">
		<div class="overlay"></div>
		<div class="inner-wrapper">
			<span class="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
			<nav class="side-nav w-100">
				<ul class="navbar-nav">
				  <li class="nav-item">
					<a id="btn_sideNavClose" class="nav-link" href="/"> خانه</a>
				  </li>
					<li class="nav-item">
						<a id="btn_sideNavClose" class="nav-link" data-sveltekit-reload data-sveltekit-preload-data="hover" href="/shop">محصولات</a>
					</li>
					<li class="nav-item"> 
					  <a id="btn_sideNavClose" class="nav-link" data-sveltekit-reload data-sveltekit-preload-data="hover" href="/blog">بلاگ</a>
				  </li>
					<li class="nav-item">
						<a id="btn_sideNavClose" class="nav-link" href="/contact">تماس با ما</a>
					</li>
					<li class="nav-item">
					  <a id="btn_sideNavClose" class="nav-link" href="/work">همکاری با ما</a>
				  </li>
					<li class="nav-item">
					  <a class="nav-link text-info" href="https://rayanabco.ir">ورود نمایندگان</a>
				  </li>
				  
				</ul>
			</nav>
			<div class="side-footer w-100">
				<ul class="social-icons-simple white top40">
				  <li><a href="https://www.facebook.com/Rayanab-111823904615726" class="facebook"><i class="fab fa-facebook-f"></i> </a> </li>
				  <li><a href="https://twitter.com/Rayanabco" class="twitter"><i class="fab fa-twitter"></i> </a> </li>
				  <li><a href="https://www.linkedin.com/company/rayanabco/about/" class="linkedin"><i class="fab fa-linkedin-in"></i> </a> </li>
				  <li><a href="https://www.instagram.com/rayanabco/" class="insta"><i class="fab fa-instagram"></i> </a> </li>
				</ul>
				<p class="whitecolor">&copy; ساخته شده با عشق ❤️</p>
			</div>
		</div>
	</div>
	<div id="close_side_menu" class="tooltip"></div>
	<!-- End side menu -->
  </header>
  <!-- header -->

		<div style="display: contents">` + body + '</div>\n\n\n		\n<!-- Contact US -->\n<section id="stayconnect" class="bglight position-relative">\n    <div class="container">\n        <div class="contactus-wrapp">\n            <div class="row">\n                <div class="col-md-12 col-sm-12">\n                    <div class="heading-title wow fadeInUp text-center text-md-start" data-wow-delay="300ms">\n                        <h3 class="darkcolor bottom20">با ما در ارتباط باشید</h3>\n                    </div>\n                </div>\n                <div class="col-md-12 col-sm-12">\n                    <form class="getin_form wow fadeInUp" data-wow-delay="400ms" action="https://formsubmit.co/6d3ef0f5cdfe71fc71a5ba8b89dacbc4" method="POST">\n                        <div class="row">\n                            <div class="col-md-12 col-sm-12" id="result"></div>\n                            <div class="col-md-3 col-sm-6">\n                                <div class="form-group">\n                                    <label for="userName" class="d-none"></label>\n                                    <input class="form-control" type="text" placeholder="نام" required id="نام" name="نام" required>\n                                </div>\n                            </div>\n                            <div class="col-md-3 col-sm-6">\n                                <div class="form-group">\n                                    <label for="companyName" class="d-none"></label>\n                                    <input class="form-control" type="text" placeholder="توضیحات"  id="توضیحات" name="توضیحات" required>\n                                </div>\n                            </div>\n                            <div class="col-md-3 col-sm-6">\n                                <div class="form-group">\n                                    <label for="email" class="d-none"></label>\n                                    <input class="form-control" type="email" placeholder="ایمیل" id="ایمیل" name="ایمیل" required>\n                                </div>\n                            </div>\n                            <div class="col-md-3 col-sm-6">\n                                <button type="submit" class="button gradient-btnw w-100" id="submit_btn">اشتراک گذاری</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Site Footer Here-->\n<footer id="site-footer" class="bgrayal padding_top">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-6 col-md-9 col-sm-9">\n                <div class="footer_panel padding_bottom_half bottom20">\n                    <a href="/" class="footer_logo bottom25"><img src="/images/logo-transparent.png" alt="rayanab logo"></a>\n                    <p class="whitecolor bottom25">شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده و در راستای حمایت از مصرف کننده جهت بهبود سطح کیفی محصولات اقدام به واردات کالای با کیفیت نموده است. شرکت رایاناب نمایندگی انحصاری محصولات برند ایگو (aigo) میباشد.\n                        </p>\n                    <div class="d-table w-100 address-item whitecolor bottom25">\n                        <span class="d-table-cell align-middle"><i class="fas fa-mobile-alt"></i></span>\n                        <p class="d-table-cell align-middle bottom0">\n                            021-9108-00-38 <a class="d-block" href="mailto:info@rayanab.com">info@rayanab.com</a>\n                        </p>\n                    </div>\n                    <ul class="social-icons white wow fadeInUp" data-wow-delay="300ms">\n                        <li><a href="https://www.facebook.com/Rayanab-111823904615726" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i> </a> </li>\n                        <li><a href="https://twitter.com/Rayanabco" class="twitter" target="_blank"><i class="fab fa-twitter"></i> </a> </li>\n                        <li><a href="https://www.linkedin.com/company/rayanabco/about/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i> </a> </li>\n                        <li><a href="https://www.instagram.com/rayanabco/" class="insta" target="_blank"><i class="fab fa-instagram"></i> </a> </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class="col-lg-3 col-md-6 col-sm-6">\n                <div class="footer_panel padding_bottom_half bottom20 ps-0 ps-lg-5">\n                    <h3 class="text-warning bottom25">سرویس ها</h3>\n                    <ul class="links">\n                        <li><a href="/">خانه</a></li>\n                        <li><a href="/">آخرین اخبار</a></li>\n                        <li><a href="/contact">درباره ما</a></li>\n                        <li class="text-info"><a href="https://rayanabco.ir">ورود نمایندگان</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-6 col-sm-6">\n                <div class="footer_panel padding_bottom_half bottom20">\n                    <h3 class="text-warning bottom25">ساعات کاری</h3>\n                    <p class="whitecolor bottom25">در تلاشیم در بیشتر ساعات شبانه روز کنار شما باشیم</p>\n                    <ul class="hours_links whitecolor">\n                        <li><span>شنبه تا چهار شنبه :</span> <span>9.00-17.00</span></li>\n                        <li><span>پنجشنبه :</span> <span>09:00-14:00</span></li>\n                        <li><span>رویدادهای تقویم :</span> <span>تعطیل</span></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"><\/script>\n		<!--Bootstrap Core-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/propper.min.js"><\/script>\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/bootstrap.min.js"><\/script>\n		<!--to view items on reach-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/jquery.appear.js"><\/script>\n		<!--Owl Slider-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/owl.carousel.min.js"><\/script>\n		<!--number counters-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/jquery-countTo.js"><\/script>\n		<!--Parallax Background-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/parallaxie.js"><\/script>\n		<!--Cubefolio Gallery-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/jquery.cubeportfolio.min.js"><\/script>\n		<!--Fancybox js-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/jquery.fancybox.min.js"><\/script>\n		<!--wow js-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/wow.js"><\/script>\n			<!--tooltip js-->\n			<script async src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/tooltipster.min.js"><\/script>\n		<!--Revolution SLider-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/revolution/jquery.themepunch.tools.min.js"><\/script>\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/revolution/jquery.themepunch.revolution.min.js"><\/script>\n		<!--custom functions and script-->\n		<script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/js/functions.js"><\/script>\n	</body>\n</html>\n',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "2aqvgx"
};
function get_hooks() {
  return import("./hooks.server.js");
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_prerendering as k,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
