<script>
    if(navigator.serviceWorker){

        navigator.serviceWorker.register('{{asset('sw.js')}}');
    }
</script>