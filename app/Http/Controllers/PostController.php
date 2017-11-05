<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use Contentful\File\ImageOptions;
use Illuminate\Mail\Markdown;

class PostController extends Controller{

    private $client;

    /**
     * PostController constructor.
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

    public function showPortfolio(){

        $query = (new Query())->setContentType('portolfio');
        $entries = $this->client->getEntries($query);

        $items = [];

        foreach($entries as $entry){
            array_push($items, [
                'imageUrl' => $entry->getImage()->getFile()->GetUrl(),
                'title' => $entry->getTitle(),
                'type' => $entry->getType(),
                'description' => (string) Markdown::parse($entry->getDescription())
            ]);
        }

        return view('pages.portfolio', [
            'entries' => $items
        ]);
    }
}