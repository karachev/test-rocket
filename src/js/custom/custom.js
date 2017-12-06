	/*----------------------------------------
	 FOR SVG SPRITE
	 ----------------------------------------*/
	svg4everybody({});

	/*----------------------------------------
	 TRANSITION SCROLL
	 ----------------------------------------*/
	$('.scroll').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

  /*----------------------------------------
   SLIDERS
   ----------------------------------------*/
  $(document).on('ready', function() {
    $(".features").slick({
      dots: true,
      lazyLoad: 'ondemand',
      infinite: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  });

  $(document).on('ready', function() {
    $(".info-slider-img").slick({
      dots: true,
      lazyLoad: 'ondemand',
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  $(document).on('ready', function() {
    $('.category-color-slider').slick({
      dots: false,
      arrows: true,
      lazyLoad: 'ondemand',
      infinite: false,
      slidesToShow: 9,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });

  // Слайдер с одной стрелкой и точками
  $(document).on('ready', function() {
    $('#slider-dots-nextArrow').slick({
      dots: true,
      // autoplay: true,
      asNavFor: '#slider-nav-nextArrow'
    });
    $('#slider-nav-nextArrow').slick({
      prevArrow: false,
      nextArrow: $('#slider-nextArrow'),
      asNavFor: '#slider-dots-nextArrow',
    });

  });
  // Слайдер с точками и без стрелок
  $(document).on('ready', function() {
    $('.slider-dots').slick({
      dots: true,
      arrows: false
    });
  });

  $(document).on('ready', function() {
    $(".door-slider").slick({
      dots: true,
      lazyLoad: 'ondemand',
      infinite: false,
      arrows: false,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            // centerMode: true,
            // slidesToShow: 4,
            // rows: 4,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  });

  $(document).on('ready', function() {
    $('.portfolio-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      fade: true,
      asNavFor: '.portfolio-nav'
    });
    $('.portfolio-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.portfolio-for',
      dots: false,
      arrows: true,
      infinite: false,
      focusOnSelect: true,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            fade: false
          }
        }
      ]
    });
  });

  $(document).on('ready', function() {
    $('.product-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: false,
      fade: true,
      asNavFor: '.product-nav',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true
          }
        }
      ]
    });

    $('.product-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-for',
      dots: false,
      arrows: true,
      infinite: false,
      focusOnSelect: true,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            fade: false
          }
        }
      ]
    });
  });

  $(document).on('ready', function() {
    $(".reviews-list").slick({
      dots: true,
      lazyLoad: 'ondemand',
      infinite: false,
      arrows: false,
      rows: 2,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            rows: 1,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            rows: 1,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            rows: 1,
            dots: true
          }
        }
      ]
    });
  });

  $(document).ready(function () {
    var swiper = new Swiper('.events-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        clickable: true,
        draggable: true
      },
      slidesPerView: 3,
      spaceBetween: 20,
      width: 1263,
      breakpoints: {
        1279:{
          slidesPerView: 2,
          width: 625
        },
      }
    });
  });

  $(document).ready(function () {
    var swiper = new Swiper('.recommend-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        clickable: true,
        draggable: true
      },
      slidesPerView: 4,
      initialSlide: 2,
      spaceBetween: 20,
      breakpoints: {
        767:{
          slidesPerView: 3,
          centeredSlides: true,
        },
        979:{
          slidesPerView: 3,
          centeredSlides: true,
          width: 768
        },
        1599:{
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 15,
        },
      }
    });
  });

  $(document).ready(function () {
    var swiper = new Swiper('.doors-slider', {
      wrapperClass: 'doors-wrapper',
      slideClass: 'doors-item',
      scrollbar: {
        el: '.doors-scrollbar',
        hide: false,
        clickable: true,
        draggable: true
      },
      slidesPerView: 9,
      spaceBetween: 13,
      breakpoints: {
        767:{
          slidesPerView: 4,
          spaceBetween: 19,
        },
        979:{
          initialSlide: 1,
          slidesPerView: 4,
          spaceBetween: 21,
        },
        1279:{
          slidesPerView: 4,
          spaceBetween: 73,
        },
      }
    });
  });

  /*----------------------------------------
   ADD NUMBER OF SLIDES
   ----------------------------------------*/
    var $status = $('.doors-slider-count');
    var $slickElement = $('#slider-dots-nextArrow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.empty();
        $status.append('<b>' + i + '</b>' + '/ ' + slick.slideCount);
    });

    var $status1 = $('.facts-count');
    var $slickElement1 = $('.facts-wrapper');

    $slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status1.empty();
        $status1.append('<b>' + i + '</b>' + '/ ' + slick.slideCount);
    });

  /*----------------------------------------
   BUTTONS
   ----------------------------------------*/
  $('.content-nav__btn').on("click", function(){
    $('.content-nav-list').toggleClass('hidden-block');
    $('.content-nav__btn').toggleClass('content-nav__btn--active');
  });

  $('.buy__show-btn').on("click", function(){
    $('.buy-wrapper').toggleClass('buy-wrapper-hidden');
    $('.buy__show-btn').toggleClass('buy__show-btn--close');
  });

  $('#btnPortfolioMore').on("click", function(){
    if ($('.portfolio-text').hasClass('portfolio-text--show')) {
      $('#btnPortfolioMore').text("Читать полностью")
    } else {
      $('#btnPortfolioMore').text("Скрыть");
    }
    $('#textPortfolioMore').toggleClass('portfolio-text--show');
  });

  /*----------------------------------------
   INDUSRTYS CIRCLE
   ----------------------------------------*/
  var indTab = $('.collections-tab-item'),
      indItem = $('.collections-circle-item');

  indTab.on('click', function (event) {
    event.preventDefault();
    var href = $(this).children().attr('href');

    if ($(this).hasClass('collections-tab-item--active')) {
      indItem.removeClass('collections-circle-item--active');
      indTab.removeClass('collections-tab-item--active');
    } else {
      indItem.removeClass('collections-circle-item--active');
      indTab.removeClass('collections-tab-item--active');
      $(this).toggleClass('collections-tab-item--active');
      $(href + ".collections-circle-item").toggleClass('collections-circle-item--active');
    }
  });

  /*----------------------------------------
   MAPS TAB
   ----------------------------------------*/
  var mapTab = $('.content-nav-item'),
      mapOffice = $('.content-office'),
      mapItem = $('.content-desc-item');

  mapTab.on('click', function (event) {
    event.preventDefault();
    var href = $(this).children().attr('href');
    mapItem.removeClass('content-desc-item--active');
    mapTab.removeClass('content-nav-item--active');
    mapOffice.addClass('hidden-block');
    $(this).addClass('content-nav-item--active');
    $(href + ".content-desc-item").addClass('content-desc-item--active');
    $(href + ".content-office").removeClass('hidden-block');
    $('.content-nav__btn').text($(this).text());
    $('.content-nav__btn').removeClass('content-nav__btn--active');
    $('.content-nav-list').addClass('hidden-block');
  });

  /*----------------------------------------
   FANCYBOX GALLERY
   ----------------------------------------*/
  $(document).ready(function() {
    initFancyGallery('.portfolio-gallery-item a');
    initFancyGallery('.category-feature-item--fittings a');
    initFancyGallery('.category-feature-item--moldings a');
    function initFancyGallery(block) {
      $(block).fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        scrolling: 'hidden',
        padding: 50,
        closeClick: false,
        tpl: {
          closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><span class="icon icon-close">Закрыть</span></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"></a>'
        },
        helpers: {
          title: {
            type: 'inside',
            position: 'top'
          },
          overlay: {
            locked: true,
            css: {
              'background': 'rgba(94, 94, 94, .9)'
            }
          },
        }
      });
    }
  });

  /*----------------------------------------
    FANCYBOX GALLERY GRID
  ----------------------------------------*/
  $('#portfolio-gallery').packery({
    // options
    itemSelector: '.portfolio-gallery-item',
    gutter: 20
  });

  /*----------------------------------------
   FANCYBOX VIDEO
   ----------------------------------------*/
  $(document).ready(function() {
    $('.about-video-player').fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      helpers : {
          media : {}
      }
    });
  });

  /*----------------------------------------
   CATEGORY-DOORS MENUS
   ----------------------------------------*/
  $('.category-feature__title').on("click", function(){
    $(this).parent().toggleClass('category-feature--show');
  });
