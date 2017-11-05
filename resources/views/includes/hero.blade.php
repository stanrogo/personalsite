<section id="hero" class="grid-container">
    <h1 class="hero-heading hero-title">
        @lang('home.i_am') <strong>@lang('home.name')</strong>
    </h1>
    <h2 class="hero-heading hero-subtitle">
        @lang('home.subtitle')
    </h2>
    <a href="{{$cv->getFile()->getUrl()}}" target="_blank"
       class="button button--resume-download button--resume-download-mobile">
        @lang('home.download_resume')
    </a>
    <div class="intro-wrapper">
        {{\Illuminate\Mail\Markdown::parse($introduction->getDescription())}}
    </div>
    <a href="{{$cv->getFile()->getUrl()}}" target="_blank"
       class="button button--resume-download button--resume-download-desktop">
        @lang('home.download_resume')
    </a>
</section>
