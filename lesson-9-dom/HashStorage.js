function THashStorage() {}

THashStorage.prototype.AddValue = function (Key, Value) {
  return this[Key] = Value;
};

THashStorage.prototype.GetValue = function (Key) {
  return THashStorage[Key];
};

THashStorage.prototype.DeleteValue = function (Key) {
  return delete this[Key];
};

THashStorage.prototype.GetKeys = function () {
  return Object.keys(this);
};



