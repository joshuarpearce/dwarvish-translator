const processText = (value = '', source, destination, ignoredCharacters) => {
    let adjustedValue = value;

    const valueArray = value.split('');

    let translatedValue = '';

    for (let i = 0; i < valueArray.length;) {
        if (ignoredCharacters.includes(valueArray[i])) {
            translatedValue += adjustedValue[i];
            i++;
            continue;
        }

        for (let j = 5; j >= 0; j--) {
            if (j === 0) {
                adjustedValue.replace(valueArray[i], '');
                i += 1;
                break;
            }

            if (
                valueArray.length - i > (j - 1) &&
                source.includes(valueArray.slice(i, i + j).join(''))
            ) {
                translatedValue += destination[source.indexOf(valueArray.slice(i, i + j).join(''))];
                i += j;
                break;
            }
        }
    }

    return [adjustedValue, translatedValue];
};

export default processText;