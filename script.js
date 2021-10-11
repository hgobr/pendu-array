let word = prompt('met un mot');
let display = '_'.repeat(word.length);
let tab = display.split('');
let wrongGuess = [];

while(word !== display) {

    let guess = prompt(`devine ${display}`);
    let foundPos = word.indexOf(guess);

    if(foundPos === -1 || guess.length !== 1) {
        alert('re essaye!');
        wrongGuess.push(guess);
    }

    if(foundPos !== -1 && guess.length === 1) {
        tab.splice(word.indexOf(guess),1,guess);
        display = tab.join('');
    }
}

alert(`Bien joué c'etait ${display}\nTu as essayé: ${wrongGuess}`)
