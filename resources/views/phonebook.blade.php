<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Phonebook</title>
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
        {{-- <link rel="stylesheet" href="{{ asset('/css/app.css') }}"> --}}
    </head>
    <body>
        <div id="app">
            <Myheader></Myheader>
            <div class='container '>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
            <router-view></router-view>
             
            </div>
            <Myfooter></Myfooter>
        </div>
        <script src="{{ asset('/js/app.js') }}" charset="utf-8"></script>

{{-- <script src="{{ asset('/js/app.js') }}" charset="utf-8"></script> --}}
    </body>
</html>
