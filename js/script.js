
var nextBtn = $('.next');
var prevBtn = $('.prev');
var dots = $('.nav i');

$(document).ready(function(){

  nextBtn.click(carouselNext);
  prevBtn.click(carouselPrev);

  $(document).keydown(function(evt){
    if(evt.keyCode === 37){
      carouselPrev();
    }
    else if(evt.keyCode === 39){
      carouselNext();
    }
    evt.preventDefault();
  })

  dots.click(function(){
    var activeImg = $('.images .active');
    var activeDot = $('.nav .active');
    activeImg.removeClass('active');
    activeDot.removeClass('active');
    this.classList.add('active');
    var index = dots.index(this);
    var imgArray = $('.images img');
    imgArray[index].classList.add('active');
  })
});


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
