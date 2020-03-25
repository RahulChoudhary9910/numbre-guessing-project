  let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const range = document.querySelector('.range');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;
      let num=100;
      let diff=0;
      let rank=0;
       range.textContent += 'The random number selected is in the range 1 to '+' '+ num + '. ';
      function checkGuess() {
        let userGuess = Number(guessField.value);
        if(randomNumber<userGuess){
            diff = userGuess-randomNumber;
          }
          else{
            diff = randomNumber-userGuess;
          }
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += userGuess + ' ';
       

    
        if (diff === 0) {
          lastResult.textContent = 'Correct!';
          lastResult.style.backgroundColor = 'green';
          setGameOver();
        } 
        else{ 
        if (  diff>=1 && diff<=4 ) {
          lastResult.textContent = 'Hot!';
          lastResult.style.backgroundColor = 'Red';
        } 
         else if (diff >=5 && diff<=15 ) {
          lastResult.textContent = 'Warm!';
          lastResult.style.backgroundColor = 'Yellow';
        }
        else {
          lastResult.textContent = 'Cold!';
          lastResult.style.backgroundColor = 'Blue';
           }}
        guessCount++;
        guessField.value = '';
        guessField.focus();
      }
      guessSubmit.addEventListener('click', checkGuess);
      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }
      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        num=num+100;
        randomNumber = Math.floor(Math.random() * num) + 1;
        range.textContent = 'The random number selected is in the range 1 to '+' '+ num + '. ';
      }