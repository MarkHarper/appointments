app.router.route('new', function () {
  //render
  app.show('newappointment');
  //$('#main').html(app.newappointment());
  $('.appt-date').pickadate();
  $('.appt-time').pickatime();

  $('.newappt-wrapper').parsley();
  //bind
  $('.save').on('click', function (e) {
    e.preventDefault();
    var newapp =new app.Appointmentgen(
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
