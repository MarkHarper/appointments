app.router.route('appointments', function () {
  app.show('appointment', { scope : app.apps } );
  //$('#main').html(app.appointment());

  $('.view-details').on('click', function (e) {
    e.preventDefault();

    document.location = '#details';
  });
});
