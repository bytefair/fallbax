/* Author: Paul Edmon Graham*/

$(document).ready(function () {

  $('button#reset').click(function() {
    $('div.test-row').hide();
    $('div#font-staging div').hide();
    $('div#font-staging').hide(200);
    $('.UI').show();
    $('div#test-types').show(200);
  });
  
  $('div#test-types button').click(function(event) {
    $('.UI').hide(200);
    $('div#test-types').hide(200);
    $('div#font-staging').show();
    $('div#font-staging div').hide();
    $('div.test-row').show();

    var classNum = parseInt(event.target.id, 10);
    if (classNum === 3 || classNum === 6 || classNum === 9 ) {
        $('div.test-3-column').show();
    }
    
    $('div#test-' + classNum).show(400);
    $('div#test-' + classNum + '-controls').show(400);
    $('div#test-' + classNum + '-results').show(400);

  });









  // Controlling fonts on readability test

  $('input#test-1-font-face').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('font-family', currentValue);
  });

  $('input#test-1-font-size').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('font-size', currentValue);
  });

  $('input#test-1-line-height').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('line-height', currentValue);
  });

  $('input#test-1-text-indent').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('text-indent', currentValue);
  });

  $('input#test-1-column-width').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('max-width', currentValue);
  });

  $('select#test-1-justify').change(function() {
    var currentValue =  $(this).val();
    $('div#test-1-results').css('text-align', currentValue);
  });

  $('button#test-1-reset').click(function() {                     // default values for test 1
    var testConfirm = confirm('Are you sure you want to reset the test?');
    if (testConfirm) {
      $('div#test-1-results').css({ 'font-family' : 'serif',
                                    'font-size'   : '1em',
                                    'line-height' : '1.5em',
                                    'text-indent' : '1.5em',
                                    'max-width'   : '40em',
                                    'text-align'  : 'left'
      });
      $('input#test-1-font-face').val('serif');
      $('input#test-1-font-size').val('1em');
      $('input#test-1-line-height').val('1.5em');
      $('input#test-1-text-indent').val('1.5em');
      $('input#test-1-column-width').val('40em');
      $('select#test-1-justify').val('left');
    }
    
  });









  // controlling fonts on deep comparison test

  $('input#test-3-font-face-1').keyup(function() {
    var currentValue =  $(this).val();
    $('p.test-3-font-1').css('font-family', currentValue);
  });

  $('input#test-3-font-face-2').keyup(function() {
    var currentValue =  $(this).val();
    $('p.test-3-font-2').css('font-family', currentValue);
  });

  $('input#test-3-font-face-3').keyup(function() {
    var currentValue =  $(this).val();
    $('p.test-3-font-3').css('font-family', currentValue);
  });

  $('input#test-3-font-size').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-3-results').css('font-size', currentValue);
  });

  $('input#test-3-line-height').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-3-results').css('line-height', currentValue);
  });














  /* general functions (will fix later)


  $('input#test-' +  + '-font-face').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-' + + '-results').css('font-family', currentValue);
  });

  $('input#test-' +  + '-font-size').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-' +  + '-results').css('font-size', currentValue);
  });

  $('input#test-1-line-height').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-' +  + '-results').css('line-height', currentValue);
  });

  $('input#test-1-text-indent').keyup(function() {
    var currentValue =  $(this).val();
    $('div#test-' +  + '-results').css('text-indent', currentValue);
  });

  $('select#test-' +  + '-justify').change(function() {
    var currentValue =  $(this).val();
    $('div#test-' +  + '-results').css('text-align', currentValue);
  });

*/

});
