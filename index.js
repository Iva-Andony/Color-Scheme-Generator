

document.getElementById('button').addEventListener('click', getColor);
const colorConatinerEl = document.getElementById('color-scheme-container');
const codeContainerEl = document.getElementById('colors-codes-container');

fetch(`https://www.thecolorapi.com/scheme?hex=1C1744&mode=monochrome&count=5`)
    .then(res => res.json())
    .then(data => renderColors(data.colors));


function getColor() {
    colorConatinerEl.innerHTML = '';
    codeContainerEl.innerHTML = '';

    const colorEl = document.getElementById('main-color');
    const scheme = document.getElementById('color-schemes').value;
    const count = document.getElementById('count-colors').value;

    const color = colorEl.value.slice(1);
    

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=${count}`)
        .then(res => res.json())
        .then(data => renderColors(data.colors));

}


function renderColors(data) {
    for (const currColor of data) {

        const newColor = document.createElement('div');
        newColor.classList.add('color-scheme-box');
        newColor.style.background = currColor.hex.value;
        colorConatinerEl.appendChild(newColor);

        const number = document.createElement('div');
        number.classList.add('color-code');
        number.textContent = currColor.hex.value;
        codeContainerEl.appendChild(number);

    }
}