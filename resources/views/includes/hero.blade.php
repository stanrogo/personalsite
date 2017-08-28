<section id="hero" class="grid-container">
    <h1 class="hero-heading hero-title">
        I'm <strong>{{$introduction->getName()}}</strong>
    </h1>
    <h2 class="hero-heading hero-subtitle">
        {{$introduction->getProfession()}}, {{$introduction->getLocation()}}
    </h2>
    <a href="{{$cv->getFile()->getUrl()}}" target="_blank"
       class="button button--resume-download button--resume-download-mobile">
        Download My Resume!
    </a>
    <div class="intro-wrapper">
        {{\Illuminate\Mail\Markdown::parse($introduction->getDescription())}}
    </div>
    <a href="{{$cv->getFile()->getUrl()}}" target="_blank"
       class="button button--resume-download button--resume-download-desktop">
        Download My Resume!
    </a>
</section>
