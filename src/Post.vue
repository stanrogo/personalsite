<template>
	<article id="post">
        <!-- <div class="cover-wrapper">
            <img class="cover" src="{{$cover_image}}">
            <div class="cover--title">
                <h1><span>{{$post->getTitle()}}</span></h1>
                <h2 class="PostAuthor"><span>By Stanley Clark</span></h2>
            </div>
        </div>
        <a class="button" href="{{route('blog')}}"><span class="lnr lnr-arrow-left ArrowLeft"></span>Back</a>

        <div class="post-content grid-container">

            <div class="TagContainer">
                <span class="lnr lnr-tag"></span>
                @foreach($post->getTags() as $tag)
                    <span class="Tag">{{$tag}}</span>
                @endforeach

                <span class="lnr lnr-clock"></span>

                <span class="Tag">
                    {{strftime("%A, %B %d, %Y", $post->getDate()->getTimestamp())}}
                </span>
            </div>

            <div>
                {{\Illuminate\Mail\Markdown::parse($post->getContent())}}
            </div>

            <div id="disqus_thread"></div>
        </div> -->
    </article>
</template>

<script>

export default {
	name: 'Post',
};
</script>