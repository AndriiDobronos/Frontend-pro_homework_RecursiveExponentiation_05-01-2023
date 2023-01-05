//Реалізувати рекурсивну функцію, яка зводить число в ступінь.

//   Число, яке треба піднести до ступеню,
//   передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у
// функцію pow(num, degree).
const numberOfPrompt = prompt(`Enter number for exponentiation`)
const exponentiationOfPrompt = prompt(`Enter exponentiation`)
if (numberOfPrompt === null || numberOfPrompt.trim() === "" ||
exponentiationOfPrompt === null || exponentiationOfPrompt .trim() === "" ||
isNaN(+numberOfPrompt) === true || isNaN(+exponentiationOfPrompt) === true) {
    alert(`Entered number is not validation`)
}
/*
if (!number ?.trim() || !exponentiation ?.trim()){
    alert(`Entered number is not validation`)
}  */
const number = +numberOfPrompt
const exponentiation = +exponentiationOfPrompt
function recursivePow(number, exponentiation) {
    if (number === 0) return 1
    if (exponentiation === 0) return 1
    if (!number) return 0
    if (!exponentiation) return 0
    return number * recursivePow(number, (exponentiation - 1));
}
alert(recursivePow(number, exponentiation))
