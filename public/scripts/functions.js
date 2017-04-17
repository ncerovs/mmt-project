$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    $(window).on('scroll', function() {
        if ( $(window).scrollTop() > 5 ) {
          $('.main-nav').addClass('nav-fixed');
        }
        if ( $(window).scrollTop() < 7 ) {
          $('.main-nav').removeClass('nav-fixed');
        }
    });

    var position = 25;
    $('.arrow-next').on('click', function() {
      $('.slider-container').css('transform', "translate3D(-" + position + "%, 0, 0)");
      $('.slider-container').attr('data-position', position);
      position +=25;

      if ( position > 75 ) {
        position = 0;
      }
    });

    $('.arrow-prev').on('click', function() {
      var currentPosition = $('.slider-container').attr('data-position');
      if ( currentPosition == 0 ) {
        $('.slider-container').css('transform', "translate3D(-" + 75 + "%, 0, 0)");
        $('.slider-container').attr('data-position', 75);
      } else {
        var pos = currentPosition - 25;
        $('.slider-container').css('transform', "translate3D(-" + pos + "%, 0, 0)");
        $('.slider-container').attr('data-position', pos);
        pos += 25;
      }
    });



    $(".myname").on('click', function(e) {
      e.preventDefault();
      $('.about-me').toggleClass('active');
    });

    lightbox.option({
      'maxWidth' : 1200,
      'fitImagesInViewport' : true,
      'positionFromTop' : 100
    })

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
