//BUTTONS VARIABLES
var nextBtn = $('.next');
var prevBtn = $('.prev');

$(document).ready(function(){
  nextBtn.click(carouselNext);
  prevBtn.click(carouselPrev);
});


//ARROW RIGHT FUNCTION
function carouselNext(){
  var activeImg = $('.images .active');
  var activeDot = $('.nav .active');
  if(activeImg.hasClass('last') && activeDot.hasClass('last')){
    activeImg.removeClass('active');
    activeDot.removeClass('active');
    $('img.first').addClass('active');
    $('.nav .first').addClass('active');
  }else{
  activeImg.removeClass('active').next().addClass('active');
  activeDot.removeClass('active').next().addClass('active');
  }
};

//ARROW LEFT FUNCTION
function carouselPrev(){
  var activeImg = $('.images .active');
  var activeDot = $('.nav .active');
  if(activeImg.hasClass('first') && activeDot.hasClass('first')){
    activeImg.removeClass('active');
    activeDot.removeClass('active');
    $('img.last').addClass('active');
    $('.nav .last').addClass('active');
  }
  activeImg.removeClass('active').prev().addClass('active');
  activeDot.removeClass('active').prev().addClass('active');
};
