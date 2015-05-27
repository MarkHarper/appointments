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

$(".back").click(function() {
  $(".newappt-container").hide();
  $(".appointments").show();
  $(".app-details").hide();
});

$(".edit-app").click(function() {
  $(".newappt-container").show();
  $(".appointments").hide();
  $(".app-details").hide();
});
