function TLocalStorage(keyName) {
  var self = this,
    pHash = {};

  self.addValue = function (key, value) {
    pHash[key] = value;
    localStorage.setItem(keyName, JSON.stringify(pHash));
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.deleteValue = function (key) {
    delete pHash[key];
    localStorage.setItem(keyName, JSON.stringify(pHash));
    return delete pHash[key];
  };

  self.getKeys = function () {
    return (Object.keys(pHash));
  };

  self.reset = function () {
    pHash = JSON.parse(localStorage.getItem(keyName));
  }

  self.reset();
}