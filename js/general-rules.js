let valueArr = [];

const checkGeneralRules = (value) => {
    if (value.endsWith('чя') || value.endsWith('щя')) {
        valueArr = value.split('');
        valueArr.splice(valueArr.length - 1, valueArr.length - 1, 'а');
        value = valueArr.join('');
    }

    if (value.endsWith('жы') || value.endsWith('шы') || value.endsWith('щы')) {
        valueArr = value.split('');
        valueArr.splice(valueArr.length - 1, valueArr.length - 1, 'и');
        value = valueArr.join('');
    }

    return value;
};

export { checkGeneralRules };