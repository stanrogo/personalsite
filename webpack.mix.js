let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/main.scss', 'public/css')
    .sass('resources/assets/sass/home.scss', 'public/css')
    .sass('resources/assets/sass/work.scss', 'public/css')
    .sass('resources/assets/sass/portfolio.scss', 'public/css')
    .sass('resources/assets/sass/blog.scss', 'public/css')
    .sass('resources/assets/sass/post.scss', 'public/css')
    .combine(['public/css/main.css', 'public/css/home.css'], 'public/css/home.css')
    .combine(['public/css/main.css', 'public/css/work.css'], 'public/css/work.css')
    .combine(['public/css/main.css', 'public/css/portfolio.css'], 'public/css/portfolio.css')
    .combine(['public/css/main.css', 'public/css/blog.css'], 'public/css/blog.css')
    .combine(['public/css/main.css', 'public/css/post.css'], 'public/css/post.css');


