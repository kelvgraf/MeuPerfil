(function() { 
  function animateTitles() {
    let counter = 0;
    const specialChars = ['$','%','#','@','&','(',')','=','*','/'];
    const totalSpecialChars = specialChars.length;
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const personal = document.querySelector('.personal-title');
   
    generateLetters(personal)
   
    const personalLetters = document.querySelectorAll('.personal-title .title__letter');
      
    function generateLetters (element) {
      return element.innerHTML = element.innerHTML.split('').map(string => {
        return `<span class="title__letter" data-letter="${string}">${string}</span>`
      }).join('')
    }

    function writeLetters(letters) {
      letters.forEach((letter, index) => {
        let timeout = setTimeout(() => {
          if (letter.innerHTML === ' ') {
            letter.innerHTML = ' '
          } else {
            letter.innerHTML = specialChars[getRandom(0, totalSpecialChars - 1)]
          }
          
          setTimeout(() => {
            letter.innerHTML = letter.getAttribute('data-letter');
          }, 100)
        }, index * 250)
      });
    }

    function loopLetters(letters, ms) {
      setInterval(() => {
        writeLetters(letters)
      }, ms)
    }

    writeLetters(personalLetters)
  
    loopLetters(personalLetters, 6000)
  }

  animateTitles();

})();