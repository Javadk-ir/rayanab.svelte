<script lang="ts">
    import { onMount } from 'svelte';
    
    import { Application } from '@splinetool/runtime';
    onMount(() => {

    const canvas: any = document.getElementById('canvas3d');
const app: any = new Application(canvas);
app.load('https://prod.spline.design/XtVm4mAlsRIBkdMP/scene.splinecode');
	});
</script>
<!--Main Slider-->
<section id="main-banner-area" class="position-relative">
    <div id="position-relative" class="rev_slider_wrapper fullwidthbanner-container m-0 p-0 bg-light" data-alias="classic4export">
        <!-- START REVOLUTION SLIDER 5.4.1 fullwidth mode -->
        <div id="rev_main" class=" fullwidthabanner" data-version="5.4.1">
            <ul>

                    <img src="images/banner.jpg" title="title image" alt="banner.jpg" >
                    <!-- LAYER NR. 1 -->

                    
                    <div class="centered text-light text-capitalize font-xlight text-center"><canvas id="canvas3d"></canvas></div><br>
                    <h3 class="centered2 text-light text-capitalize font-xlight text-center"><span class="text-warning">رایاناب</span> , گارانتی <span class="text-warning">ناب</span></h3><br>



             <style>

                .centered {
                    font-size: 72px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: -webkit-linear-gradient(#ffc107, #ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 500px;
  height: 500px
}
.centered2 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

             </style>

            </ul>
        </div>
    </div>
    <ul class="social-icons-simple revicon bg-light">
        <li class="d-table"><a href="https://www.facebook.com/Rayanab-111823904615726" class="hover-light text-warning"><i class="fab fa-facebook-f"></i></a> </li>
        <li class="d-table"><a href="https://twitter.com/Rayanabco" class="hover-light text-warning"><i class="fab fa-twitter"></i> </a> </li>
        <li class="d-table"><a href="https://www.linkedin.com/company/rayanabco/about/" class="hover-light text-warning"><i class="fab fa-linkedin-in"></i> </a> </li>
        <li class="d-table"><a href="https://www.instagram.com/rayanabco/" class="hover-light text-warning"><i class="fab fa-instagram"></i> </a> </li>
    </ul>
</section>
<!--Some Feature -->
<section id="our-feature" class="single-feature padding_bottom_half padding_top_half mt-1 mt-lg-n4 mt-md-n3">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-7 col-sm-7 text-sm-start text-center wow fadeInLeft" data-wow-delay="300ms">
                <div class="heading-title mb-4">
                    <h2 class="darkcolor font-normal bottom30"><span class="text-warning">رایاناب</span><br>ارائه دهنده خدمات <span class="text-warning">ناب</span></h2>
                </div>
                <p class="bottom35">شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده و در راستای حمایت از مصرف کننده جهت بهبود سطح کیفی محصولات اقدام به واردات کالای با کیفیت نموده است. شرکت رایاناب نمایندگی انحصاری محصولات برند ایگو (aigo) میباشد.
                     </p>
                <span class="button btnsecondary gradient-btnw mb-sm-0 mb-4">اطلاعات بیشتر</span>
            </div>
            <div class="col-lg-5 offset-lg-1 col-md-5 col-sm-5 wow fadeInRight" data-wow-delay="300ms">
                <div class="image"><img title="u520" alt="u520" src="images/u520.png"></div>
            </div>
        </div>
    </div>
</section>
<!--Some Feature ends-->
<!-- Counters -->
<section id="bg-counters" class="padding bg-counters parallax">
    <div class="container glass-background ">
        <div class="row align-items-center text-center" >
            <div class="col-lg-4 col-md-4 col-sm-4 bottom10">
                <div class="counters text-dark  top10 bottom10">
                   + <span class="count_nums font-light" data-to="4382" data-speed="2000">4482 </span>
                </div>
                <h3 class="font-light text-dark top20">روز از زمانی که ما شروع کردیم</h3>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
                <p class="text-dark top20 bottom20 font-light title">شرکت رایاناب از سال 1390 فعالیت خود را در زمینه عرضه محصولات حافظه بصورت تخصصی و حرفه ای در سراسر کشور آغاز کرده و در راستای حمایت از مصرف کننده جهت بهبود سطح کیفی محصولات اقدام به واردات کالای با کیفیت نموده است. شرکت رایاناب نمایندگی انحصاری محصولات برند ایگو (aigo) میباشد.
                    </p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 bottom10">
                <div class="counters text-dark top10 bottom10">
                    +<span class="count_nums font-light" data-to="19165" data-speed="2000">19165 </span>
                </div>
                <h3 class="font-light text-dark top20">مشتری خوشحال</h3>
            </div>
        </div>
    </div>
</section>
<!-- Counters ends-->
<!-- WOrk Process-->
<section id="our-process" class="padding bgraya">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12 text-center">
                <div class="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms">
                    <span>ساده سازی مراحل سفارش کالا برای حال و رفاح مشتریان عزیز</span>
                    <h2 class="fw-normal">در 5 مرحله  </h2>
                </div>
            </div>
        </div>
        <div class="row">
            <ul class="process-wrapp">
                <li class="whitecolor wow fadeIn" data-wow-delay="300ms">
                    <span class="pro-step bottom20">01</span>
                    <p class="fontbold bottom25"> کاتالوگ</p>
                    <p class="mt-n2 mt-sm-0">کاتالوگ را مشاهده کنید و محصول مورد نظر را انتخاب کنید</p>
                </li>
                <li class="whitecolor wow fadeIn" data-wow-delay="400ms">
                    <span class="pro-step bottom20">02</span>
                    <p class="fontbold bottom25">تماس با ما</p>
                    <p class="mt-n2 mt-sm-0">تماس با کارشناسان ما برای محصول مورد نظر خودتون</p>
                </li>
                <li class="whitecolor wow fadeIn" data-wow-delay="500ms">
                    <span class="pro-step bottom20">03</span>
                    <p class="fontbold bottom25">پیش فاکتور</p>
                    <p class="mt-n2 mt-sm-0">ارسال پیش فاکتور برای شما جهت بازدید</p>
                </li>
                <li class="whitecolor wow fadeIn" data-wow-delay="600ms">
                    <span class="pro-step bottom20">04</span>
                    <p class="fontbold bottom25">اماده سازی</p>
                    <p class="mt-n2 mt-sm-0">سفارشتون رو بسته بندی ارسال میکنیم.</p>
                </li>
                <li class="whitecolor wow fadeIn" data-wow-delay="700ms">
                    <span class="pro-step bottom20">05</span>
                    <p class="fontbold bottom25">تحویل</p>
                    <p class="mt-n2 mt-sm-0">تبریک ! به خانواده رایاناب خوش امدید.</p>
                </li>
            </ul>
        </div>
    </div>
</section>
<!--WOrk Process ends-->


<!-- Mobile Apps -->
<section id="our-apps" class="padding">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-7 col-sm-12">
                <div class="heading-title bottom30 wow fadeInUp" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInUp;">
                    <span class="defaultcolor text-center text-md-start">محصولات ما تنوع زیادی دارند!</span>
                    <h2 class="darkcolor font-normal text-center text-md-start">لیست محصولات</h2>
                </div>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-12">
                <p class="text-center text-md-start">محصولات ما دارای تنوع زیاد هستند و به کیفیت مطلوب و فراتر از ان رسیدند که در مقایسه با ارزش قیمتی ان بسیار به صرفه است که باعث خشنودی و رضایت مشتریان میشود </p>
            </div>
        </div>
        <div class="row d-flex align-items-center" id="app-feature">
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-center text-md-end">
                    <div class="feature-item mt-3 wow fadeInLeft" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInLeft;">
                        <div class="icon text-warning"><i class="fa fa-car-battery"></i></div>
                        <div class="text">
                            <a href="/shop">
                            <h3 class="bottom15">
                                <span class="d-inline-block">فلش یو اس بی </span>
                            </h3>
                            <p>USB 3.0 و USB 2.0 با گارانتی مادام العمر </p>
                            </a>
                        </div>
                    </div>
                    <div class="feature-item mt-5 wow fadeInLeft" data-wow-delay="350ms" style="visibility: visible; animation-delay: 350ms; animation-name: fadeInLeft;">
                        <div class="icon text-warning"><i class="fa fa-sim-card"></i></div>
                        <div class="text">
                            <a href="/shop">
                            <h3 class="bottom15">
                                <span class="d-inline-block">کارت حافظه</span>
                            </h3>
                            <p>کارت حافظه های بینظیر برای  ثبت خاطرات شما </p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="app-image top30">
                    <div class="app-slider-lock-btn"></div>
                    <div class="app-slider-lock">
                        <img src="images/Logo-Web.png" alt="logo website">
                        <img src="images/X.svg" width="50px" height="50px" title="hand shake image" alt="X.svg" >
                        <img src="images/template (1).png" title="Aigo logo" alt="Aigo logo" >
                    </div>
                    <img src="images/iphone.png" title="phone" alt="phone">
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="text-center text-md-start">
                    <div class="feature-item mt-3 wow fadeInRight" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInRight;">
                        <div class="icon text-warning"><i class="fa fa-memory"></i></div>
                        <div class="text">
                            <a href="/shop">
                            <h3 class="bottom15">
                                <span class="d-inline-block">هارد SSD</span>
                            </h3>
                            <p>انواع SSD ها در قیمت ها و کیفیت های عالی</p>
                            </a>
                        </div>
                    </div>
                    <div class="feature-item mt-5 wow fadeInRight" data-wow-delay="350ms" style="visibility: visible; animation-delay: 350ms; animation-name: fadeInRight;">
                        <div class="icon text-warning"><i class="fa fa-list"></i></div>
                        <div class="text">
                            <a href="/shop">
                            <h3 class="bottom15">
                                <span class="d-inline-block">بیشتر از چیزیه که اینجا بنویسیم </span>
                            </h3>
                            <p>اگه دوست داری از تمام محصولات ما با خبر بشی پیشنهاد میکنم یه سر به کاتالوگ بزنی </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Mobile Apps ends-->