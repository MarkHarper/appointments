
$('script[type="text/html"]').each(function () {
  var script = $(this);
  app[script.attr('id')] = _.template(script.html(), { variable: 'm' });
  script.remove();
});


//$('#main').html(app.appointment());
//$('#main').html(app.newappointment());
//$('#main').html(app.appointmentdetails());
