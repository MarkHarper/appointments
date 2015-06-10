app.router.route('details/:title', function (title) {
  var appt = app.apps.getByTitle(title);
  console.log(appt);
  app.show('appointmentdetails', appt);
  // $('#main').html(app.appointmentdetails());

  getWeather();

 
});
