$(".hpp1").mousemove(function(e) {
  var hovertext = $(this).attr("hovertext");

  $("#hoverdiv").text(hovertext).show();
  $("#hoverdiv").css("top", e.clientY + 350).css("left", e.clientX + 10);
}).mouseout(function() {
  $("#hoverdiv").hide();
});

$(".mtpanel").mousemove(function(e) {
  var hovertext = $(this).attr("hovertext");

  $("#hoverdiv").text(hovertext).show();
  $("#hoverdiv").css("top", e.clientY = 750).css("left", e.clientX = 150);
}).mouseout(function() {
  $("#hoverdiv").hide();
});