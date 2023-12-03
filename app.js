const countDown = new Date("Dec 25, 2023, 00:00:00:00").getTime();
const daysUpdate = document.getElementById('days');
const hoursUpdate = document.getElementById('hours');
const minutesUpdate = document.getElementById('minutes');
const secondsUpdate = document.getElementById('seconds');

const countUpdate = setInterval(function(){
    const currentDate = new Date().getTime();
    const timeUntilDate = countDown - currentDate;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;

    const daysLeft = Math.floor(timeUntilDate / day)
    const hoursLeft = Math.floor((timeUntilDate % day) / hour);
    const minutesLeft = Math.floor((timeUntilDate % hour) / minute);
    const secondsLeft = Math.floor((timeUntilDate % minute) / 1000);

    daysUpdate.innerHTML = daysLeft
    hoursUpdate.innerHTML = hoursLeft
    minutesUpdate.innerHTML = minutesLeft
    secondsUpdate.innerHTML = secondsLeft
}, 1000); 