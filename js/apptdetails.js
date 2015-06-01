app.router.route('details/:title', function (title) {
  var appt = app.apps.getByTitle(title);
  console.log(appt);
  app.show('appointmentdetails', appt);
  // $('#main').html(app.appointmentdetails());

  getWeather();

  $('.delete-field').on('click', function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this appointment?")) {
      app.apps.remove(title);
      document.location = '';
    }
  });
});
