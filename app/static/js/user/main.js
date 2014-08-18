/* global $, document */
// alert('hey i am annoying!');

(function(){
  'use strict';

var a = 3,
    b = 2;

  $(document).ready(initialize);

  function initialize(){
  $('h2').css('color','blue');
  $('h2').addClass('happy');
  $('h2').fadeOut(2000);
  $('#a, #b, #c').addClass('happy');
  $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready!');

    $('#red').click(makeRed);
    $('#white').click(makeWhite);
    $('#color').click(makeColor);
    $('#fadeIn').click(makeFadeIn);
    $('fadeOut').click(makeFadeOut);
  }

  function makeRed(){
    alert('You Clicked the RED buttom');
      $('body').css('background-color','red');
  }

  function makeWhite(){
    $('body').css('background-color','white');
  }

  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
  }

  function makeFadeIn(){
    var num = $('#fade-number').val() * 1;
    $('footer').fadeIn(num);
  }
  console.log('the dome is NOT ready');
  console.log(a, b);
})();

console.log('i am bloggin about stuff');

$('div').css('color','red');
