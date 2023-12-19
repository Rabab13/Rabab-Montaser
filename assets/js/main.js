(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    
    document.addEventListener("DOMContentLoaded", function () {
        const filterButtons = document.querySelectorAll(".filters a");
        const container = document.getElementById("container");
    
        filterButtons.forEach((button) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
    
                // Remove 'active' class from all buttons
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                // Add 'active' class to the clicked button
                this.classList.add("active");
    
                // Get the data-filter attribute value
                const filterValue = this.getAttribute("data-filter");
    
                // Loop through all items in the container
                const items = container.querySelectorAll(".item");
                items.forEach((item) => {
                    const itemFilter = item.getAttribute("data-filter");
    
                    // If the item matches the filter or the filter is "*", show it, otherwise hide it
                    if (filterValue === "*" || filterValue === itemFilter) {
                        item.style.display = "block";
                    
            
                    } else {
                        item.style.display = "none";
                    }
                });
    
                // Move the filtered items to the start of the container
                const visibleItems = container.querySelectorAll(".item[style='display: block;']");
                visibleItems.forEach((item) => {
                    container.appendChild(item);
                });
            });
        });
    });
    
   
    
    

    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
}(jQuery));