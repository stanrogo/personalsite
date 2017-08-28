<!DOCTYPE html>
<html lang="en">
<head>
   @include('includes.head')
</head>
<body>
<div id="app">

    @include('includes.navbar')

    @yield('page-template')

    @include('includes.footer')

</div>

<script src="{{asset('js/app.js')}}" type="application/javascript"></script>

@include('includes.sw')

@include('includes.fonts')

</body>
</html>
