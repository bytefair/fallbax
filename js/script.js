/* Author: Paul Edmon Graham*/

$(document).ready(function () {
  
  var lipsum = "<p>Lorem ipsum dolor sit amet, no has ludus choro conclusionemque. Eu propriae periculis vix, vim sale perfecto salutandi eu. Vis periculis maiestatis cu, ei nec nonumes mediocritatem concludaturque, at debet salutatus conceptam his. Quas probo ridens et has, eius homero intellegat his an, eum harum munere conceptam no.<p>Te reque verear mea. Ad duis eruditi dissentiet vim, per enim viderer tibique eu. Liber aeque voluptatum id mea. Ea alienum omnesque sapientem mel. Cu his soleat eripuit intellegam, ad sit verear minimum invidunt, mea cibo regione sensibus ea.<p>Mei scripta deleniti eu, vim inani vituperata ut, te his feugiat blandit abhorreant. An vitae fuisset ponderum mea, usu cu nostro hendrerit, vis libris pertinacia in. Te nostrum reprimique pri. Ei eam novum laboramus, nam case malorum complectitur et.<p>Vero ullum no vel. At vim deserunt postulant. Omittam sadipscing eos at, ponderum menandri philosophia est ea. Est ea affert denique, cu cum labitur offendit phaedrum, cu etiam tractatos pri. Meis dissentiet sed ad, sit partem graeco id, ne est feugiat persequeris. Usu erat facete philosophia id.";
  
  $('button#reset').click(function() {
    $('div#font-staging div').hide();
    $('div#font-staging').hide(200);
    $('.UI').show();
    $('div#test-types').show(200);
    $('div#wrapper').addClass('vertical-align');
  });
  
  $('div#test-types button').click(function(event) {
    $('.UI').hide(200);
    $('div#test-types').hide(200);
    $('div#wrapper').removeClass('vertical-align');
    $('div#font-staging').show();
    $('div#font-staging div').hide();
    
    $('div.' + event.target.id).show(600);
  });
  
  
  
});
