<script lang="ts">
    import { page } from '$app/stores';
</script>

<section id="error" class="padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="error wow bounceIn" data-wow-delay="300ms">
                    <h1>{$page.status}</h1>
                    <h2>{$page.status}</h2>
                    <h3> {$page.error?.message}</h3>

                </div>
                <p class="heading_space">متأسفیم، مشکلی پیش اومده. شاید یکی از لینک های زیر بتواند کمک کند!</p>
                <a href="/" class="button gradient-btn wow fadeIn mb-3 mb-sm-0" data-wow-delay="400ms">بازگشت به صفحه اصلی</a>

    
            </div>
        </div>
    </div>
</section>
<!--Error 404 section end-->

