$(".newapp-btn").click(function() {
  $(".newappt-container").show();
  $(".appointments").hide();
});

$("li").click(function() {
  $(".newappt-container").hide();
  $(".appointments").hide();
  $(".app-details").show();
});

$(".savebtn").click(function() {
  $(".newappt-container").hide();
  $(".appointments").hide();
  $(".app-details").show();
});
