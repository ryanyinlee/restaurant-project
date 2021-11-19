'use strict'

const isItOpenSeattle = document.getElementById('openSeattle');
const isItOpenAustin = document.getElementById('openAustin');
const isItOpenTampa = document.getElementById('openTampa');
const isItOpenChicago = document.getElementById('openChicago');
const isItOpenBoston = document.getElementById('openBoston');

const date = new Date();
const day = date.getUTCDay();
const hours = date.getHours();
const hour = date.getUTCHours();

function openYetSeattle() {
    if (day == '0' || day == '6') {
        if (hour >= 16 && hour < 24) {
            isItOpenSeattle.textContent = 'OPEN';
        } else {
            isItOpenSeattle.textContent = 'CLOSED';
        }
    }
    else {
        if (hour >= 17 && hour < 24) {
            isItOpenSeattle.textContent = 'OPEN';
        } else {
            isItOpenSeattle.textContent = 'CLOSED';
        }
    }
}

function openYetAustin() {
    if (day == '0' || day == '6') {
        if (hour >= 15 && hour < 20) {
            isItOpenAustin.textContent = 'OPEN';
        } else {
            isItOpenAustin.textContent = 'CLOSED';
        }
    } else {
        if (hour >= 13 && hour < 20) {
            isItOpenAustin.textContent = 'OPEN';
        } else {
            isItOpenAustin.textContent = 'CLOSED';
        }
    }
}

function openYetTampa() {
    if (day == '0' || day == '6') {
        if (hour >= 13 && hour < 22) {
            isItOpenTampa.textContent = 'OPEN';
        } else {
            isItOpenTampa.textContent = 'CLOSED';
        }
    } else {
        if (hour >= 11 && hour < 21) {
            isItOpenTampa.textContent = 'OPEN';
        } else {
            isItOpenTampa.textContent = 'CLOSED';
        }
    }
}

function openYetChicago() {
    if (day == '0' || day == '6') {
        if (hour >= 14 && hour < 22) {
            isItOpenChicago.textContent = 'OPEN';
        } else {
            isItOpenChicago.textContent = 'CLOSED';
        }
    } else {
        if (hour >= 13 && hour < 20) {
            isItOpenChicago.textContent = 'OPEN';
        } else {
            isItOpenChicago.textContent = 'CLOSED';
        }
    }
}

function openYetBoston() {
    if (day == '0' || day == '6') {
        if (hour >= 14 && hour < 19) {
            isItOpenBoston.textContent = 'OPEN';
        } else {
            isItOpenBoston.textContent = 'CLOSED';
        }
    } else {
        if (hour >= 12 && hour < 19) {
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


function letMeIn() {
    for (let i = 0; i < 3; i += 1) {
        let userName = prompt('Username:');
        if (userName == 'YumYum') {
            for (let i = 0; i < 3; i += 1) {
                let passWord = prompt('Password:');
                if (passWord == 'ToastysRules!') {
                    break;
                } else {
                    alert('Wrong Password');
                }
            }
        } else {
            alert('Wrong Username');
        }
        location = 'index.html';
    }
}