@extends('default')

@section('head')
    <link rel="stylesheet" type="text/css" href="{{asset('css/work.css')}}">
@endsection

@section('page-template')
    <div id="work">
        <div class="grid-container">

            <div class="WorkTimeLineGraphic"></div>
            <h1 class="section-heading">@lang('work.currently_here')</h1>

            @foreach($work as $job)
                @if(!$job->getEnd())
                    @include('includes.job')
                @endif
            @endforeach

            <hr>

            <h1 class="section-heading">@lang('work.used_to_be_here')</h1>

            @foreach($work as $job)
                @if($job->getEnd())
                    @include('includes.job')
                @endif
            @endforeach
        </div>
    </div>
@endsection