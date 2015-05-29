app.ObjectStore = function () {
  this.all = {};
};

app.ObjectStore.prototype = {
  add: function (obj) {
    this.all[obj.title] = obj;
  },

  getByTitle: function (title) {
    console.log(this.all[title]);
    return this.all[title];
  },

  remove: function (title) {
    delete this.all[title];
  },

  forEach: function (fn) {
    for (var key in this.all) {
      fn(this.all[key]);
    }
  }
};
