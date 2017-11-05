<?php

Route::get('/', [
    'as' => 'home',
    'uses' => 'HomeController@showIndex',
]);


Route::get('/work', [
    'as' => 'work',
    'uses' => 'WorkController@showIndex',
]);

Route::get('/portfolio', [
    'as' => 'portfolio',
    'uses' => 'PortfolioController@showIndex',
]);


Route::get('/blog', [
    'as' => 'blog',
    'uses' => 'BlogController@showIndex',
]);

Route::get('/blog/{id}/{postName}', [
    'as' => 'post',
    'uses' => 'PostController@showIndex',
]);

