var button = document.getElementById('rock')
button.addEventListener('click', function() {
  console.log('rock')
  play("rock")
})

var button = document.getElementById('paper')
button.addEventListener('click', function() {
  console.log('paper')  
  play("paper")
})

var button = document.getElementById('scissors')
button.addEventListener('click', function(){
  console.log('scissors')
  play("scissors")
})

function play(playerChoice) {
  choices = ["rock", "paper", "scissors"]
  var comChoice = choices[Math.floor(Math.random() * 3)];
  console.log("You chose " + playerChoice)
  console.log("Computer Chose" + comChoice)
    document.getElementById('matchup').innerHTML = 
    ('Your choice: ' + playerChoice + ' VS. ' +comChoice + ' :Computer Choice' )
      if (playerChoice === comChoice) {
        document.getElementById('result').innerHTML = 'Tie'
      } else if ((comChoice === 'paper' && playerChoice === 'rock')
          || (comChoice === 'rock' && playerChoice === 'scissors')
          || (comChoice === 'scissors' && playerChoice === 'paper')){
      document.getElementById('result').innerHTML = 'You lost!'  
    } else { document.getElementById('result').innerHTML = 'You Win!'}
}