app.ObjectStore = function (key, storage) {
  this.key = key;
  this.storage = storage;
  this.all = this.load();
};

app.ObjectStore.prototype = {
  add: function (obj) {
    this.all[obj.title] = obj;
    this.save();
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
  },

  update: function (id, newValues) {
    this.remove(id);
    this.add(newValues);
    this.save();
  },

  remove: function (id) {
  delete this.all[id];
  this.save();
  },

  load: function () {
    return JSON.parse(this.storage.getItem(this.key) || '{}');
  },

  save: function () {
    this.storage.setItem(this.key, JSON.stringify(this.all));
  }
};
