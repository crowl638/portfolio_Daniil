let image = ["img/slider.def.png",
    "img/slider1.2.jpg",
    "img/slider1.3.jpg"]

let slide = document.getElementById("slider-img")
let index = 0

function next_img() {

    index++;
    if (index >= image.length) {
        index = 0
    }
    slide.src = image[index];
}

function prev_img() {
    index--;
    if (index < 0) {
        index = image.length - 1;

    }
    slide.src = image[index];
}

function auto_slide() {
    next_img();
}

setInterval(auto_slide, 3000);





let runBtn = document.getElementById("run_button");

runBtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    runBtn.style.left = `${x}px`;
    runBtn.style.top = `${y}px`;
})




let scrollToTopBtn = document.getElementById("scrollToTop");

// Отслеживаем прокрутку страницы
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Если прокрутили 300px вниз
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Добавляем клик для возврата наверх
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});




document.querySelector('.smart-button').addEventListener('click', function () {
    this.classList.add('clicked');

    setTimeout(() => {
        this.classList.remove('clicked');
    }, 3000);
});



/*burger.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    console.log("yes")
})
*/
document.addEventListener("click", (event) => {
    if (!event.target.closest("header")) {
        menu.classList.remove("active");
    }

})






let burger = document.getElementById("burger");
let menu = document.querySelector(".nav_menu");
let content = document.querySelector(".content1");

burger.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.style.height = "0px";
        content.style.marginTop = "0px";
        console.log("1");
        //дальше здесь пишешь значение для закрытия окна (обнуление высоты меню и верхнего отступа у контента) 
    }
    else {
        menu.style.height = menu.scrollHeight + "px";
        content.style.marginTop = menu.scrollHeight + "px";
        //здесь - для открытия окна}
        console.log("2");
    }
    menu.classList.toggle("active");
    console.log("0");

})
let modal_card = document.querySelector(".modal-card");
let modal_cont_card = document.querySelector(".modal-content-card");
let modal_btn = document.querySelector(".modal-btn");

let modal = document.querySelector(".modal");
let modal_cont = document.querySelector(".modal-content");
let close = document.querySelector(".close");
let isModal = false;


modal_btn.addEventListener("click", () => {
   
        modal.style.display = "flex";
        isModal = true;
        document.body.style.overflowY = "hidden";
    
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
    isModal = false;
    document.body.style.overflowY = "visible";
})

modal_cont.addEventListener("click", (event) => {
    event.stopPropagation();
})




modal_btn.addEventListener("click", (event) => {
    if (event.type) {
        modal_card.style.display = "flex";
        document.body.style.overflowY = "visible"

    }

});


let photo_games = ["img/mario.avif",
    "img/flappy_bird.webp",
    "img/sonic.png"];


    /*
let crcl= document.getElementById("circle");
document.addEventListener("mousemove", function(event) {

    crcl.style.left = `${event.pageX-15}px`;
    crcl.style.top = `${event.pageY-15}px`;
});
*/




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
// Massive zadachki
/*
let a = [42, 12, 5, 211, 87, 24, 63];
let min = 10000000000;
let max = 0;

for(let i = 0; i<a.length; i++){
    if (a[i]<min){
        min = a[i];
    }
    if (a[i]>max){
        max = a[i];
    }
    if (a[i]%2==0){
        a[i]*=2;
    }
}
console.log(min, max);
for(let i = 0; i<a.length; i++){
    console.log(a[i]);
}


a=[];
b=[]; //Длина массива выбирается случайным образом от 5 до 10
c=[];

// Массивы заполняются случайными числами от 1 до 100
// Нужно вывести массив "c", с суммой i элемента массива

let l = Math.floor(Math.random()*(10-5+1))+5; //Длина массивов //Math.floor(Math.random()*(max-min+1))+min

for(let i = 0; i<l; i++){
    a[i]=(Math.floor(Math.random()*100)+1);
    b[i]=(Math.floor(Math.random()*100)+1);
    c[i]=a[i]+b[i];
}

console.log(a);
console.log(b);
console.log(c)
*/

/*
//11. В заданном одномерном  массиве, состоящем из n  целых чисел, 
//  подсчитать количество четных элементов. 
*/
/*
let a=[];
let k=0
let n=prompt("Введите колчиество чисел",5);

for(let i=0; i<n;i++){
    a[i]=(Math.floor(Math.random()*(100-(-100)+1))-100);
    if (a[i]%2==0 && a[i]>0){
        k++
    }
}
console.log(a);
console.log(k);
*/


//код для изменения цвета фона
/*
let color_array=["yellow","pink", "red", "green"];
k=0
function color_(){
   document.body.style.backgroundColor = color_array[k];
   k++;
}
*/


//код для добавления элементов li на страницу
/*
let a=[1, 500, 42,45,566, 5343,4343, "Hello world!"];

let listElement = document.getElementById("numberList");

for (let i=0; i<a.length;i++){
   let listItem = document.createElement("li");
   listItem.textContent=a[i]
   listElement.appendChild(listItem)
}
*/
/*
//перебор всех тегов p на сайте и вывод текстового контента послднего тега
/*
let title = document.querySelectorAll("p");

a=[4,56,7,8]//длина - 4, а номер последнего элемента 4-1

console.log(title[title.length-1].textContent)
*/

//Кнопка меняет цвет фона на сайте

let color_array = ["yellow", "pink", "red", "green", "black"];
k = 0
function col() {
    document.body.style.backgroundColor = color_array[k];
    k++;
    if (k > color_array.length - 1) {
        k = 0
    }
}


let form = document.getElementById("myForm");
let status1 = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    tel: form.tel.value,
    service: form.service.value,
    connect: form.connect.value
  };

  try {
    await fetch("https://docs.google.com/spreadsheets/d/1LTyvF6SIV2rXCByPPuSsyMob2o33DeVeODag-64pvL8/edit?usp=sharing", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    status1.textContent = "Отправлено!";
    form.reset();
  } catch (err) {
    console.log(err);
    status1.textContent = "Ошибка отправки";
  }
});






