app.show = function (templateId, model) {
  var templateHtml = $('#' + templateId).html();
  var templateFn = _.template(templateHtml, { variable: 'm' });
  var result = templateFn(model);

  $('#main').html(result);
};



// $('script[type="text/html"]').each(function () {
//   var script = $(this);
//   app[script.attr('id')] = _.template(script.html(), { variable: 'm' });
//   script.remove();
// });
