<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use Contentful\File\ImageOptions;

class HomeController extends Controller{

    private $client;

    /**
     * BlogController constructor.
     *
     * @param DeliveryClient $client - the contentful delivery client
     */

    public function __construct(DeliveryClient $client){

        $this->client = $client;
    }

    /**
     * Retrieve a view containing every piece of available content
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */

    public function showIndex(){

        $entry = $this->client->getEntry('3byYBY4ItOeKGgIYEu6IUs');
        $cv = $this->client->getAsset('5Ub1HnzdQsaks0QaWy20Y6');

        return view('pages.home', [
            'introduction' => $entry,
            'cv' => $cv
        ]);
    }

    public function showWork(){

        $query = (new Query())
            ->setContentType('work')
            ->where('order', '-fields.start');
        $entries = $this->client->getEntries($query);

        return view('pages.work', [
            'work' => $entries
        ]);
    }

    public function showPosts(){

        $query = (new Query())->setContentType('blogPost');
        $entries = $this->client->getEntries($query);

        return view('pages.blog', [
            'posts' => $entries
        ]);
    }

    public function showPost($id){

        $query = (new Query())
            ->setContentType('blogPost')
            ->where('sys.id', $id);
        $entries = $this->client->getEntries($query);
        $entry = $entries[0];

        $options = (new ImageOptions())
            ->setHeight(400)
            ->setWidth(1920)
            ->setResizeFit('thumb');

        $image_url = $entry->getCoverImage()->getFile()->getUrl($options);

        return view('pages.post', [
            'post' => $entries[0],
            'cover_image' => $image_url
        ]);
    }
}