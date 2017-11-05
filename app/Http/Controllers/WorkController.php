<?php


namespace App\Http\Controllers;

use Contentful\Delivery\Client as DeliveryClient;
use Contentful\Delivery\Query;

class WorkController extends Controller{

    private $client;

    /**
     * WorkController constructor.
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
            ->setContentType('work')
            ->where('order', '-fields.start');

        $entries = $this->client->getEntries($query);

        return view('pages.work', [
            'work' => $entries
        ]);
    }
}