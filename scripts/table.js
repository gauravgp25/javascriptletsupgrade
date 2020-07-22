console.log("Table");

const num = +prompt("Enter a number you want the table of : ", 5);
const tables = document.getElementById("table");
for (let i = 1; i <= 10; i++) {
    tables.innerHTML += `<br> ${num}  x  ${i}  =  ${i*num} <br>`;
}