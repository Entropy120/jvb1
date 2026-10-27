function findFirstPrime(n) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }


    let candidate = Math.floor(n) + 1;
    while (true) {
        if (isPrime(candidate)) {
            return candidate;
        }
        candidate++;
    }
}


console.log(findFirstPrime(10));
console.log(findFirstPrime(14));
console.log(findFirstPrime(20)); 