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
// Получить строкове название дня недели по номеру 
//дня (let date = new Date(2019, 08, 26); // 26 сентября 2019 года)

function getStrDay(y, m, d) {
    let date = new Date(y, m, d)
    console.log(new Intl.DateTimeFormat('ru-RU', {
        weekday: 'long'
    }).format(date))
}
// getStrDay(2019, 08, 26)


// Вводим число (0-999) , получаем строку с прописью числа.


function numToWords(n) {
    let num1 = {
        0: 'ноль',
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять'
    }
    let num2 = {
        11: 'одиннадцать',
        12: 'двенадцать',
        13: 'тринадцать',
        14: 'четырнадцать',
        15: 'пятнадцать',
        16: 'шестнадцать',
        17: 'семнадцать',
        18: 'восемнадцать',
        19: 'девятнадцать'
    }
    let num3 = {
        10: 'десять',
        20: 'двадцать',
        30: 'тридцать',
        40: 'сорок',
        50: 'пятьдесят',
        60: 'шестьдесят',
        70: 'семьдесят',
        80: 'восемьдесят',
        90: 'девяносто'
    }
    let num4 = {
        100: 'сто',
        200: 'двести',
        300: 'триста',
        400: 'четыреста',
        500: 'пятьсот',
        600: 'шестьсот',
        700: 'семьсот',
        800: 'восемьсот',
        900: 'девятьсот'
    }

    if (n < 100) {
        n1 = n % 10
        n2 = n - n1

        switch (true) {
            case (n < 10):
                return num1[n]

            case (n == 10):
                return num3[n]

            case (n > 20):
                return num3[n2] + ' ' + num1[n1]

            case (n > 19):
                return num3[n]

            case (10 < n < 20):
                return num2[n]
        }
    } else if (n < 1000) {
        n1 = n % 100
        n2 = n1 % 10
        n3 = n1 - n2
        n4 = n - n1

        switch (true) {
            case (n1 === 0):
                return num4[n]

            case (n1 in num3):
                h = n - n1
                return num4[h] + ' ' + num3[n1]

            case (n1 === 10 | n1 in num3):
                h = n - n1
                return num4[h] + ' ' + num3[n1]

            case (n1 < 10):
                h = n - n2
                return num4[h] + ' ' + num1[n2]

            case (n1 > 20):
                return num4[n4] + ' ' + num3[n3] + ' ' + num1[n2]

            case (10 < n1 < 20):
                h = n - n1
                return num4[h] + ' ' + num2[n1]
        }
    } else if (n < 0 && n > 999) {
        console.log('введите число в диапозоне от 0 до 999')
    }
}

// console.log(numToWords(301))
// console.log(numToWords(311))
// console.log(numToWords(320))
// console.log(numToWords(321))
// console.log(numToWords(2))
// console.log(numToWords(0))
// console.log(numToWords(11))
// console.log(numToWords(10))



//Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число (Ввели девятьсот девяносто девять = получаем 999) (аналогично только наоборот)  

function wordsToNums(n) {
    let units = {
        'ноль': 0,
        'один': 1,
        'два': 2,
        'три': 3,
        'четыре': 4,
        'пять': 5,
        'шесть': 6,
        'семь': 7,
        'восемь': 8,
        'девять': 9
    }
    let moreThenUnits = {
        'одиннадцать': 11,
        'двенадцать': 12,
        'тринадцать': 13,
        'четырнадцать': 14,
        'пятнадцать': 15,
        'шестнадцать': 16,
        'семнадцать': 17,
        'восемнадцать': 18,
        'девятнадцать': 19
    }
    let dozens = {
        'десять': 10,
        'двадцать': 20,
        'тридцать': 30,
        'сорок': 40,
        'пятьдесят': 50,
        'шестьдесят': 60,
        'семьдесят': 70,
        'восемьдесят': 80,
        'девяносто': 90
    }
    let hundreds = {
        'сто': 100,
        'двести': 200,
        'триста': 300,
        'четыреста': 400,
        'пятьсот': 500,
        'шестьсот': 600,
        'семьсот': 700,
        'восемьсот': 800,
        'девятьсот': 900
    }
    let arr1 = n.split(' ')
    let arr2 = []
    let i = 0
    while (i <= arr1.length) {
        if (arr1[i] in units) {
            arr2.push(units[arr1[i]])
        } else if (arr1[i] in moreThenUnits) {
            arr2.push(moreThenUnits[arr1[i]])
        } else if (arr1[i] in dozens) {
            arr2.push(dozens[arr1[i]])
        } else if (arr1[i] in hundreds) {
            arr2.push(hundreds[arr1[i]])
        }
        i++
    }
    let result = arr2.reduce((sum, current) => sum + current, 0)
    console.log(result)
}

// wordsToNums('двести двадцать три')
// wordsToNums('ноль')
// wordsToNums('двенадцать')
// wordsToNums('двести двенадцать')

// Найти расстояние между двумя точками в двумерном декартовом пространстве


function distance(a, b) {
    let result = Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2))
    console.log(result)
}
// distance([4, 3], [9, 7])


// Вводим число (до 999 миллиардов) , получаем строку с прописью числа.



// Найти минимальный элемент массива
function minElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i]
        }
    }
    console.log(arr[0])
}
// minElem([10, 23, 124, 22, 11, 4, 5])
// Найти максимальный элемент массива
function maxElem(arr) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > arr[0]) {
            arr[0] = arr[i]
        }
    console.log(arr[0])
}
// maxElem([10, 23, 124, 22, 11, 4, 5])

//нашел метод по-удобнее)  
// console.log(Math.min.apply(null, [10, 23, 124, 22, 11, 4, 5]))
// console.log(Math.max.apply(null, [10, 23, 124, 22, 11, 4, 5]))


// Найти индекс минимального элемента массива
function minIndex(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            minInd = i
            min = arr[i]
        }
    }
    console.log(minInd)
}
// minIndex([10, 23, 124, 22, 11, 4, 5])

// Найти индекс максимального элемента массива
function maxIndex(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            maxInd = i
            max = arr[i]
        }
    }
    console.log(maxInd)
}
// maxIndex([10, 23, 124, 22, 11, 4, 5])


function minIndex2(arr) {
    arr.indexOf(Math.min.apply(null, arr))
}
// minIndex([10, 23, 124, 22, 11, 4, 5])    чего-то я сразу до этого способа не додумался :)


// Посчитать сумму элементов массива с нечетными индексами
function sumOddIndexes(arr) {
    let Arr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            Arr.push(arr[i])
        }
    }
    console.log(`элементы с нечетными индексами ${Arr}`)
    let result = Arr.reduce((sum, current) => sum + current, 0)
    console.log(`сумма этих элементов ${result}`)
}
// sumOddIndexes([10, 23, 124, 22, 11, 4, 5, 7])


// Сделать реверс массива
function rvrs(arr) {
    reverseArr = arr.reverse()
    console.log(reverseArr)
}
// rvrs([1, 2, 3, 4])


// Посчитать количество нечетных элементов массива
function amountOddNums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr.shift(arr[i])
        }
    }
    console.log(arr.length)
}

// amountOddNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13])


// Поменять местами первую и вторую половину массива , 1 2 3 4 = 3 4 1 2
function changeHalf(arr) {
    if (arr.length % 2 == 0) {
        middle = arr.length / 2 - 1
    } else {
        middle = arr.length / 2 - 0.5
    }
    let firstHalf = arr.splice(0, arr[middle])
    let result = arr.concat(firstHalf)
    console.log(result)
}
// changeHalf([1, 2, 3, 4])



//Сортировка массива пузырьком

function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let bigger = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = bigger
            }
        }
    }
    console.log(arr)
}
bubbleSort([1, 3, 61, 23, 5, 6, 2])
