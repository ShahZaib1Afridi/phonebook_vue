<?php


Route::get('/', function () {
    return view('phonebook');
});

//vue router
Route::get('/{name}', function() {
    return redirect('/');
})->where('name','[A-Za-z]+');
