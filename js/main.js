$(function () {
  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.89375 0.24375C1.74375 0.09375 1.5375 0 1.3125 0C1.0875 0 0.9 0.09375 0.73125 0.24375L0.24375 0.73125C-0.075 1.05 -0.075 1.575 0.24375 1.89375L5.85 7.5L0.24375 13.1062C0.09375 13.2562 0 13.4625 0 13.6875C0 13.9125 0.09375 14.1188 0.24375 14.2688L0.73125 14.7562C0.88125 14.9062 1.0875 15 1.3125 15C1.5375 15 1.74375 14.9062 1.89375 14.7562L8.56875 8.08125C8.71875 7.93125 8.8125 7.725 8.8125 7.5C8.8125 7.275 8.71875 7.06875 8.56875 6.91875L1.89375 0.24375Z" fill="#FF715B"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.89375 0.24375C1.74375 0.09375 1.5375 0 1.3125 0C1.0875 0 0.9 0.09375 0.73125 0.24375L0.24375 0.73125C-0.075 1.05 -0.075 1.575 0.24375 1.89375L5.85 7.5L0.24375 13.1062C0.09375 13.2562 0 13.4625 0 13.6875C0 13.9125 0.09375 14.1188 0.24375 14.2688L0.73125 14.7562C0.88125 14.9062 1.0875 15 1.3125 15C1.5375 15 1.74375 14.9062 1.89375 14.7562L8.56875 8.08125C8.71875 7.93125 8.8125 7.725 8.8125 7.5C8.8125 7.275 8.71875 7.06875 8.56875 6.91875L1.89375 0.24375Z"/></svg></button>',
    fade: true
  });

  $(function () {
    $('input, select').styler();
  });

  $('.member__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".menu a, .logo, .footer__links, .top-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
});