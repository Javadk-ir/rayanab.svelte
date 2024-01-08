<script lang="ts">
    import type { PageData } from './$types';
    export let data:PageData
    $: ({shop, shops} = data)
</script>

<!--Page Header-->
<section id="main-banner-page" class="position-relative page-header shopinfo-header section-nav-smooth parallax">
    <div class="overlay overlay-dark opacity-6 z-index-1"></div>
    <div class="container">
        <div class="row shift-tole">
            <div class="col-lg-8 offset-lg-2">
                <div class="page-titles whitecolor text-center padding_top padding_bottom">
                    <h2 class="font-xlight">تنها</h2>
                    <h2 class="font-bold">تامین کننده</h2>
                    <h2 class="font-xlight">برند ایگو</h2>
                    <h3 class="font-light pt-2">رایاناب ارائه دهنده خدمات ناب</h3>
                </div>
            </div>
        </div>
        <div class="gradient-bg title-wrap">
            <div class="row">
                <div class="col-lg-12 col-md-12 whitecolor">
                    <h3 class="float-end">فروشگاه</h3>
                    <ul class="breadcrumb top10 bottom10 float-start">
                        <li class="breadcrumb-item hover-light"><a href="/">خانه</a></li>
                        <li class="breadcrumb-item hover-light"><a href="/shop">فروشگاه</a></li>
                        <li class="breadcrumb-item hover-light">{shop.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Page Header ends -->
<!--Shop details-->
<section id="shop" class="padding">
    <div class="container">
        <div class="row">

            <!-- NOTE: The Id of both of below tags should be same as below-->
            <!-- shop-dual-carousel -->
            <div class="col-lg-5 col-md-5 col-sm-12 wow fadeInLeft heading-space shift-tole" id="shop-dual-carousel">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="10000" >
                        <img src="https://rayanabco.ir/{shop.images[0]}" class="d-block w-100" alt="...">
                      </div>
                      {#each {length: shop.images.length} as _, i}
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://rayanabco.ir/{shop.images[i + 1]}" class="d-block w-100" alt="...">
                      </div>
                      {/each}

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  </div>
            <div class="col-lg-7 col-md-7 col-sm-12 shop_info heading-space wow fadeInRight" data-wow-delay="20ms" data-wow-duration="1100ms">
                <!--Shop detail-->
                <h1 class="heading darkcolor font-light2 bottom15"><span>{shop.title}</span><span class="divider-left"></span></h1>

                <p class=" bottom10">{shop.caption[0]}</p>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <ul style="list-style: disc;" class="ps-3-rtl">
                {#each shop.keyinfo as keyinfo}
                <li>
                    <p class="my-1"><span class="font-light">{keyinfo}</span></p>
                </li>
                {/each}

                {#if shops.price == undefined || shops.price.length < 1}
                                    
                <small>قیمت: CALL</small><i class="fa fa-phone-volume"></i> 

                {:else}
                {#each shops.price as prices}
                قیمت: {prices}<br>
                {/each}
                {/if}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="row top40">
            <!--Shop detail tabs-->
            <div class="col-md-12 wow fadeInUp" data-wow-delay="300ms">
                <div class="tab-to-accordion heading_space">

                    <div class="tab-container">
                        <div id="tab1">
                            <p class="pb-3">
            {#each {length: shop.caption.length} as _, i}
                <h3 class="heading darkcolor font-light heading_space mt-md-0 mt-3"><strong>{[shop.captionTitle[i]]}</strong><span class="divider-left"></span></h3>
                
                <p class="pb-3">
                    {[shop.caption[i]]}
                </p>
            {/each}

                        </div>
                        <div id="tab2">
                            <table class="table table-striped">
                                <tbody>
                                    {#if typeof shop.detail.size != "undefined"}
                                    <tr>
                                    <td>سایز</td>
                                    <td>
                                        {shop.detail.size}
                                    </td>
                                    </tr>
                                    {/if}

                                    {#if typeof shop.detail.weight != "undefined"}
                                    <tr>
                                    <td>وزن</td>
                                    <td> {shop.detail.weight} </td>
                                    </tr>
                                    {/if}
                                        {#if typeof shop.detail.connector != "undefined"}

                                            <tr>
                                                <td>رابط</td>
                                                <td> {shop.detail.connector}</td>
            
                                            </tr>
                                            {/if}

                                            {#if typeof shop.detail.formdactor != "undefined"}

                                        <tr>
                                            <td>فرم داکتور</td>
                                            <td> {shop.detail.formdactor} </td>
                                        </tr>
                                        {/if}
                                    
                                        {#if typeof shop.detail.Capacity != "undefined"}

                                        <tr>
                                            <td>فضای ذخیره سازی</td>
                                            <td> {shop.detail.Capacity} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.type != "undefined"}

                                        <tr>
                                            <td>نوع</td>
                                            <td> {shop.detail.type} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.Readingspeed != "undefined"}
                                        <tr>
                                            <td>سرعت خواندن</td>
                                            <td> {shop.detail.Readingspeed} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.writingspeed != "undefined"}
                                        <tr>
                                            <td>سرعت نوشتن</td>
                                            <td> {shop.detail.writingspeed} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.color != "undefined"}
                                        <tr>
                                            <td>رنگ</td>
                                            <td>{shop.detail.color}</td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.canotg != "undefined"}
                                        <tr>
                                            <td>قابلیت OTG</td>
                                            <td> {shop.detail.canotg} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.steeltype != "undefined"}
                                        <tr>
                                            <td>جنس</td>
                                            <td> {shop.detail.steeltype} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.light != "undefined"}
                                        <tr>
                                            <td>چراغ</td>
                                            <td>{ shop.detail.light }</td>
                                        </tr>
                                        {/if}
                                   {#if typeof shop.detail.zarbeprof != "undefined" }
                                        <tr>
                                            <td>ضد ضربه</td>
                                            <td> {shop.detail.zarbeprof}</td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.ghobarprof != "undefined" }
                                        <tr>
                                            <td>ضد غبار</td>
                                            <td>{shop.detail.ghobarprof}</td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.waterprof != "undefined" }
                                        <tr>
                                            <td>ضد اب</td>
                                            <td>{shop.detail.waterprof}</td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.osSupport != "undefined" }
                                        <tr>
                                            <td>سازگار با</td>
                                            <td> {shop.detail.osSupport} </td>
                                        </tr>
                                        {/if}
                                        {#if typeof shop.detail.SpeedStandard != "undefined" }
                                        <tr>
                                            <td>استاندارد سرعت</td>
                                            <td>{shop.detail.SpeedStandard} </td>
                                        </tr>
                                        {/if}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
        <div class="row">
            <div class="col-md-12 wow fadeInDown text-center text-md-start">
                <h3 class="heading darkcolor font-light heading_space mt-md-0 mt-3"><span>محصولات </span> مرتبط<span class="divider-left"></span></h3>
            </div>
            {#each shops as realted }
            <div class="col-lg-3 col-md-6 col-sm-6 wow fadeIn ">
                <div class="shopping-box top20 ">
                    <div class="image">
                        <img src="https://rayanabco.ir/{realted.images[0]}" title="{realted.title}" alt="{realted.title}" height="200px">
                        <div class="overlay center-block">
                            <a class="opens" href="/shop/{realted.title}" title="Add To Cart"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                    <div class="shop-content text-center">
                        <h4 class="darkcolor"><a href="/shop/{realted.title}">{realted.title} </a></h4><br>
                        <h4 class="btn darkcolor" style="border:1px solid  #ffc107be;"><a href="/shop/{realted.title}">مشاهده محصول</a></h4>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>
