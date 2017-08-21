@extends('default')

@section('page-template')

    <div id="feed">
        <section class="featured-post">
            <figure class="card-figure">
                <img class="card-image" src="{{$posts[0]->getCoverImage()->getFile()->getUrl()}}">
                <div class="overlay"></div>
            </figure>
            <div class="featured-post--heading">
                <h2 class="featured-article-text">Featured Article</h2>
                <h1 class="featured-article-name">{{$posts[0]->getTitle()}}</h1>
                <a class="button button--read-more" href="{{route('post', [$posts[0]->getId(), strtolower(preg_replace('/ |:/', '-', $posts[0]->getTitle()))])}}">Read more</a>
            </div>
        </section>

        <div class="grid-container">

            @foreach($posts as $post)

                <a href="{{route('post', [$post->getId(), strtolower(preg_replace('/ |:/', '-', $post->getTitle()))])}}">

                <section class="post-container js-goToPost" data-post-name="">
                    <div class="material-card">
                        <figure class="card-figure">

                            <img class="card-image" v-if="post.imageURL"
                                 src="{{$post->getCoverImage()->getFile()->getUrl()}}"
                            >
                        </figure>
                        <div class="post-heading">
                            <div class="quick-fact">
                                {{
                                    strftime(
                                        "%A, %B %d, %Y",
                                        $post->getDate()->getTimestamp()
                                    )
                                }}
                            </div>
                            <div class="quick-fact">

                                @foreach($post->getTags() as $tag)

                                    <div class="tag">{{$tag}}@if ($loop->remaining > 0),&nbsp;@endif</div>

                                @endforeach
                            </div>
                            <h1>{{$post->getTitle()}}</h1>
                        </div>
                    </div>
                </section>
                </a>

            @endforeach
        </div>
    </div>

@endsection

