//Реалізувати рекурсивну функцію, яка зводить число в ступінь.

//   Число, яке треба піднести до ступеню,
//   передається як перший аргумент у функції;
//Ступінь передається як другий аргумент у
// функцію pow(num, degree).
const numberOfPrompt = prompt(`Enter number for exponentiation`)
const exponentiationOfPrompt = prompt(`Enter exponentiation`)
if (numberOfPrompt?.trim() && exponentiationOfPrompt ?.trim() &&
    !isNaN(+numberOfPrompt) && !isNaN(+exponentiationOfPrompt) &&
    exponentiationOfPrompt >= 0){
    const number1 = +numberOfPrompt
    const exponentiation1 = +exponentiationOfPrompt
    function recursivePow(number, exponentiation) {
        if (number === 0) return 1
        if (exponentiation === 0) return 1
        return number * recursivePow(number, (exponentiation - 1));
    }
    alert(recursivePow(number1, exponentiation1))
}
else {
    alert(`Entered number is not validation`)
}