<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

class BlogController extends Controller{

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

        $query = (new Query())->setContentType('blogPost');
        $entries = $this->client->getEntries($query);

        $converted_title = strtolower(
            preg_replace('/ |:/', '-', $entries[0]->getTitle())
        );

        return view('pages.blog', [
            'posts' => $entries,
            'featured_post' => $entries[0],
            'featured_title' => $converted_title,
        ]);
    }
}