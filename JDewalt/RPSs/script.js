/* global jQuery */

jQuery(document).ready(function () {
  var rock = '../images/rock.png';
  var paper = '../images/paper.png';
  var scissors = '../images/scissors.png';
  var lizard = '../images/lizard.png';
  var spock = '../images/spock.png';
  var hands = {rock: rock, paper: paper, scissors: scissors, lizard: lizard, spock: spock};
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var playerChoice, computerChoice;
/*
  var announcer = [
    [scissors: [ paper: 'Scissors cuts paper' ]],
    [paper: [ rock: 'Paper covers rock' ]]
  ];
*/

  jQuery('.button').on('click', start);

  function start () {
    jQuery('.button').off('click');
    playerChoice = this.id;
    computerChoice = choices[Math.floor(Math.random() * 5)];
    jQuery('.result').hide();
    jQuery('.fist').show();
    countDown();
  }

  function countDown () {
    var i = 3;
    count();

    function count () {
      jQuery('.hand_container').addClass('shake');
      jQuery('#score_container').text('Counting: ' + i);
    //  jQuery('#score_container').text(str(scissors[0]));

      if (i === 0) {
        displayResults();
      } else {
        i -= 1;
        setTimeout(count, 500);
      }

    }
  }

  function displayResults () {
    jQuery('.hand_container').removeClass('shake');
    jQuery('#score_container').text('Shoot!');
    jQuery('.fist').hide();
    jQuery('.result.right.' + playerChoice).show();
    jQuery('.result.left.' + computerChoice).show();

    setTimeout(function () {
      if (playerChoice === computerChoice) {
        jQuery('#score_container').text('Tie! Player\'s choice: '+ playerChoice + ', Computer\'s choice: ' + computerChoice);
      } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'lizard' && computerChoice ==='spock') || (playerChoice === 'lizard' && computerChoice ==='paper') || (playerChoice === 'spock' && computerChoice ==='scissors') || (playerChoice === 'spock' && computerChoice ==='rock')) {
        jQuery('#score_container').text('You Win! Computer\'s choice: ' + computerChoice + ', Player\'s choice: ' + playerChoice);
      } else {
        jQuery('#score_container').text('You\'ve Lost! Computer\'s choice: '+ computerChoice + ', Player\'s choice: ' +playerChoice);
      }

      jQuery('.button').on('click', start);
    }, 400);
  }
});
