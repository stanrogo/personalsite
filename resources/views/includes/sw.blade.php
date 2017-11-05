<script>
    if(navigator.serviceWorker){

        navigator.serviceWorker.register('{{asset('sw.js')}}')
            .then(function(registration) {
                registration.update();
            });
    }
</script>