<script lang="ts">
    import type { PageData } from './$types';
    export let data:PageData
    $: ({shop} = data)
</script>



<section id="main-banner-page" class="position-relative page-header shop-header section-nav-smooth parallax">
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
                        <li class="breadcrumb-item hover-light">فروشگاه</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!--Page Header ends -->
<!--Shopping-->
<section id="our-shop" class="padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
                <h2 class="heading bottom30 darkcolor font-light2"> <span class="font-normal">کاتالوگ </span>
                    <span class="divider-center"></span>
                </h2>
                <div class="col-md-8 offset-md-2-rtl heading_space">
                    <p>در بخش زیر لیست محصولات موجود در رایاناب را میتوانید مشاهده کنید</p>
                </div>
            </div>


            {#each shop as shops}
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="shopping-box bottom30">
                            <div class="image" >
                                <img src="https://rayanabco.ir/{shops.images[0]}" title="{shops.title}" alt="{shops.title}" height="250px">
                                <div class="overlay center-block">
                                    <a class="opens" href="/shop/{shops.title}" title="Add To Cart"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="shop-content text-center">
                                <h4 class="darkcolor"><a href="/shop/{shops.title}">{shops.title}</a>
                                    <br><br>
                                    <span>
                                    قیمت:
                                    <br>
                                    {#if shops.price == undefined || shops.price.length < 1}
                                    
                                    <small>CALL</small><i class="fa fa-phone-volume"></i> 

                                    {:else}
                                    {#each shops.price as prices}
                                        {prices}<br>
                                    {/each}
                                    {/if}
                                    

                                </span></h4>
                                    <br>
                                <h4 class="btn darkcolor" style="border:1px solid  #ffc107be;"><a href="/shop/{shops.title}">مشاهده محصول</a></h4>
                                


                            </div>
                        </div>
                    </div>
              {/each}

            <div class="col-lg-12 col-md-12">
                <ul class="pagination justify-content-center top20 wow fadeInUp" data-wow-delay="400ms">
                    
                </ul>
            </div>
        </div>
    </div>
</section>
<!--Shopping ends-->
<!-- Counters -->
<section class="padding bg-shop-quote parallax">
    <div class="overlay overlay-dark opacity-6 z-index-0"></div>
    <div class="container">
        <div class="row align-items-center text-center">
            <div class="col-md-8 offset-md-2-rtl">
                <div class="quote-wrapper">
                    <h3> ازادی در تکنولوژی, ازادی در زندگی </h3>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Counters ends-->