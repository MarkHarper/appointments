app.router.route('new', function () {
  //render
  app.show('newappointment');
  //$('#main').html(app.newappointment());

  //bind
  $('.save').on('click', function (e) {
    e.preventDefault();

    var newapp = new app.appointmentgen(
      $('.appt-title').val(),
      $('.appt-date').val(),
      $('.appt-time').val(),
      $('.appt-street').val(),
      $('.appt-city').val()
    );
  app.apps.add(newapp);

  document.location = '#appointments';

});
});
