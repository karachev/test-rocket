var navMain = document.querySelector('.header-nav');
var navToggle = document.querySelector('.header__trigger');

navMain.classList.remove('header-nav--no-js');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('header-nav--closed')) {
        navMain.classList.remove('header-nav--closed');
        navToggle.classList.add('header__trigger--closed');
    } else {
        navMain.classList.add('header-nav--closed');
        navToggle.classList.remove('header__trigger--closed');
    }
});

