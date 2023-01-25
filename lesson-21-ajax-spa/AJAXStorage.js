"use strict";
function TAJAXStorage(keyName) {
  var self = this,
    pHash = {};


  $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
    {
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {f: 'READ', n: 'Kanavalau_Task_Lesson-21'},
      success: DataLoaded,
      error: ErrorHandler
    });

  function DataLoaded(data) {
    if (data !== "") {
      pHash = JSON.parse(data.result);
      console.log("DataLoaded - " + data.result);
    } else if (data === "") {
      $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {f: 'INSERT', n: 'Kanavalau_Task_Lesson-21', v: JSON.stringify(pHash)},
          success: DataLoadedInsert,
          error: ErrorHandler
        });

      function DataLoadedInsert(data) {
        console.log("DataLoadedInsert - " + data.result);
      }
    }
  }


  self.addValue = function (key, value) {
    pHash[key] = value;
    addValueOnServer(self.pHash);
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
    var password = 123456789;

    $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
      {
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'Kanavalau_Task_Lesson-21', p: password},
        success: DataLoadedLockget,
        error: ErrorHandler
      });

    function DataLoadedLockget(data) {
      console.log("DataLoadedLockget - " + data.result);
      $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {f: 'UPDATE', n: 'Kanavalau_Task_Lesson-21', p: password, v: JSON.stringify(pHash)},
          success: DataLoadedUpdate,
          error: ErrorHandler
        });

      function DataLoadedUpdate(data) {
        // ------------------------------------------------------------------
        console.log("DataLoadedUpdate - " + data.result);
        // ------------------------------------------------------------------
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + " " + ErrorStr);
  }


}