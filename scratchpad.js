// for navbar to fade on scroll

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);
