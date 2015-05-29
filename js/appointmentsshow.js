(function () {
  app.router.route('', showList);
  app.router.route('appointments', showList);

  function showList () {
    app.show('appointment', { scope : app.apps } );
    //$('#main').html(app.appointment());

    $('.view-details').on('click', function (e) {
      e.preventDefault();

      document.location = '#details';
    });
  }

})();
