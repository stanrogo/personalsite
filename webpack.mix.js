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
    .js('resources/assets/js/portfolio.js', 'public/js')
    .sass('resources/assets/sass/main.scss', 'public/css')
    .sass('resources/assets/sass/home.scss', 'public/css/home_temp.css')
    .sass('resources/assets/sass/work.scss', 'public/css/work_temp.css')
    .sass('resources/assets/sass/portfolio.scss', 'public/css/portfolio_temp.css')
    .sass('resources/assets/sass/blog.scss', 'public/css/blog_temp.css')
    .sass('resources/assets/sass/post.scss', 'public/css/post_temp.css')
    .combine(['public/css/main.css', 'public/css/home_temp.css'], 'public/css/home.css')
    .combine(['public/css/main.css', 'public/css/work_temp.css'], 'public/css/work.css')
    .combine(['public/css/main.css', 'public/css/portfolio_temp.css'], 'public/css/portfolio.css')
    .combine(['public/css/main.css', 'public/css/blog_temp.css'], 'public/css/blog.css')
    .combine(['public/css/main.css', 'public/css/post_temp.css'], 'public/css/post.css');


