/*----------------------------------------
   MODAL MENU
   ----------------------------------------*/

  $('#modal-menu__close').click(function(e){
    e.preventDefault();
    closeModal('.modal-menu', 'modal-menu--show');
  });

  $('#header-category').click(function(e){
    e.preventDefault();
    openModal('.modal-menu', 'modal-menu--show');
  });

  $('#footer-menu__open').click(function(e){
    e.preventDefault();
    openModal('.modal-menu', 'modal-menu--show');
  });

  $('#btnModalFeedback').click(function(e){
    e.preventDefault();
    openModal('.modal-feedback', 'modal-feedback--show');
  });

  $('#btnCloseModalFeedback').click(function(e){
    e.preventDefault();
    closeModal('.modal-feedback', 'modal-feedback--show');
  });

  function openModal(block, activeBlock) {
    $('body').css('overflow', 'hidden');
    $(block).addClass(activeBlock);
    document.ontouchmove = function(e){ e.preventDefault(); }
    $(document).keydown(function(evt) {
      if( evt.keyCode === 27 ) {
        $(block).removeClass(activeBlock);
        $('body').css('overflow', 'auto');
        return false;
      }
    });
  }

  function closeModal(block, activeBlock) {
    $(block).removeClass(activeBlock);
    $('body').css('overflow', 'auto');
    document.ontouchmove = function(e){ return true; }
  }

  $('.menu-toggle').on("click", function(){
    $(this).next('.submenu').addClass('submenu--show');
  });

  $('.modal-menu__down').on("click", function(){
    $(this).parent('.submenu').removeClass('submenu--show');
  });

  $('.modal-submenu__close').on("click", function(){
    $(this).parent('.submenu').removeClass('submenu--show');
    closeModal('.modal-menu', 'modal-menu--show');
    // $('.modal-menu').removeClass('modal-menu--show');
    // $('body').css('overflow', 'auto');
  });

  $('.modal-menu-shadow').on("click", function(){
    $('.submenu').removeClass('submenu--show');
    $('.modal-menu').removeClass('modal-menu--show');
    $('body').css('overflow', 'auto');
  });

  /*----------------------------------------
   MODAL PHONE
   ----------------------------------------*/
   $('.header-phones__btn').click(function(e){
    e.preventDefault();
    openModal('.modal-phone', 'modal-phone--show');
  });

  $('#modal-phone__close').click(function(e){
    e.preventDefault();
    closeModal('.modal-phone', 'modal-phone--show');
  });

    /*----------------------------------------
   TABS MAP HOME
   ----------------------------------------*/

  var tabs = $(".tabs"),
      tabsWrap = $(".tabs-wrap"),
      tabsLink = $(".tab-link"),
      tabsItem = $(".tab-item");
  /* TABS METHODS */
  var methodsTabs = {
    show : function( options ) {
      return this.each(function(){

        var tabsId = $(this).attr('id'),
            tabsLinkActive = $("[data-tab=" + tabsId + "]");

        tabs.find(tabsLinkActive).addClass('tab-link_active').siblings().removeClass('tab-link_active');

        $(this).parent().children('.tab-item').removeClass('tab-item_active');
        $(this).addClass('tab-item_active');
        //btn
        var textTab = tabsLinkActive.text();
        tabsLinkActive.closest('.tabs-wrap').children('.btn-tabs').text(textTab);

      });

    },
    hide : function( ) {

      return this.each(function(){
        tabsLink.removeClass('tab-link_active');
        tabsItem.removeClass('tab-item_active');
        tabsWrap.removeClass('tabs-wrap_active');
      })
    }
  };

  /* TABS FUNCTIONS */
  $.fn.gpTab = function( method ) {

    if ( methodsTabs[method] ) {
      return methodsTabs[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methodsTabs.show.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует' );
    }
  };

  /* CLICK FOR OPEN */
  tabsLink.on('click', function(eventLink) {
    eventLink.preventDefault();
    var tabsId = $(this).attr('data-tab');
    $("#" + tabsId).gpTab();

    if(tabsWrap.hasClass('tabs-wrap_active')){
      tabsWrap.removeClass('tabs-wrap_active');
    }
  });