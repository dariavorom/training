// Task1
let x = 6;
let y = 15;
let z = 4;
let result1 = x += y - x++ * z;
document.getElementById("task1_1").innerHTML = "ответ: " + result1;
let result2 = z = -- x - y * 5;
document.getElementById("task1_2").innerHTML = "ответ: " + result2;
let result3 = y /= x + 5 % z;
document.getElementById("task1_3").innerHTML = "ответ: " + result3;
let result4 = z = x++ + y * 5;
document.getElementById("task1_4").innerHTML = "ответ: " + result4;
let result5 = x = y - x++ * z;
document.getElementById("task1_5").innerHTML = "ответ: " + result5;

// Task2
let num1 = document.getElementById("task2_1");
let num2 = document.getElementById("task2_2");
let num3 = document.getElementById("task2_3");
let resultTask2 = document.getElementById("answer2");
document.getElementById("task2-result").addEventListener("click", countTask2);
function countTask2 () {
    resultTask2.value = Math.round(((+num1.value + +num2.value + +num3.value)/3)*100)/100;
}

// Task3
document.getElementById("task3-result").addEventListener("click", countTask3);
function countTask3 () {
    let r = document.getElementById("task3_1");
    let h = document.getElementById("task3_2");
    let v = document.getElementById("answer3_1");
    let s = document.getElementById("answer3_2");
    v.value = Math.round((Math.PI * + r.value * 2 * +h.value)*100)/100;
    s.value = Math.round((2 * Math.PI * +r.value * (+r.value + +h.value))*100)/100;
}

// Task4
document.getElementById("task4-result").addEventListener("click", countTask4);
function countTask4 () {
    let a = document.getElementById("task4_1");
    let b = document.getElementById("task4_2");
    let answerTask4 = document.getElementById("answer4_1");
    let answerTask4_2 = document.getElementById("answer4_2");
    let sum = 0;
    let arr = [];
    for ( let i = +a.value; i <= +b.value; i++) {
        sum += i;
        if ( i % 2 !== 0 ) {
            arr.push(i);
        }

    }
    answerTask4.value = sum;
    answerTask4_2.value = arr;

}

// Task5
document.getElementById("task5-result").addEventListener("click", countTask5);
function countTask5 () {
    let shops = document.getElementById("task5_1");
    let answerTask5 = document.getElementById("answer5");
    let variant = 1;
    do {
        variant = variant * +shops.value--;
    } while (+shops.value) {
        answerTask5.value = variant;
    }
}

// Task6
function rectangle () {
    for ( let i = 0; i <= 9; i ++) {
        let rectangle = document.getElementById("rectangle");
        rectangle.style.marginBottom = "25px";
        let p = document.createElement('p');
        p.style.margin = "0";
        p.innerHTML = "*".repeat(35);
        rectangle.appendChild(p);
    }
}
function rightTriangle () {
    let rTriangle = document.getElementById("rightTriangle");
    rTriangle.style.marginBottom = "25px";
    for ( let i = 0; i <= 15; i ++) {
        let p = document.createElement('p');
        p.style.margin = "0";
        p.innerHTML = "*".repeat(i);
        rTriangle.appendChild(p);
    }
}
function equilateralTriangle () {
    let eTriangle = document.getElementById("equilateralTriangle");
    eTriangle.style.marginBottom = "25px";
    for (let i = 0; i <= 15; i++) {
        let width = 16;
        let space = "";
        let star = "";
        for (let j = 0; j < width - i; j++) {
            space += " &nbsp";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            star += "*";
        }
        let p = document.createElement("p");
        p.style.margin = "0";
        p.innerHTML = space + star;
        eTriangle.appendChild(p);
    }
}
function rhombus () {
    let rhombus = document.getElementById("rhombus");
    let num = 9;
    for (let i = 0; i <= 8; i++) {
        let space = "";
        let star = "";
        for (let j = 0; j < num - i; j++) {
            space += " &nbsp";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            star += "*";
        }
        let p = document.createElement("p");
        p.style.margin = "0";
        p.innerHTML = space + star;
        rhombus.appendChild(p);
    }
    for (let i = 7; i >= 0; i--) {
        let space = "";
        let star = "";
        for (let j = 0; j < num - i; j++) {
            space += " &nbsp";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            star += "*";
        }
        let p = document.createElement("p");
        p.style.margin = "0";
        p.innerHTML = space + star;
        rhombus.appendChild(p);
    }
}
rectangle ();
rightTriangle ();
equilateralTriangle ();
rhombus();

// Task7
document.getElementById("task7-result").addEventListener("click", countTask7);
function countTask7 () {
    let arrSize = document.getElementById("task7_1").value;
    let arr =  new Array(+arrSize).fill().map(el => el = Math.floor(Math.random() * 100));
    let arrShow = document.getElementById("answer7_1");
    arrShow.value = arr;
    //Наибольшее значение массива
    let max = Math.max.apply(Math, arr);
    let arrMax = document.getElementById("task7_2");
    arrMax.value = max;
    //Наименьшее значение массива
    let min = Math.min.apply(Math, arr);
    let arrMin = document.getElementById("task7_3");
    arrMin.value = min;
    //Общая сумму элементов
    let sum = arr.reduce((a, b) => a + b)
    let arrSum = document.getElementById("task7_4");
    arrSum.value = sum;
    //Среднее арифметическое всех элементов
    let average = arr.reduce((a, b) => (a + b)) / arr.length;
    let arrAverage = document.getElementById("task7_5");
    arrAverage.value = Math.round(average*100)/100;
    //Все нечетные значения
    let odd = arr.filter(el => el % 2 !== 0);
    let arrOdd = document.getElementById("task7_6");
    arrOdd.value = odd;
}
//Task8
let arr = new Array(5);
arr[0] = [2,5,6,7,8];
arr[1] = [-1,-3,9,2,0];
arr[2] = [2,5,-4,7,0];
arr[3] = [2,7,0,9,5];
arr[4] = [2,3,6,-5,7];
let arrSource = document.getElementById("arr");
let arrNew = document.getElementById("newArr");
function styles (el) {
    el.style.cssText  = `
    border: 1px solid black;
    width: 150px;
    text-align: center;
    font-size: 22px;
`
}
styles(arrSource);
styles(arrNew);
for ( let i = 0; i < arr.length; i++) {
    let p = document.createElement("p")
    p.innerHTML = arr[i].toString().split(',').join(' ');
    arrSource.appendChild(p)
}
for ( let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i === j) {
            if (arr[i][j] < 0) {
                arr[i][j] = 0;
            } else  {
                arr[i][j] = 1;
            }
        }
    }
    let p = document.createElement("p")
    p.innerHTML = arr[i].toString().split(',').join(' ');
    arrNew.appendChild(p);
}

//Task9
document.getElementById("task9-result").addEventListener("click", countTask9);
function countTask9 () {
    let vector = document.getElementById("task9_1").value.split(' ');
    let average = vector.reduce((a, b) => (+a + +b)) / vector.length;
    let vectorAverage = document.getElementById("task9_2");
    vectorAverage.value = Math.round(average*100)/100;
    let arr = vector.filter(n => n > average);
    let quantity = document.getElementById("task9_3");
    quantity.value = arr.length;

}