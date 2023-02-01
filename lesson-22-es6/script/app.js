$.ajax(
  {
    url: src,
    type: "POST",
    cache: false,
    data: {f: "READ", n: "Kanavalau_Task_Lesson22"},
    success: dataLoaded,
    error: errorHandler
  });

function dataLoaded(data) {
  if (data.result !== "") {
    arrayData.push(JSON.parse(data.result));
    console.log("DataLoaded - " + data.result);
  }
}


let arrayData = [];

console.log('--------------------------------');
console.log(arrayData);

