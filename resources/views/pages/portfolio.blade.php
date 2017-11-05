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
            <hr>
        </section>

        <!-- launch new vue components -->

        @foreach($entries as $entry)
            <portfolio-item v-bind:portfolio-item='{!! json_encode($entry) !!}'></portfolio-item>
        @endforeach

        <portfolio-spotlight v-bind:portfolio-items=`{!! json_encode($entries) !!}`></portfolio-spotlight>

    </div>

@endsection

@section('footer-scripts')
    <script src="{{asset('js/portfolio.js')}}" type="application/javascript"></script>
@endsection