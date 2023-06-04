let clicks = 0;

const TIMEOUT = 10000; //таймер 10 секунд

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

button.onclick = clicker;

function clicker() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null; //останавливаем нажатия на кнопку
        display.textContent = 'Игра окончена!';

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return (ms/1000).toFixed(2);
}