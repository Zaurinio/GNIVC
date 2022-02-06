const rules = {
    '1 склонение': {
        'а': { 'gen': 'ы', 'dat': 'е', 'acc': 'у', 'ins': 'ой', 'pre': 'е' },
        'я': { 'gen': 'и', 'dat': 'е', 'acc': 'ю', 'ins': 'ей', 'pre': 'е' },
    },
    '1 склонение искл.': {
        'а': { 'gen': 'и', 'dat': 'е', 'acc': 'у', 'ins': 'ой', 'pre': 'е' },
    },
    '1 склонение ж.р.': {
        'ия': { 'gen': 'и', 'dat': 'и', 'acc': 'ю', 'ins': 'ей', 'pre': 'и' },
    },
    '2 склонение': {
        'о': { 'gen': 'а', 'dat': 'у', 'acc': 'о', 'ins': 'ом', 'pre': 'е' },
        'е': { 'gen': 'я', 'dat': 'ю', 'acc': 'е', 'ins': 'ем', 'pre': 'е' },
    },
    '2 склонение ср.р.': {
        'ие': { 'gen': 'ия', 'dat': 'ию', 'acc': 'ие', 'ins': 'ием', 'pre': 'ии' },
    },
    '2 склонение м.р.': {
        'ий': { 'gen': 'я', 'dat': 'ю', 'acc': 'й', 'ins': 'ем', 'pre': 'и' },
        'ой': { 'gen': 'я', 'dat': 'ю', 'acc': 'й', 'ins': 'ем', 'pre': 'е' },
        '-': { 'gen': 'а', 'dat': 'у', 'acc': '', 'ins': 'ом', 'pre': 'е' },
    },
    '3 склонение': {
        'ь': { 'gen': 'и', 'dat': 'и', 'acc': 'ь', 'ins': 'ью', 'pre': 'и' },
    },
}

export { rules };