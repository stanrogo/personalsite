@extends('default')

@section('page-template')

    <div id="work">
        <div class="grid-container">

            <div class="WorkTimeLineGraphic"></div>

            <h1 class="section-heading">I'm currently here:</h1>

            @foreach($work as $job)

                @if(!$job->getEnd())

                    @include('includes.job')

                @endif

            @endforeach

            <hr>

            <h1 class="section-heading">I used to work here:</h1>

            @foreach($work as $job)

                @if($job->getEnd())

                    @include('includes.job')

                @endif

            @endforeach
        </div>
    </div>

@endsection