<nav id="nav-bar">

    <div class="title-wrapper">
        <img class="logo" :src="constructImageUrl('homescreen192.png')">
        <a class="title">
            STANROGO
        </a>

        <button class="hamburger"></button>
    </div>

    <ul class="nav-links grid-container" >
        <li v-for="link in links" class="nav-link">
            <a class="nav-link-inner" >
                hello
            </a>
        </li>
    </ul>
</nav>