(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    this.point = 1;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  var total = 0;

  Question.prototype.checkAnswer = function (answer) {
    if (answer == this.correct) {
      console.log('Correct answer!');
      return total += this.point;
    } else {
      console.log('Wrong answer. Try again :)')
    }
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  var questions = [q1, q2, q3];

  repeatQuestion(questions);

  var totalPoint = function (total) {
    console.log('Total Correct answer: ' + total);
  }

  totalPoint(total);

  function repeatQuestion() {
    do {
      var n = Math.floor(Math.random() * questions.length);

      questions[n].displayQuestion();

      var answer = prompt('Please select the correct answer.');

      questions[n].checkAnswer(answer);

    } while (answer !== 'exit');
  }
})();