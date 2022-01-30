//1 Напиши всі можливі варіанти створення функцій.
function showMessage() {
    let message = "Привет, я JavaScript!"; 
    alert( message );
  }
  showMessage(); 

  let userName = 'Вася';
  function showMessage() {
    let message = 'Привет, ' + userName;
    alert(message);
  }
  showMessage();

let userName = 'Вася';
function showMessage() {
  userName = "Петя"; 
  let message = 'Привет, ' + userName;
  alert(message);
}
alert( userName );
showMessage();
alert( userName );

//2 Створи функцію, яка буде виводити кількість переданих їй аргументів.
function myConcat(separator) {
    let result = '';
    let i;
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result; 
 }
 console.log(myConcat());

/*3 Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/
function min(a, b) {
    if (b > a)  { 
      return -1;
    }
     if (a>b) { 
       return 1;
    }
      { 
        return 0;
     }
  }
  console.log(min(2, 7));
  console.log(min(9, 5));
  console.log(min(7, 7));
  

//4 Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  alert( factorial(5) ); 

//5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function min(a = '1', b = '4', c = '9') {
    return a + b + c;  
  }
  console.log(min());
//6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function min(a, b) {
    if (a) { 
        return a * a;
     } if (a !== b)  { 
       return a * b;
     }
   }
   console.log(min(3));
   console.log(min(5,5));
 
   
  
  