//1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function perfect(number) {
    var a = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            a += i;
        }
    }
    if (a === number && a !== 0) {
        console.log ('It is a perfect number.');
    } else {
        console.log ('It is not a perfect number.');
    }
}
perfect(28);

//2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function getPerfect(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
        sum = 0;
    for (let n = 1; n <= i/2; n++) {         
        if (i % n === 0) sum += n;
            } 
            if (i === sum) result.push(i);
        }
        return result;
    }
    console.log(getPerfect(1, 10000));