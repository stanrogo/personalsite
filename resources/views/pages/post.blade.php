@extends('default')

@section('head')
    <link async rel="stylesheet" type="text/css" href="{{asset('css/post.css')}}">
@endsection

@section('page-template')

    <article id="post">
        <div class="cover-wrapper">
            <img class="cover" src="{{$post->getCoverImage()->getFile()->getUrl()}}">
            <div class="cover--overlay"></div>
            <div class="cover--title">
                <h1>{{$post->getTitle()}}</h1>
                <h2>By Stanley Clark</h2>
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