
const clockTik = setInterval( function time(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');


    const timeStr = `${hour}:${minute}:${second}`; 

    hh.textContent = hour;
    mm.textContent = minute;
    ss.textContent = second;

}, 1000)

const date = new Date();

const hh = document.querySelector('.hour');
const mm = document.querySelector('.minute');
const ss = document.querySelector('.second');
const currDate = document.querySelector('.full-date');
const dayName = document.querySelector('.day');

let currDay = date.getDate();
let currMonth = String(date.getMonth() + 1).padStart(2, '0');
let currYear = date.getFullYear();

let dateStr =  `${currDay}-${currMonth}-${currYear}`;
currDate.textContent = dateStr;

let dName = date.toLocaleDateString('default', { weekday: 'long' });
dayName.textContent = dName;