 const scores = JSON.parse(localStorage.getItem('scores')) || { wins: 0, losses: 0, ties: 0 };
    if(scores===null){
        scores = {
            wins: 0,
            losses: 0,
            ties: 0
        };
    }

     updateScores();

    function updateScores(){
        document.querySelector('.js-scores').innerText=`Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
    }
    function playGame(userMove) {
        const randomNumber = Math.random();

        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'Rock';
        } else if(randomNumber < 2/3){
            computerMove = 'Paper';
        } else {
            computerMove = 'Scissors';
        }

        let result = '';
        if(userMove === computerMove){
            result = 'It is a tie!';
        } else if(
            (userMove === 'Rock' && computerMove === 'Scissors') ||
            (userMove === 'Paper' && computerMove === 'Rock') ||
            (userMove === 'Scissors' && computerMove === 'Paper')
        ){
            result = 'You win!';
        } else {
            result = 'You lose!';
        }

        if(result=== 'You win!'){
            scores.wins++;  
        }else if(result==='You lose!'){
            scores.losses++;
        }else{
            scores.ties++;
        }
        
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = ` You <img src="Rock Paper Scissors_files/${userMove}-emoji.png" alt="Rock" class="move-icon"> and computer <img src="Rock Paper Scissors_files/${computerMove}-emoji.png" alt="Paper" class="move-icon">`;


        localStorage.setItem('scores', JSON.stringify(scores));

        updateScores();

        /*alert(`You chose ${userMove} and computer chose ${computerMove}. ${result} wins:${scores.wins},losses:${scores.losses},ties:${scores.ties}`);*/
    }