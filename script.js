const arrow = document.querySelector('.circle__inner');
const startBtn = document.querySelector('.buttons__start');
const deleteBtn = document.querySelector('.buttons__delete');
let btns = document.querySelector('.buttons');
let seconds = document.querySelector('.seconds');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
const ball = document.querySelector('.ball');
let currentSeconds = 00;
let currentHours = 00;
let currentMinutes = 00;
let degrees = 0;
let interval;

btns.addEventListener('click', handleClick)

function handleClick() {
    let target = event.target.dataset.click;
    if(!target) return;
    window[target]()
}

function start() {
    interval = setInterval(time, 166);
    ball.classList.add('shadow');
    startBtn.firstElementChild.src = './img/pause.svg';
    startBtn.dataset.click = 'stopTime';
};

function stopTime() {
    clearInterval(interval);
    ball.classList.remove('shadow');
    startBtn.firstElementChild.src = './img/play.svg';
    deleteBtn.style.display = 'inline';
    startBtn.dataset.click = 'start';
}

function deleteTime() {
    deleteBtn.style.display = 'none';
    currentSeconds = 0;
    currentHours = 0;
    currentMinutes = 0;
    degrees = 0;
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
    arrow.style.transform = 'rotate(' + 0 + 'deg)';
}

function time() {
    degrees++;
    if(degrees % 6 == 0) {
        currentSeconds++;

        if(currentSeconds < 10) {
            currentSeconds = '0' + currentSeconds;
        }

        if(currentSeconds == 60) {
            currentSeconds = '0' + '0';
            currentMinutes++;
            if(currentMinutes < 10) {
                currentMinutes = '0' + currentMinutes;
            }
            minutes.textContent = currentMinutes;
        }

        if(currentMinutes == 60) {
            currentMinutes = '0' + '0';
            currentHours++;
            if(currentHours < 10) {
                currentHours = '0' + currentHours;
            }
            hours.textContent = currentHours;
        }
        seconds.textContent = currentSeconds;
    }
    arrow.style.transform = 'rotate(' + degrees + 'deg)';
};
