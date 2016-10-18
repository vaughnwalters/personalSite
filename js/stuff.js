"use strict";

let sourceSwap = function () {
    let $this = $(this);
    let newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
    console.log("hee hee you tickled me!!!");
}

$(function () {
    $('img.hatBro').hover(sourceSwap, sourceSwap);
});
