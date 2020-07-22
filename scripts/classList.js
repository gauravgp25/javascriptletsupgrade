let name = prompt("Enter your Name");

const getid = document.getElementById('demo');
getid.innerHTML = `Hey ${name} welcome to the web page`;

const getclockid = document.getElementById('time');

function displayClock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    getclockid.innerHTML = `The time is ${time}`;
}
setInterval(displayClock, 1000);

function darkmode() {
    changebody = document.body;
    changebody.classList.toggle("darkmode");
}