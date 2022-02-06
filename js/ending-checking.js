const checkEnding = (inputValue) => {
    if (inputValue.endsWith('а') || inputValue.endsWith('я')) {
        if (inputValue.endsWith('ия')) {
            return inputValue.slice(-2);
        } else if ((inputValue.slice(-2, -1) === 'к') || (inputValue.slice(-2, -1) === 'г')) {
            return inputValue.slice(-1);
        } else {
            return inputValue.slice(-1);
        }
    } else if (inputValue.endsWith('о') || inputValue.endsWith('е')) {
        if (inputValue.endsWith('ие')) {
            return inputValue.slice(-2);
        } else {
            return inputValue.slice(-1);
        }
    } else if (inputValue.endsWith('ь')) {
        return inputValue.slice(-1);
    } else {
        if (inputValue.endsWith('й')) {
            return inputValue.slice(-2);
        } else {
            return '-';
        }
    }
};

export { checkEnding };