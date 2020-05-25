//MENU

$('ul.menu a[href^="#"').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 500);
      $('ul.menu a[href^="#"').css({
         'color': '#212121'
      });
      $(this).css({
         'color': '#004bee'
      });
      return false;
   });
   /* Выпадаю=щее меню */
   $('.menu-icon').click(function () {
      $('nav').slideToggle(500);
      $('ul.menu').css({
         'display': 'flex',
         'flex-direction': 'column'
      });
      if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
         $(this).html('<i class="fas fa-times"></i>');
      } else {
         $(this).html('<i class="fas fa-bars"></i>');
      }
   });

      $(window).scroll(function () {
      if ($(this).scrollTop() != 0)
         $('#toTop').fadeIn();
      else
         $('#toTop').fadeOut();
   });
   $('#toTop').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
   });

$('.button_header').on('click', function () {
   let b = 0;
   prompt("Сколько камер хотите купить?", b);
   alert("Вы купили" + n + " камер!");

})