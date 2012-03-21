/* Author: Paul Edmon Graham*/

$(document).ready(function () {
  
  function testSetup () {
    var testTypes = {
      'tests': [
        { 'label': 'Readability test - 1 column',     'id': 'test-1' },
        { 'label': 'In-depth typographic - 3 column', 'id': "test-3" },
        { 'label': 'Six boxes',                       'id': "test-6" },
        { 'label': 'Nine boxes',                      'id': "test-9" }
      ]
    };
    var buttonTemplate = '{{#tests}}<button id="{{id}}">{{label}}</button>{{/tests}}';
    
    //var buttonSet = ;
    
    //$('div#test-types').html(buttonSet);
  }

  
  
  $('button#reset').click(function() {
    $('div#font-staging').empty();
    testSetup();
  });
  
});
