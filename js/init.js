// This file runs once and is solely responsible for initializing
// the application when it loads.
$(function () {
  'use strict';

  // Initialize application properties
  app.apps = new app.ObjectStore();
  
  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();
});
