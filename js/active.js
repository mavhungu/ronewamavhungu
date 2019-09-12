 $(document).ready(function () {

     $('.carousel-inner').carousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 5,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             1400: {
                 items: 5,
                 nav: true,
                 loop: true
             },
             991: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             768: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 2,
                 nav: true,
                 loop: true
             }
         },
     });


     $('.fb').animationCounter({
         start: 0,
         end: 15000,
         step: 2,
         delay: 300
     });
     $('.bike').animationCounter({
         start: 0,
         end: 7500,
         step: 1,
         delay: 300,
     });
     $('.code').animationCounter({
         start: 0,
         end: 22500,
         step: 3,
         delay: 300,
     });
     $('.coffee').animationCounter({
         start: 0,
         end: 30000,
         step: 4,
         delay: 300,
     });
 });