
var nextBtn = $('.next');
var prevBtn = $('.prev');


$(document).ready(function(){

  nextBtn.click(carouselNext);
  prevBtn.click(carouselPrev);

});

$(document).keydown(function(evt){
  if(evt.keyCode === 37){
    carouselPrev();
  }
  else if(evt.keyCode === 39){
    carouselNext();
  }
  evt.preventDefault();
})
function carouselNext(){
  var activeImg = $('.images .active');
  var activeIndex = $('.nav .active')
  if(activeImg.hasClass('last') && activeIndex.hasClass('last')){
    activeImg.removeClass('active');
    activeIndex.removeClass('active');
    $('img.first').addClass('active');
    $('.nav .first').addClass('active');
  }else{
  activeImg.removeClass('active').next().addClass('active');
  activeIndex.removeClass('active').next().addClass('active');
  }
};

function carouselPrev(){
  var activeImg = $('.images .active');
  var activeIndex = $('.nav .active');
  if(activeImg.hasClass('first') && activeIndex.hasClass('first')){
    activeImg.removeClass('active');
    activeIndex.removeClass('active');
    $('img.last').addClass('active');
    $('.nav .last').addClass('active');
  }
  activeImg.removeClass('active').prev().addClass('active');
  activeIndex.removeClass('active').prev().addClass('active');
}
