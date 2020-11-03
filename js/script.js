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
  if(activeImg.hasClass('last')){
    activeImg.removeClass('active');
    $('img.first').addClass('active');
  }else{
  activeImg.removeClass('active').next().addClass('active');
  }
};

//ARROW LEFT FUNCTION
function carouselPrev(){
  var activeImg = $('.images .active');
  if(activeImg.hasClass('first')){
    activeImg.removeClass('active');
    $('img.last').addClass('active');
  }
  activeImg.removeClass('active').prev().addClass('active');
};
