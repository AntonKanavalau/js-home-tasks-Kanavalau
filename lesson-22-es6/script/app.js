window.onhashchange = renderNewState;

function renderNewState() {
  let src = "http://fe.it-academy.by/AjaxStringStorage2.php";

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
      arrayData = JSON.parse(data.result);
      // console.log("DataLoaded - " + data.result);
    }
  }


  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = {page: 'home'};
  } else {
    state = JSON.parse(state);
  }
  

  let hTitle = document.getElementById('hTitle');
  let page = document.getElementById('page');

  switch (state.page) {
    case 'home': {
      hTitle.innerText = "Энциклопедия";
      page.innerHTML = `<input type="button" value="Перейти к оглавлению" onclick="switchToNav()">`;
      break;
    }
    case 'navigation': {
      let sortArray = arrayData.map(char => char.title).sort();//Сортировка по алфавиту
      let letterArray = sortArray.map(char => char[0]);//Получаем отсортированный массив первых пукв

      console.log(sortArray);

      let uniqArray = letterArray.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);
      console.log(uniqArray);

      hTitle.innerText = "Оглавление";
      page.innerHTML = `
        ${uniqArray.map(letter => `
                      <div id="${letter}">
                        <h3>${letter}</h3>
                        <ul class="">
                          ${changeTitle(letter)}
                         </ul>
                      </div>`).join('')}
                      <input type="button" value="Вернуться домой" onclick="switchToHome()">
  `;

      function changeTitle(letter) {
        let html = '';
        for (let i = 0; i<sortArray.length; i++){
          if (sortArray[i][0] === letter) {
            console.log(sortArray[i]);
            html += `<li><input type="button" value="${sortArray[i]}" onClick="switchToState({page:'${sortArray[i]}'})"></li>`;
          }
        }
        return html;
      }

      break;
    }

    default:
      changeArticle(state.page);
  }

}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

function switchToHome() {
  switchToState({page: 'home'});
}

function switchToNav() {
  switchToState({page: 'navigation'});
}

function changeArticle(statePage) {

  let typeData;
  let text;

  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i].title === statePage) {
      typeData = arrayData[i].type;
      text = arrayData[i].article;
    }
  }


  console.log(typeData);

  hTitle.innerText = `${statePage}`;
  page.innerHTML = `
    ${typeData.map(type => `
      <ul class="">
        <li><a href="#">${type}</a></li>
      </ul>
    `).join('')}
    <p>${text}</p>
    <input type="button" value="Вернуться к Оглавлению" onclick="switchToNav()">
    <input type="button" value="Вернуться к Оглавлению" onclick="switchToHome()">
  `;

  console.log(statePage);

}


renderNewState();

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  alert(StatusStr + " " + ErrorStr);
}
