# My Personal Website
This is mainly simply a collection of hints and tips for my own personal use.
It also lists the way things are meant to be done, and why they have been done
in that way.

## Quick Start
First, install the prerequisites which are:
* Composer
* PHP with the following extensions enabled:
    * php_mbstring.dll
* Node JS
* Add these [Curl Certificates](https://curl.haxx.se/ca/cacert.pem) to php.ini

If laravel has never been used on this system before, run:
```
composer global require "laravel/installer"
```

This will allow you to be able to create new laravel projects and edit
some settings of the existing one.

Now we can just serve the application using php's inbuilt server.
We can also run the npm script to watch th Vue JS application changes.

```
composer install
npm install
php artisan serve
npm start
```
