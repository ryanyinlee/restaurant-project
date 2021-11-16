'use strict'

const isItOpenSeattle = document.getElementById('openSeattle');
const isItOpenAustin = document.getElementById('openAustin');
const isItOpenTampa = document.getElementById('openTampa');
const isItOpenChicago = document.getElementById('openChicago');
const isItOpenBoston = document.getElementById('openBoston');

const date = new Date();
const day = date.getDay();
const myHour = date.getHours();
// const hour = day.getTimezoneOffset();
// const hour = myHour.getTimezoneOffset();


console.log(date, day, myHour);

function openYetSeattle() {
    if (day == '0' || day == '6') {
        if (hour > 9 && hour < 14) {
            isItOpenSeattle.textContent = 'OPEN';
        } else {
            isItOpenSeattle.textContent = 'CLOSED';
        }
    } else {
        if (hour > 7 && hour < 14) {
            isItOpenSeattle.textContent = 'OPEN';
        } else {
            isItOpenSeattle.textContent = 'CLOSED';
        }
    }
}
//GMT-6
function openYetAustin() {
    if (day == '0' || day == '6') {
        if (hour > 9 && hour < 14) {
            isItOpenAustin.textContent = 'OPEN';
        } else {
            isItOpenAustin.textContent = 'CLOSED';
        }
    } else {
        if (hour > 7 && hour < 14) {
            isItOpenAustin.textContent = 'OPEN';
        } else {
            isItOpenAustin.textContent = 'CLOSED';
        }
    }
}

function openYetTampa() {
    if (day == '0' || day == '6') {
        if (hour > 9 && hour < 14) {
            isItOpenTampa.textContent = 'OPEN';
        } else {
            isItOpenTampa.textContent = 'CLOSED';
        }
    } else {
        if (hour > 7 && hour < 14) {
            isItOpenTampa.textContent = 'OPEN';
        } else {
            isItOpenTampa.textContent = 'CLOSED';
        }
    }
}

function openYetChicago() {
    if (day == '0' || day == '6') {
        if (hour > 9 && hour < 14) {
            isItOpenChicago.textContent = 'OPEN';
        } else {
            isItOpenChicago.textContent = 'CLOSED';
        }
    } else {
        if (hour > 7 && hour < 14) {
            isItOpenChicago.textContent = 'OPEN';
        } else {
            isItOpenChicago.textContent = 'CLOSED';
        }
    }
}

function openYetBoston() {
    if (day == '0' || day == '6') {
        if (hour > 9 && hour < 14) {
            isItOpenBoston.textContent = 'OPEN';
        } else {
            isItOpenBoston.textContent = 'CLOSED';
        }
    } else {
        if (hour > 7 && hour < 14) {
            isItOpenBoston.textContent = 'OPEN';
        } else {
            isItOpenBoston.textContent = 'CLOSED';
        }
    }
}




openYetSeattle();
openYetAustin();
openYetTampa();
openYetChicago();
openYetBoston();



