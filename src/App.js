import React, { useState } from 'react';

import translator from './languageProcessor';

import './App.css';

const ignoredCharacters = [' '];

const dwarvishCharacters = ['2', '3', '6', '8V', '8', '9', '@', '%', 'w', 'eV', 'e', 'r', 'uI,', 'a', 'd', 'f', 'g', 'l', 'll ?', ';', 'S', 'D', 'z', 'x', 'c', 'v', 'b', 'nIM', '.', '/>', 'Z ?'];
const englishCharacters = ['b', 'f', 'm', 'th', 't', 'd', 'r', 'sh', 'z', 'kh', 'k', 'g', 'n', 'l', 'nd', 'h', 'ʔ, ‘', 'i', 'î', 'y', 'u', 'û', 'e', 'ê', 'a', 'â', 'o', 'ô', 's', 'ə', 'ʌ'];

const App = () => {
    const [english, setEnglish] = useState('');
    const [dwarvish, setDwarvish] = useState('');

    const updateEnglish = (value = '') => {
        const [adjustedValue, translatedValue] = translator(value, englishCharacters, dwarvishCharacters, ignoredCharacters);

        setEnglish(adjustedValue);
        setDwarvish(translatedValue);
    };

    const updateDwarvish = (value) => {
        const [adjustedValue, translatedValue] = translator(value, dwarvishCharacters, englishCharacters, ignoredCharacters);

        setDwarvish(adjustedValue);
        setEnglish(translatedValue);
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
