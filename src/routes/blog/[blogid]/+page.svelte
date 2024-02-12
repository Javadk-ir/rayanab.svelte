<script lang="ts">
    import type { PageData } from './$types';
    export let data:PageData
    $: ({blog, blogs} = data)
</script>


<!-- Our Blogs -->
<section id="our-blog" class="bglight padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-7">
                <div class="news_item shadow">
                    <div class="image">
                        <img src="https://rayanabcom.storage.iran.liara.space/blog/{blog.image}" alt="{blog.title}" class="img-responsive">
                    </div>
                    <div class="news_desc text-center text-md-start">
                        <h3 class="text-capitalize font-normal darkcolor"><a href="/blog/{blog.title}">{blog.title}</a></h3>
                        <ul class="meta-tags top20 bottom20">
                            <li><a href="/blog/{blog.title}"><i class="fas fa-calendar-alt"></i> {blog.tarikh} </a></li>
                            <li><a href="/blog/{blog.title}"> <i class="far fa-user"></i> {blog.submmitedby} </a></li>

                        </ul>
                        <div >
                            {@html blog.matn.replace(/\n/g, '<br />')}
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-5">
                <aside class="sidebar whitebox mt-5 mt-md-0">
                    <div class="widget heading_space shadow wow fadeIn" data-wow-delay="350ms">
                        <h4 class="text-capitalize darkcolor bottom20 text-center text-md-start">پست اخیر</h4>
                        {#each blogs as related}
                        <div class="single_post d-table bottom15">
                            <a href="/blog/{related.title}" class="post"><img src="https://rayanabcom.storage.iran.liara.space/blog/{related.image}" alt="{blog.title}"></a>
                            <div class="text">
                                <a href="/blog/{related.title}">{related.title}</a>
                                <span>{related.tarikh}</span>
                            </div>
                        </div>
                        {/each}

                    </div>
                    <div class="widget shadow heading_space text-center text-md-start">
                        <h4 class="text-capitalize darkcolor bottom20">تگ ها</h4>
                        <ul class="webtags">
                        {#each blog.tags as tags}
                            <li><a href="#.">{tags}</a></li>
                        {/each}

                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</section>

