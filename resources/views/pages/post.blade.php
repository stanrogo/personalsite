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
                <h2><span>By Stanley Clark</span></h2>
            </div>
        </div>
        <a class="button" href="{{route('blog')}}"><span class="lnr lnr-arrow-left ArrowLeft"></span>Back</a>

        <div class="post-content grid-container">

            <div>
                {{\Illuminate\Mail\Markdown::parse($post->getContent())}}
            </div>
        </div>
    </article>
@endsection

@section('footer-scripts')
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
            onload="hljs.initHighlighting();"
    ></script>
@endsection