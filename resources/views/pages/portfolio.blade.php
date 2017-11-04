@extends('default')

@section('head')
    <link rel="stylesheet" type="text/css" href="{{asset('css/portfolio.css')}}">
@endsection

@section('page-template')

    <div id="Portfolio" class="grid-container">

        <section class="PortfolioExplanation">
            <h1 class="section-heading">Dive in to my coding projects</h1>
            <p>
                This portfolio features most of the work that I do in my spare
                time, as well as at university. It is therefore a collection
                of simple single page apps, dummy websites, blogs and in general
                cool things that I have built based mostly on tutorials e.g.
                build a clock using JavaScript.
            </p>

            <p>
                Throughout my time at University I hope to grow this section
                so that I can showcase the achievements that I make during my
                studies, and I also hope to be able to upload any presentation
                material that I produce for a few talks that I have done and
                include them here as part of the portfolio.
            </p>
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