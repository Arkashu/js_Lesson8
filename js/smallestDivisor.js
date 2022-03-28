function smallestDivisor(num){
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return i;
        }
    }
    return  num;
}
let number = +prompt('Введите число');
console.log(smallestDivisor(number))