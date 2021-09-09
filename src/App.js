import fp from 'lodash/fp';
import React, { useState } from 'react';

import './App.css';

const ignoredCharacters = [' '];

const dwarvishCharacters = ['2', '3', '6', '8V', '8', '9', '@', '%', 'w', 'eV', 'e', 'r', 'uI,', 'a', 'd', 'f', 'g', 'l', 'll ?', ';', 'S', 'D', 'z', 'x', 'c', 'v', 'b', 'nIM', '.', '/>', 'Z ?'];
const englishCharacters = ['b', 'f', 'm', 'th', 't', 'd', 'r', 'sh', 'z', 'kh', 'k', 'g', 'n', 'l', 'nd', 'h', 'ʔ, ‘', 'i', 'î', 'y', 'u', 'û', 'e', 'ê', 'a', 'â', 'o', 'ô', 's', 'ə', 'ʌ'];

const App = () => {
    const [english, setEnglish] = useState('');
    const [dwarvish, setDwarvish] = useState('');

    const updateEnglish = (value = '') => {
        let adjustedValue = value;

        const valueArray = value.split('');

        let dwarvishTranslation = '';

        for (let i = 0; i < valueArray.length;) {
            if (ignoredCharacters.includes(valueArray[i])) {
                dwarvishTranslation += adjustedValue[i];
                i++;
                continue;
            }

            for (let j = 3; j >= 0; j--) {
                if (j === 0) {
                    adjustedValue.replace(valueArray[i], '');
                    i += 1;
                    break;
                }

                if (
                    valueArray.length - i > (j - 1)
                    && englishCharacters.includes(valueArray.slice(i, i + j).join(''))
                ) {
                    dwarvishTranslation += dwarvishCharacters[englishCharacters.indexOf(valueArray.slice(i, i + j).join(''))];
                    i += j;
                    break;
                }
            }
        }

        setEnglish(adjustedValue);
        setDwarvish(dwarvishTranslation);
    };

    const updateDwarvish = (value) => {
        setDwarvish(value);
        setEnglish(dwarvishCharacters.reduce((acc, cur, i) => acc.replace(cur, englishCharacters[i]), value));
    };

    return (
        <div className="App">
            <div className="translationHolder">
                <div className="textareaHolder">
                    <textarea className="english" onChange={e => updateEnglish(e.target.value)} value={english}></textarea>
                </div>
                <div className="textareaHolder">
                    <textarea className="dwarvish" onChange={e => updateDwarvish(e.target.value)} value={dwarvish}></textarea>
                </div>
            </div>

        </div>
    );
};
export default App;
