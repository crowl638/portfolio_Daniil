//let a = document.getElementsByClassName("hlink");
/*
console.log(a);

 

let a = prompt("Введите число:");
let b = prompt("Как вас зовут?");

alert(`Вы ввели число - ${a}. Добро пожаловать, ${b}`);
*/
/*
let a = prompt("Введите длину 1-го катета: ");
let b = prompt("Введите длину 2-го катета:");

alert(`Гипотенуза равна:  ${Math.sqrt(Math.pow(a,2)+b*b)}`)
*/

/*let year = prompt("Введите год: ", 2024);
if (year % 4 == 0 && year % 100 != 0) {
    alert("True");
} else {
    alert("False");}
*/
let a = prompt("Введите длину прямоугольника: ");
let b = prompt("Введите ширину прямоугольника: ");

console.log('Периметр прямоугольника равен: ', a*2+b*2);

let c = prompt("Введите ваш возраст: ");
if (c < 18) {
    console.log("Привет, мой юный друг!");
} else {
    console.log("Добро пожаловать!");
}

let n=prompt("Введите границу: ");

for(let i=0;i<=n; i++){
    if(i%3==0){
        console.log(i);
    }
}   


