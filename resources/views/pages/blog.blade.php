@extends('default')

@section('head')
    <link async rel="stylesheet" type="text/css" href="{{asset('css/blog.css')}}">
@endsection

@section('page-template')

    <div id="feed">
        <section class="featured-post">
            <figure class="card-figure">
                <img class="card-image" src="{{$posts[0]->getCoverImage()->getFile()->getUrl()}}">
            </figure>
            <div class="featured-post--heading">
                <h2 class="featured-article-text">Featured Article</h2>
                <h1 class="featured-article-name"><span>{{$posts[0]->getTitle()}}</span></h1>
                <a class="button button--read-more" href="{{route('post', [$posts[0]->getId(), strtolower(preg_replace('/ |:/', '-', $posts[0]->getTitle()))])}}">Read more</a>
            </div>
        </section>

        <section class="grid-container text-left">
            <div class="BlogIntro">
                <h1>A Collection of Stories and Cool Things</h1>
                <p>
                    This is the crazy place where I write about cool things I do at university, at work and just in my spare time.
                    Don't think too much of what I write since mostly it's just a log of my daily activities, but I do try to keep
                    it at least somewhat interesting so check back about... once a week or so to see if I've got anything new!
                </p>
            </div>
        </section>

        <div class="grid-container">

            @foreach($posts as $post)

                <a class="post-container"
                   href="{{route('post', [$post->getId(), strtolower(preg_replace('/ |:/', '-', $post->getTitle()))])}}">

                    <section>
                        <div class="material-card">
                            <figure class="card-figure">

                                @if($post->getThumbnailImage())
                                    <img class="card-image"
                                         src="{{$post->getThumbnailImage()->getFile()->getUrl()}}"
                                    >
                                @else
                                    <img class="card-image"
                                         src="{{$post->getCoverImage()->getFile()->getUrl()}}"
                                    >
                                @endif
                            </figure>
                            <div class="post-heading">
                                <div class="quick-fact">

                                    <span class="lnr lnr-clock"></span>

                                    {{
                                        strftime(
                                            "%A, %B %d, %Y",
                                            $post->getDate()->getTimestamp()
                                        )
                                    }}
                                </div>
                                <div class="quick-fact">
                                    <span class="lnr lnr-tag"></span>

                                    @foreach($post->getTags() as $tag)

                                        <div class="tag">{{$tag}}@if ($loop->remaining > 0),&nbsp;@endif</div>

                                    @endforeach
                                </div>
                                <h1 class="PostTitle">{{$post->getTitle()}}</h1>
                            </div>
                        </div>
                    </section>
                </a>

            @endforeach
        </div>
    </div>

@endsection

