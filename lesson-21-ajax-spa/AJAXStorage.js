"use strict";
function TAJAXStorage(keyName) {
  var self = this,
    pHash = {};

  var src = "http://fe.it-academy.by/AjaxStringStorage2.php";

  $.ajax(
    {
      url: src,
      type: "POST",
      cache: false,
      data: {f: "READ", n: "Kanavalau_Task_Lesson21"}, /*почему при добавлении Kanavalau_Task_Lesson-21 выдает
       ошибку синтаксиса?  */
      success: dataLoaded,
      error: errorHandler
    });

  function dataLoaded(data) {
    if (data.result !== "") {
      pHash = JSON.parse(data.result);
      console.log("DataLoaded - " + data.result);
    }
  }

  self.addValue = function (key, value) {
    console.log(key);
    console.log(value);
    pHash[key] = value;
    addValueOnServer(pHash);
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.deleteValue = function (key) {
    delete pHash[key];
    addValueOnServer(pHash);
    return pHash[key];
  };

  self.getKeys = function () {
    return (Object.keys(pHash));
  };

  function addValueOnServer(pHash) {
    var password = 123456;

    $.ajax(
      {
        url: src,
        type: "POST",
        cache: false,
        data: {f: "LOCKGET", n: "Kanavalau_Task_Lesson21", p: password},
        success: dataLoadedLockget,
        error: errorHandler
      });

    function dataLoadedLockget(data) {
      console.log("DataLoadedLockget - " + data.result);
      $.ajax(
        {
          url: src,
          type: "POST",
          cache: false,
          data: {f: "UPDATE", n: "Kanavalau_Task_Lesson21", p: password, v: JSON.stringify(pHash)},
          success: dataLoadedUpdate,
          error: errorHandler
        });

      function dataLoadedUpdate(data) {
        // ------------------------------------------------------------------
        console.log("DataLoadedUpdate - " + data.result);
        // ------------------------------------------------------------------
      }
    }
  }

  function errorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + " " + ErrorStr);
  }


}