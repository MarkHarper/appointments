var views = {};

$('script[type="text/html"]').each(function () {
  var script = $(this);
  views[script.attr('id')] = _.template(script.html(), { variable: 'm' });
  script.remove();
});


$('#main').html(views.appointment());
//$('#main').html(views.newappointment());
//$('#main').html(views.appointmentdetails());
