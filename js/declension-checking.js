const checkDeclension = (inputValue) => {
    if (inputValue.endsWith('а') || inputValue.endsWith('я')) {
        if (inputValue.endsWith('ия')) {
            return '1 склонение ж.р.';
        } else if ((inputValue.slice(-2, -1) === 'к') || (inputValue.slice(-2, -1) === 'г')) {
            return '1 склонение искл.';
        } else {
            return '1 склонение';
        }
    } else if (inputValue.endsWith('о') || inputValue.endsWith('е')) {
        if (inputValue.endsWith('ие')) {
            return '2 склонение ср.р.';
        } else {
            return '2 склонение';
        }
    } else if (inputValue.endsWith('ь')) {
        return '3 склонение';
    } else {
        if (inputValue.endsWith('й')) {
            return '2 склонение м.р.';
        } else {
            return '2 склонение м.р.';
        }
    }
};

export { checkDeclension };