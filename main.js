//let a = document.getElementsByClassName("hlink");

/*console.log(a);

 

let a = prompt("Введите число:");
let b = prompt("Как вас зовут?");

alert(`Вы ввели число - ${a}. Добро пожаловать, ${b}`);
*/

/*let a = prompt("Введите длину 1-го катета: ");
let b = prompt("Введите длину 2-го катета:");

alert(`Гипотенуза равна:  ${Math.sqrt(Math.pow(a,2)+b*b)}`)
*/

/*let year = prompt("Введите год: ", 2024);
if (year % 4 == 0 && year % 100 != 0) {
    alert("True");
} else {
    alert("False");}

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
*/

/*let n = prompt("Введите число: ")
let s = 0;
for(let i=1; i<=n; i++){
    if(i%4==0 || i%5==0){
        s+=i
    }

}
console.log(s);
*/


/*let n=prompt("Введите количество чисел: ");
let a;
let max=0;
let min=100000000000;
for(let i = 0; i<n; i++){
    a=prompt("Введите число: ");
    console.log(a)
    if(a>max){
        max=a;
    }
    if(a<min){
        min=a;
    }
}
console.log("Миниимальное число равно: ", min);
console.log("Максимальное число равно: ", max); 
*/

/*let a = prompt("Введите 1-е число: ");
let b = prompt("Введите 2-е число: ");

if(a%b==0){
    console.log("число", a ,"делится на", b ,"без остатка", a%b);
}
*/

/*let n = prompt("Введите количество чисел: ");
let sum3=0;
for(let i = 0; i<n; i++){
    x = Number(prompt("Введите число: ")) ;
    sum3+=x;
    console.log(sum3);
}
console.log("Среднее арифметическое: ", sum3/n);
*/



//Massive
/*let books = ['Гарри Поттер', '1984', 'Война и мир']; //объявление массива

books.push('Капитанская дочка');//push - добавить в конец массива, pop - удалить последний элемент массива
books.unshift('Евгений Онегин');//unshift - добавление элемента в начало массива, shift - удалить начальный элемент массива(нулевой элемент)
console.log(books[books.length-1]);//вывод последнего элемента



//console.log(Math.floor(Math.random()*+50)) //Math.floor(Math.random()*(max-min+1)+min)

let n=prompt('Кол-во чисел');
let sum=0;
let b=[];

for(let i=0; i<n; i++){
    b.push(Math.floor(Math.random()*10))
}

for(let i=0;i<b.length-1;i++){
    sum+=b[i]
}
console.log(b);
console.log(sum);
*/

//Объекты
/*let book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1950
}

console.log(book.author)
*/

// Программа находит факториал
/*
n = prompt("Введите число: ")
sum=1
for(let i = 1; i<=n; i++){
sum = sum*i;
}
console.log("Факториал равен: ",sum)
*/

