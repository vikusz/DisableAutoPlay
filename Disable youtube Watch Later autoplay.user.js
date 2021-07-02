// ==UserScript==
// @name         Disable YT Watch Later autoplay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http*youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // alert('Test');
})();


if (/\list=WL\b/.test(location.search) && /watch\?/.test(window.location.href)) {
    // We're on a page of a partucular video. Need to remove WL related things from the URL and redirect the page.
    var link = document.URL.replace("list=WL&index=", "blablabla=");
    window.location.href = link;
    // alert('test');
}


if (window.location.href.indexOf("playlist?list=WL") > -1) {
    // We're on the Watch Later playlist page. Need to remove WL related things from the href links.

    // link examples:
    // https://www.youtube.com/watch?v=OkmNXy7er84&list=WL&index=1&t=1s
    // https://www.youtube.com/watch?v=2tdiKTSdE9Y&list=WL&index=2
    $("a").each(function() {
        var url = this.href;
        url = url.replace("&list=WL", "");
        //url = url.replace("&index=*", "");
        this.href = url;
    });
    //alert('Should be done');
}