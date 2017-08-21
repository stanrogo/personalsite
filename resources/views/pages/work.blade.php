@extends('default')

@section('page-template')

    <div id="work">
        <div class="grid-container">
            <h1 class="section-heading">Work</h1>

            @foreach($work as $job)

                <section class="work-card">

                    <div class="work--content">
                        <div class="work-dates">
                            {{
                                strftime(
                                    "%B %Y",
                                    $job->getStart()->getTimestamp()
                                )
                            }}
                            -

                            @if($job->getEnd())
                                {{
                                    strftime(
                                        "%B %Y",
                                        $job->getEnd()->getTimestamp()
                                    )
                                }}
                            @else
                                present
                            @endif


                        </div>
                        <h1 class="work-company">{{$job->getCompany()}}</h1>
                        <h2 class="work-position">{{$job->getRole()}}</h2>
                        {{\Illuminate\Mail\Markdown::parse($job->getDescription())}}

                        @if($job->getPhoto())

                        <figure class="work--figure">
                            <img class="work--image" src="{{$job->getPhoto()->getFile()->getUrl()}}">
                        </figure>

                        @endif
                    </div>
                </section>

            @endforeach
        </div>
    </div>

@endsection