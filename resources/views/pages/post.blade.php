@extends('default')

@section('head')
    <link rel="stylesheet" type="text/css" href="{{asset('css/post.css')}}">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
@endsection

@section('page-template')

    <article id="post">
        <div class="cover-wrapper">
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
        </div>
    </article>
@endsection

@section('footer-scripts')
    <script>

        var disqus_config = function () {
            this.page.url = 'http://stanrogo.com{{$_SERVER['REQUEST_URI']}}';  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = '{{$post->getId()}}';
        };
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://stanrogo.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
            onload="hljs.initHighlighting();"
    >
    </script>
@endsection