app.router.route('edit/:title', function (title) {
  //render
  //$('#main').html(app.newappointment());
  var appt = app.apps.getByTitle(title);
  console.log(appt);
  app.show('edit-appointment', appt);
  //bind

  $('.save').on('click', function (e) {
    e.preventDefault();

    var newApp = new app.Appointmentgen(
      $('.appt-title').val(),
      $('.appt-date').val(),
      $('.appt-time').val(),
      $('.appt-street').val(),
      $('.appt-city').val()
    );

    app.apps.update(title, newApp);
    document.location = '';
  });

  $('.delete-field').on('click', function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this appointment?")) {
      app.apps.remove(title);
      document.location = '';
    }
  });
});
