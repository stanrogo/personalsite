<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;
use Illuminate\Mail\Markdown;

class PortfolioController extends Controller{

    private $client;

    /**
     * PortfolioController constructor.
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