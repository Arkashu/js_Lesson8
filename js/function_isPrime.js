function isPrime (num){
    for (let i = 2; i < num; i++) {
        if (num % i ===0){
            return false;
        }
    }
    return true;
}
let number = +prompt('Введите число')
console.log(isPrime(number))
