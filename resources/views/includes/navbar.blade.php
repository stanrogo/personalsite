<nav id="nav-bar">

    <div class="title-wrapper">
        <img class="logo" src="{{asset('icons/favicon-32x32.png')}}">
        <a class="title">
            STANROGO
        </a>

        <button class="lnr lnr-menu hamburger js-toggleNav"></button>
    </div>

    <ul class="nav-links grid-container js-navLinks is-collapsed">

        @foreach(Route::getRoutes() as $route_instance)

            @if(strpos($route_instance->getName(), 'post') !== 0)

                <li class="nav-link">
                    <a class="nav-link-inner {{ substr(Request::path(), 0, strlen($route_instance->uri())) === $route_instance->uri() ? 'is-active' : '' }}"
                       href="{{route($route_instance->getName())}}">
                        {{$route_instance->getName()}}
                    </a>
                </li>
            @endif
        @endforeach
    </ul>
</nav>