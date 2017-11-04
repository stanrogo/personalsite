<?php

Route::get('/', [
    'as' => 'home',
    'uses' => 'HomeController@showIndex',
]);


Route::get('/work', [
    'as' => 'work',
    'uses' => 'HomeController@showWork',
]);

Route::get('/portfolio', [
    'as' => 'portfolio',
    'uses' => 'HomeController@showPortfolio',
]);


Route::get('/blog', [
    'as' => 'blog',
    'uses' => 'HomeController@showPosts',
]);

Route::get('/blog/{id}/{postName}', [
    'as' => 'post',
    'uses' => 'HomeController@showPost',
]);

