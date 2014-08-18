/* global $, document */

(function(){
  'use strict';
// this is the same the other funcitons just without naming
  $(document).ready(function(){
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1;
    $('#boxes').empty();
    for(var i = 0; i < num; i++){
      var $box = $('<div>');

      var val = (i%2) ? i*i : i*i*i;
      var klass = (i%2) ? 'odd' : 'even';

      $box.text(val);
      $box.addClass(klass).addClass('box');
      $box.text(i);
      $box.addClass('box');
      $('#boxes').append($box);
    }
  }

})();
