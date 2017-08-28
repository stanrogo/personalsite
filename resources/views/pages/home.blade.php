@extends('default')

@section('head')
    <link async rel="stylesheet" type="text/css" href="{{asset('css/home.css')}}">
@endsection

@section('page-template')

    <div class="background background--image"></div>
    <div class="background background--overlay"></div>

    @include('includes.hero')

@endsection