@extends('default')

@section('head')
    <link async rel="stylesheet" type="text/css" href="{{asset('css/portfolio.css')}}">
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
        <section class="PortfolioCard">
            <img class="PortfolioImage" src="/public/images/carlablog.png">
            <div class="overlay"></div>
            <div class="TextContainer Hexagon">
                <h1 class="PortfolioItemText">
                    Carla Unterwegs
                </h1>
                <h2 class="PortfolioItemText">Blog</h2>
            </div>
        </section>
        <section class="PortfolioCard">
            <img class="PortfolioImage" src="/public/images/capitalism.png">
            <div class="overlay"></div>
            <div class="TextContainer Hexagon">
                <h1 class="PortfolioItemText">
                    Rice Of Capitalism
                </h1>
                <h2 class="PortfolioItemText">Dummy Website</h2>
            </div>
        </section>
        <section class="PortfolioSpotlight">

            <img class="PortfolioImage" src="/public/images/carlablog.png">
            <div class="PortfolioSpotlightTextContent">
                <h1 class="PortfolioSpotlightHeading">Carla Unterwegs - Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus eget elit ut ullamcorper. Etiam vel vestibulum purus. Ut gravida venenatis dignissim. Nam tristique maximus tortor, pretium bibendum augue pretium eget. Curabitur bibendum scelerisque justo eu sodales. Sed pharetra, nisi tincidunt finibus maximus, augue diam faucibus sem, nec euismod ex mauris a dui. Etiam vehicula leo non metus faucibus facilisis.

                </p><p>   Vivamus nec ante vestibulum, facilisis leo euismod, sagittis metus. Praesent volutpat rhoncus elit. Aenean vitae tortor condimentum, vehicula enim ac, pretium justo. Vestibulum id tempor quam. Donec vehicula odio non massa congue fermentum. Aliquam sit amet vulputate massa. Cras maximus eget felis vel congue. Morbi faucibus porta faucibus. Praesent mollis hendrerit mauris id efficitur. Sed magna odio, imperdiet posuere enim quis, vestibulum viverra mauris. Nullam id lectus pretium, ultrices ex sed, consectetur erat. Ut in ullamcorper mi, id fermentum ipsum.

                </p> </div>

            <hr>

        </section>
    </div>


@endsection