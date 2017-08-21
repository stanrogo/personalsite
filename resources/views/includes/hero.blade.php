<section id="hero" class="grid-container">
    <h1 class="hero-heading hero-title">
        I'm <strong>{{$introduction->getName()}}</strong>
    </h1>
    <h2 class="hero-heading hero-subtitle">
        {{$introduction->getProfession()}}, {{$introduction->getLocation()}}
    </h2>
    <button class="button button--resume-download button--resume-download-mobile">
        Download My Resume!
    </button>
    <div class="intro-wrapper">
        {{\Illuminate\Mail\Markdown::parse($introduction->getDescription())}}
    </div>
    <button class="button button--resume-download button--resume-download-desktop">
        Download My Resume!
    </button>
</section>
