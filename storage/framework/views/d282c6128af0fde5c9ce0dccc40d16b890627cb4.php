<!DOCTYPE html>
<html lang="en">
<head>
    <title>StanRogo - Thoughts, Events and Other Things by Stanley Clark</title>

    <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16">

    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Thoughts, events and other things from a computer science student in Eindhoven.">

    <!-- MANIFEST -->
    <link rel="manifest" href="./manifest.json">

    <!-- ADD TO HOMESCREEN SAFARI ON IOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="StanRogo">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg">

    <meta name="application-name" content="StanRogo">
    <meta name="theme-color" content="#bcc9be">

    <!-- ADD TO HOMESCREEN WINDOWS -->
    <meta name="msapplicatoin-TileImage" content="/icons/mstile-150x150.png">
    <meta name="msapplicatoin-TileColor" content="#bcc9be">

    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/app.css')); ?>">
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
</head>
<body>
<div id="app">
    <div class="background background--image"></div>
    <div class="background background--overlay <?php echo e(Request::path() != '/' ? 'full-opacity' : ''); ?>"></div>

    <?php echo $__env->make('includes.navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

    <?php echo $__env->yieldContent('page-template'); ?>

    <?php echo $__env->make('includes.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</div>

<script src="<?php echo e(URL::asset('js/app.js')); ?>" type="application/javascript"></script>


<script>
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            console.log('[serviceWorker]: registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            console.log('[serviceWorker]: registration failed', err);
        });
    }
</script>

<script>
    WebFontConfig = {
        google: {
            families: ['Ubuntu']
        }
    };

    (function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
    })(document);
</script>
</body>
</html>