import { rules } from './rules.js';
import { checkDeclension } from './declension-checking.js';
import { checkEnding } from './ending-checking.js';
import { checkGeneralRules } from './general-rules.js';

const button = document.querySelector('.application__button');
const outputArea = document.querySelector('.application__output');
const inputArea = document.querySelector('.application__input');
let baseWord = '';

button.addEventListener('click', () => {
    const inputValue = inputArea.value.toLowerCase();
    const choosenCase = document.querySelector('.application__cases-list').value;

    let declension = checkDeclension(inputValue);
    let wordEnding = checkEnding(inputValue);

    if (wordEnding !== '-') {
        baseWord = inputValue.slice(0, -1);
    } else {
        baseWord = inputValue;
    }

    const convertedWordEnding = rules[declension][wordEnding][choosenCase];
    let outputValue = baseWord + convertedWordEnding;
    outputValue = checkGeneralRules(outputValue);

    if (inputValue === '') {
        outputArea.textContent = 'OMG!';
    } else {
        outputArea.textContent = outputValue;
    }
});

// inputArea.addEventListener('input', () => {
//     outputArea.textContent = '';
// })

// Не реализовано:
//  - проверка окончаний -ом и -ем после шипящих;
//  - проверка окончаний после шипящих в винительном падеже.