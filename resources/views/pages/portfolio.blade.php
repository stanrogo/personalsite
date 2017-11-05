@extends('default')

@section('head')
    <link rel="stylesheet" type="text/css" href="{{asset('css/portfolio.css')}}">
@endsection

@section('page-template')

    <div id="Portfolio" class="grid-container">

        <section class="PortfolioExplanation">
            <h1 class="section-heading">@lang('portfolio.dive_in')</h1>
            <p>@lang('portfolio.description_1')</p>
            <p>@lang('portfolio.description_2')</p>
            <hr class="hr">
        </section>

        <!-- launch new vue components -->
        <div id="PortfolioSpotlightContainer">

            @foreach($entries as $entry)
                <section class="PortfolioSpotlight">
                    <img class="PortfolioImage" src="{{$entry['imageUrl']}}">
                    <div class="PortfolioSpotlightTextContent">
                        <h1 class="PortfolioSpotlightHeading">
                            {{$entry['title']}} -
                            {{$entry['type']}}
                        </h1>
                        <div>{!! $entry['description'] !!}</div>
                    </div>
                </section>
                <hr class="hr">
            @endforeach

        </div>
    </div>

@endsection