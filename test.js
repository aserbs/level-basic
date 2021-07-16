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
function task1(a, b) {
    if (a % 2 === 0) {
        console.log(a * b)
    } else {
        console.log(a + b)
    }
}
task1(4, 5)

//task2
function task2(x, y) {
    if (x > 0 & y > 0) {
        console.log('точка с координатами (' + x + ',' + y + ') пренадлежит первой четверти')
    } else if (x < 0 & y > 0) {
        console.log('точка с координатами (' + x + ',' + y + ') пренадлежит второй четверти')
    } else if (x < 0 & y < 0) {
        console.log('точка с координатами (' + x + ',' + y + ') пренадлежит третьей четверти')
    } else if (x > 0 & y < 0) {
        console.log('точка с координатами (' + x + ',' + y + ') пренадлежит четвертой четверти')
    } else {
        console.log('точка не пренадлежит ниодной четверти ')
    }
}
task2(2,1)
task2(-2,1)
task2(-2,-1)
task2(2,-1)
task2(0,0)

//task3
function task3(a, b, c) {
    if (a > 0 & b > 0 & c > 0) {
        console.log(a + b + c)
    } else if (a > 0 & b > 0) {
        console.log(a + b)
    } else if (a > 0 & c > 0) {
        console.log(a + c)
    } else {
        console.log(b + c)
    }
}

task3(-1,2,3)
task3(1,-2,3)
task3(1,2,-3)

//task4
function task4(a, b, c) {
    if (((a * b * c) + 3) > ((a + b + c) + 3)) {
        console.log('max a*b*c+3')
    } else if (((a + b + c) + 3) > ((a * b * c) + 3)) {
        console.log('max a+b+c+3')
    } else {
        console.log('при данных значиниях, уравнения равны')
    }
}
task4(-4,2,3)

// task5
function task5(a) {
    if (a <= 19) {
        console.log('F')
    } else if (a <= 39) {
        console.log('E')
    } else if (a <= 59){
        console.log('D')
    } else if (a <= 74) {
        console.log('C')
    } else if (a <= 89){
        console.log('B')
    } else {
        console.log('A')
    }
}
task5(6)
task5(26)
task5(46)
task5(66)
task5(76)
task5(100)