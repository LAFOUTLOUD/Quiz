// we use the IIFE technique to make the entire code self-contained
(function() {

// groups all of the vars together
var divide, gamePlaying, Question, response, score;

gamePlaying = true;

divide = '------------------------';

score = 0;

Question = function(question, answers, correct, random) {
			
	this.question = question;
			
	this.answers = answers;
			
	this.correct = correct;
			
	this.random = function() {
				
		if (gamePlaying) {

			response = prompt(

			'Please select the correct answer (just type the number)',

			console.log( this.question, this.answers )

			);

			if (response === correct) {
				
				score = score += 1;

				console.log('Correct!');
				this.score();
				console.log(divide);

				nextQuestion();

			}

			else if (response === 'EXIT') {

				endGame();

			}

			else {

				console.log('Wrong answer. Try again :)');
				console.log(divide);

				nextQuestion();
				
			}
			
		};
	}
			
			this.score = function() {
				console.log('Your current score is: ' + score);
			}
		};

// all the INSTANCES 
q1 = new Question(
			'What is the highest-grossing film?',
			['0: Avatar', '1: Endgame', '2: Frozen', '3: Jurassic World'], '1'),

q2 = new Question(
			'What is the highest-grossing media franchise?',
			['0: Dragon Ball', '1: Mario', '2: Pokemon', '3: Star Wars'], '2' ),

q3 = new Question(
			'What is the best-selling manga?',
			['0: Case Closed', '1: Dragon Ball', '2: Naruto', '3: One Piece'], '3' ),

q4 = new Question(
			'What is the best-selling album?',
			['0: Back in Black\' by AC/DC', '1: Bat out of Hell\' by Meatloaf', '2: The Dark Side of the Moon\' by Pink Floyd', '3: Thriller\' by Michael Jackson'], '3' ),

q5 = new Question(
			'Who Framed Roger Rabbit was released in 1988.', 
			['0: Yes', '1: No'], '0')

// all the vars for the INSTANCES are stored in the questions ARRAY
var questions = [q1,q2,q3,q4,q5];

		function nextQuestion() {

			questions[Math.floor( Math.random() * 5 )].random();
					
		};

		function endGame() {

			console.log('Refresh to start again');
			gamePlaying = false;

		};

questions[Math.floor( Math.random() * 5 )].random();

})();
