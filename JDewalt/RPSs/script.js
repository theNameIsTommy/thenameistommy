$(document).ready(function () {
  var rock = "../images/rock.png"
	var paper = "../images/paper.png"
	var scissors = "../images/scissors.png"
  var hands={rock:rock,paper:paper,scissors:scissors}
  var choices=['rock','paper','scissors']
  var playerChoice,computerChoice;

  $('.button').on('click',start);

  function start () {
    $('.button').off('click');
    playerChoice=this.id;
    computerChoice=choices[Math.floor(math.random()*3)];
    $('.result').hide();
		$('.fist').show();
    countDown();
  }
  function countDown () {
    var i=3;
    count();
    function count (){
      $('.hand_container').addClass('shake');
      $('#score_container').text('Countring: ',i)

      if (i==0) {
        displayResults();
      }
      else {
        i-=1;
        setTimeout(count,500);
      }
    }
  };
  function displayResults() {
    $('.hand_container').removeClass('shake');
		$('#score_container').text('Shoot!');
    $('.fist').hide();
		$('.result.right.' + playerChoice).show();
		$('.result.left.' + computerChoice).show();

    setTimeout(function() {
    			if ( userChoice == compChoice ) {
    				$('#score_container').text('Tie!');
    			} else if ( (userChoice == 'rock' && compChoice == 'scissors') || (userChoice == 'paper' && compChoice == 'rock') || (userChoice == 'scissors' && compChoice == 'paper') ) {
    				$('#score_container').text('You Win!');
    			} else {
    				$('#score_container').text('You Lose!');
    			};

    			$('.button').on('click', start);
    		}, 400);
  };

};
