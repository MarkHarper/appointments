app.router.route('appointments', function () {
  app.show('appointment', { apps : app.apps } );
  //$('#main').html(app.appointment());
  $('.delete-btn').on('click', function () {
    //app.apps.remove['title'];
    //document.location='#appointments';
  })
});
