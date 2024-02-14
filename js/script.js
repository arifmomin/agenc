// =========================banner slider start========================
$('#banner_part').slick({
    autoplay:true,
    dots: true,
    infinite: true,
    prevArrow:false,
    nextArrow:false,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
//   =================================counter part=======================
$('.counter_hero').counterUp({
    delay: 10,
    time: 1000
});

// ========================review part========================
$('.review_row').slick({
    centerMode:true,
    centerPadding:10,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
  });