// Part 7 - the code has been made private, just in case another programmer uses it
function fnName() {
	
	return function() {

var Question, question1, question2, question3, question4, question5, questionArray;

// Part 1 - we create a F.C. called 'Question'
Question = function(question, possibleAnswers, correctAnswer, multiChoice) {
	
	// the question being asked
	this.question = question;
	
	// the answers from which the player can choose the correct one
	this.possibleAnswers = possibleAnswers;
	
	// correct answer
	this.correctAnswer = correctAnswer;
	
	// Part 4 - select a random question, log it to the console w/ the answers
	this.multiChoice = function() {

		// Part 5 - use the Window.prompt() fn to ask for the correct answer
		var response = prompt(
			
			// 1. the first parameter displays text in the PROMPT window
			'Please select the correct answer (just type the number)',

			// 2. the PROMPT logs the current question and the choices to the console so the user can see the choices
			console.log(this.question, this.possibleAnswers) );
		
			// checks to see if the answer is correct
			this.checkAnswer = function() {

				// if the response is correct
				if( response === correctAnswer ) { 
			
					// displays a response
					console.log('Correct Answer!')

				}
		
				// if the response is wrong
				else {

					console.log('Wrong Answer!')

				}
			};
	};
};

// Part 2 & Part 3 - create a couple of questions using the constructor, we store all INSTANCES in an array
questionArray = [

	// Instance 1: Movie Question
	question1 = new Question(
		'What is the highest-grossing film?',
		['0: Avatar', '1: Endgame', '2: Frozen', '3: Jurassic World'], '1'),

	// Instance 2: Media Question
	question2 = new Question(
		'What is the highest-grossing media franchise?',
		[ '0: Dragon Ball', '1: Mario', '2: Pokemon', '3: Star Wars'], '2' ),
	
	// Instance 3: Manga Question
	question3 = new Question(
		'What is the best-selling manga?',
		['0: Case Closed', '1: Dragon Ball', '2: Naruto', '3: One Piece'], '3' ),
	
	// Instance 4: Album Question
	question4 = new Question(
		'What is the best-selling album?',
		['0: Back in Black\' by AC/DC', '1: Bat out of Hell\' by Meatloaf', '2: The Dark Side of the Moon\' by Pink Floyd', '3: Thriller\' by Michael Jackson'], '3' ),
	
	// Instance 5: True or False
	question5 = new Question(
		'Who Framed Roger Rabbit was released in 1988.', 
		['0: Yes', '1: No'], '0')
];

	
questionArray[4].multiChoice();
questionArray[4].checkAnswer();

	};
};

// both functions are called at the same time
fnName()();
