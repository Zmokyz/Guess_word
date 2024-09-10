
const initGame = () => {
    let randomObj = wordList[Math.floor(Math.random() * wordList.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    let prepWord = wordArray.join("")
    const Word_show = document.getElementById("Word_show")
    Word_show.placeholder = prepWord
}
initGame();




document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.text_show');
  
    inputs.forEach((input, index) => {
      input.addEventListener('input', function() {
        if (this.value.length >= this.maxLength) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
  
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value.length === 0) {
          if (index > 0) {
            inputs[index - 1].focus();
          }
        }
      });
    });
  });
