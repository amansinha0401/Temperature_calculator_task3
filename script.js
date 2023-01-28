const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const doconvert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "white"
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is equal to ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F is equal to ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '') {
        result.style.color = "white"
        result.innerHTML = '!!Enter some number!!';
    } else {
        result.style.color = "white"
        result.innerHTML = '!!Enter only numbers!!!';
    }
}

const doswap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        converter.placeholder = "Temperature in °F";
    }else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        converter.placeholder = "Temperature in °C";
    };
};


changeButton.addEventListener('click', doswap);
convertButton.addEventListener('click', doconvert);
