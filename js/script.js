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
  });

});
