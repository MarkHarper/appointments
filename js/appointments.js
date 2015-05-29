app.show = function (templateId, model) {
  var templateHtml = $('#' + templateId).html();
  //console.log(templateHtml);
  var templateFn = _.template(templateHtml, { variable: 'm' });
  //console.log(templateFn);
  var result = templateFn(model);
  //console.log(result);
  $('#main').html(result);
};



// $('script[type="text/html"]').each(function () {
//   var script = $(this);
//   app[script.attr('id')] = _.template(script.html(), { variable: 'm' });
//   script.remove();
// });
