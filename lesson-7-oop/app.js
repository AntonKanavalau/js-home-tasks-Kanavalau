//q-question
//ans - variants answer
//trueAns - true answer

var Question = function (q, trueAns) {
  this.task = 'Complete the time expressions with IN, AT or ON';
  this.q = q;
  this.ans = ['in', 'at', 'on'];
  this.trueAns = trueAns;
}

Question.prototype.numberingAns = function () {
  var str = '';
  for (var i = 0; i < this.ans.length; i++) {
    str += `${i + 1}. ${this.ans[i]} \n`;
  }
  return str;
}

var allQuestions = [];

var q1 = new Question('__ Saturday', 'on');
allQuestions.push(q1);
var q2 = new Question('__ summer', 'in');
allQuestions.push(q2);
var q3 = new Question('__ the weekend', 'at');
allQuestions.push(q3);
var q4 = new Question('__ the twenty-first century', 'in');
allQuestions.push(q4);
var q5 = new Question('__ 2010', 'in');
allQuestions.push(q5);
var q6 = new Question('__ eight o\'clock', 'at');
allQuestions.push(q6);

randomQuestion(allQuestions);

var custAnswer = parseInt(prompt(obj.task + '\n' + '\n' + obj.q + '\n' + obj.numberingAns()));

checkTrueAns(obj, custAnswer);

function randomQuestion(allQuestions) {
  var randKey = Math.floor(Math.random() * allQuestions.length);
  for (var i = 0; i < allQuestions.length; i++) {
    if (randKey === i) {
      obj = allQuestions[randKey];
    }
  }
  return obj;
}

function checkTrueAns(obj, custAnswer) {
  if (obj.ans.findIndex(item => item === obj.trueAns) === custAnswer - 1) {
    alert('Answer is True.');
    console.log('Answer is True.');
  } else if (isNaN(custAnswer) || custAnswer === '') {
    alert('Please, you must select an answer.');
    console.log('Please, you must select an answer.');
    location.reload();
  } else {
    alert((`Answer is False. Your answer was ${custAnswer}-${obj.ans.find(item => item === obj.ans[custAnswer - 1])}.\nTrue Answer is ${(obj.ans.findIndex(item => item === obj.trueAns)) + 1}-${(obj.ans.find(item => item === obj.trueAns))}.`));
    console.log(`Answer is False. Your answer was ${custAnswer}-${obj.ans.find(item => item === obj.ans[custAnswer - 1])}.\nTrue Answer is ${(obj.ans.findIndex(item => item === obj.trueAns)) + 1}-${(obj.ans.find(item => item === obj.trueAns))}.`);
  }
}