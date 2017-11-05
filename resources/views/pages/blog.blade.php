@extends('default')

@section('head')
    <link rel="stylesheet" type="text/css" href="{{asset('css/blog.css')}}">
@endsection

@section('page-template')
    <div id="feed">
        <section class="featured-post">
            <figure class="card-figure">
                <img class="card-image"
                     src="{{$featured_post->getCoverImage()->getFile()->getUrl()}}"
                >
            </figure>
            <div class="featured-post--heading">
                <h2 class="featured-article-text">@lang('blog.featured_article')</h2>
                <h1 class="featured-article-name">
                    <span>{{$featured_post->getTitle()}}</span>
                </h1>
                <a class="button button--read-more"
                   href="{{route('post', [$featured_post->getId(), $featured_title])}}"
                >
                    @lang('blog.read_more')
                </a>
            </div>
        </section>

        <section class="grid-container text-left">
            <div class="BlogIntro">
                <h1>@lang('blog.collection_stories')</h1>
                <p>@lang('blog.introduction')</p>
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
                                    {{strftime("%A, %B %d, %Y", $post->getDate()->getTimestamp())}}
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

