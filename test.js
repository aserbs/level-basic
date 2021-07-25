// task1 Если а - четное посчитать a * b , иначе a + b 
// task2 Определить какой четверти принадлежит точка с координатами (х,у)
// task3 Найти суммы только положительных из трех чисел 
// task4 Посчитать выражение макс (а*б*с, а+б+с) +3 
// task5 Написать программу определения оценки студента по его рейтингу, на основе следующих правил
//  Рейтинг     Оценка
//  0-19           F
//  20-39          E
//  40-59          D
//  60-74          C
//  75-89          B
//  90-100         A

//task1
// function task1(a, b) {
//     if (a % 2 === 0) {
//         console.log(a * b)
//     } else {
//         console.log(a + b)
//     }
// }
// // task1(4, 5)

// //task2
// function task2(x, y) {
//     if (x > 0 & y > 0) {
//         console.log(`точка с координатами ${x}  ${y} ) пренадлежит первой четверти`)
//     } else if (x < 0 & y > 0) {
//         console.log('точка с координатами (' + x + ',' + y + ') пренадлежит второй четверти')
//     } else if (x < 0 & y < 0) {
//         console.log('точка с координатами (' + x + ',' + y + ') пренадлежит "третьей" четверти')
//     } else if (x > 0 & y < 0) {
//         console.log('точка с координатами (' + x + ',' + y + ') пренадлежит четвертой четверти')
//     } else {
//         console.log('точка не пренадлежит ниодной четверти ')
//     }
// }
// // task2(2, 1)
// // task2(-2, 1)
// // task2(-2, -1)
// // task2(2, -1)
// // task2(0, 0)

// //task3
// function task3(a, b, c) {
//     if (a > 0 && b > 0 && c > 0) {
//         console.log(a + b + c)
//     } else if (a > 0 && b > 0) {
//         console.log(a + b)
//     } else if (a > 0 && c > 0) {
//         console.log(a + c)
//     } else {
//         console.log(b + c)
//     }
// }

// // task3(-1, 2, 3)
// // task3(1, -2, 3)
// // task3(1, 2, -3)

// //task4
// function task4(a, b, c) {
//     if (((a * b * c) + 3) > ((a + b + c) + 3)) {
//         console.log('max a*b*c+3')
//     } else if (((a + b + c) + 3) > ((a * b * c) + 3)) {
//         console.log('max a+b+c+3')
//     } else {
//         console.log('при данных значиниях, уравнения равны')
//     }
// }
// // task4(-4, 2, 3)

// // task5

// function test(name) {
//     switch(name) {
//         case 'z': 
//         return console.log('AAAAAAAAAAAA')
//     }
// }

// function task5(ad) {
//     switch (true) {
//         case ad <= 19:
//             console.log('A');
//            break;
//         case ad <= 39:
//              console.log('B');
//             break;
//         case ad <= 59:
//              console.log('C');
//             break;
//         case ad <= 74:
//               console.log('D');
//             break;
//         case ad <= 89:
//              console.log('E');
//             break;
//     } 
// }

// task5(26)
// task5(46)
// task5(66)
// task5(76)
// task5(100)








// Найти сумму четных чисел и их количество в диапозоне от 1 до 99
let sum = 0
let count = 0
for (let a = 1; a < 99; a++) {
    if (a % 2 === 0) {
        sum += a
        count++
    }
}
console.log(`сумма четных чисел ${sum} и их количество ${count}`)


// Проверить простое ли число?
function simpleNum(b) {
    let flag = true
    for (let i = 2; i < b; i++) {
        if (b % i == 0) {
            flag = false
            break
        }
    }
    if (flag == true) {
        console.log(`число ${b} простое`)
    } else {
        console.log(`число ${b} обычное`)
    }
}
simpleNum(5)
simpleNum(12)

// Найти корень натурального числа с точностью до целого

function sqrt(num) {
    if (num < 2) {
        return num
    } else {
        let i = 1
        let res = 1
        do {
            i++
            res = i * i
        } while (res < num)
        if (res > num) {
            return i - 1
        } else {
            return i
        }
    }

}

console.log(sqrt(145))
console.log(sqrt(25))

//Вычислить факториал числа
function factorial(x) {
    if (x != 1) {
        return x * factorial(x - 1)
    } else {
        return 1
    }
}
console.log(factorial(3))
console.log(factorial(5))

//Посчитать сумму цифр заданого числа
function sumOfNums(x) {
    let sum = 0
    while (x) {
        y = x % 10
        x = (x - y) / 10
        sum += y
    }
    console.log(sum)
}
sumOfNums(129)
sumOfNums(12443)


// Вывести число, которое является зеркальным отображением последовательности цифр заданого числа, например задано число 123, вывести 321\
function opposite(num) {
    let num2 = 0
    let digit = 0
    while (num > 0) {
        digit = num % 10
        num2 = (num2 * 10) + digit
        num = num / 10 | 0
    } 
    console.log(num2)
}
opposite(123)