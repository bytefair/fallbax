/* Author: Paul Edmon Graham*/$(document).ready(function(){$("button#reset").click(function(){$("div#font-staging div").hide();$("div#font-staging").hide(200);$(".UI").show();$("div#test-types").show(200);$("div#wrapper").addClass("vertical-align")});$("div#test-types button").click(function(a){$(".UI").hide(200);$("div#test-types").hide(200);$("div#wrapper").removeClass("vertical-align");$("div#font-staging").show();$("div#font-staging div").hide();var b=parseInt(a.target.id,10);b===3&&$("div.test-3-row").show();$("div.test-"+b).show(400)})});