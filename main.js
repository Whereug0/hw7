// 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами



// const myBrowser = {
//     name: "Chrome",
//     version: "9.2"
// }

// const myBrowser = new Object({name: "Chrome", version: "9.2"})

// 2) Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов) и ticketCost (цена билета) и задайте значения. Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.


// const cinema = {
//     soldtickets: 10,
//     ticketCost: 20
// }

// function a(b, c) {
//     return b*c
// }

// let sum = a(cinema.soldtickets,cinema.ticketCost)

// console.log(sum)


// 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида [[key, value], [key, value]]. То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()

// const obj = {
//     a:1,
//     b:2
// }

// function objectToArr(obj) {
//     return Object.entries(obj)
// }

// console.log(objectToArr(obj))



// 4) Дан объект. Нужно извлечь число 123 одной строкой

// const myCrazyObject = {
//     someArray: [7,9, {purpose: "путаница", number: 123 }, 3.3],    
// }

// console.log(myCrazyObject.someArray[2].number)


// 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()

// const object = {
//     name: "silvi",
//     age: 21
// }

// function a() {
//     return Array.isArray(object)
// }

// console.log(a())

// 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.


// let arr = ['john', 'jane', 'kate', 'peter']
// let mappedArr = arr.map(item => ( item = item.charAt(0).toUpperCase() + item.slice(1)
// ))


// console.log(mappedArr)

// 7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное. Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.

// const arr = []

// function range(a,b) {
//     for (let i = a; i<=b; i++) {
//         arr.push(i)
//     }

// }
// range(1,7)

// let result = 0
// function sum(arr) {
//     return arr.forEach(i => {
//         result += i
//     });
// }

// sum(arr)

// console.log(result)


// 8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект

// const a = 587

// const obj = {}

// function culk(num) {
//     obj.floor = Math.floor(Math.sqrt(num))
//     obj.ceil = Math.ceil(Math.sqrt(num))

// }
// culk(a)



// console.log(obj)

// 9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in

// const obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// }

// for (const s in obj) {
//     console.log(`${s} -  это ${obj[s]}.`)
// }


