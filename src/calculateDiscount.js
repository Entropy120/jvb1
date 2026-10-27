function calculateDiscount(price, isMember, dayOfWeek) {
    if (price <= 0) {
        return "Некорректная цена";
    }

    
    let discount = 0;
    if (isMember) {
        discount = 10;
    }
    if (dayOfWeek === 'пятница') {
        discount = Math.max(discount, 15);
    }


    return price * (1 - discount / 100);
}


console.log(calculateDiscount(1000, false, 'среда'));
console.log(calculateDiscount(1000, true, 'среда'));
console.log(calculateDiscount(1000, false, 'пятница'));
console.log(calculateDiscount(1000, true, 'пятница'));
console.log(calculateDiscount(-50, true, 'пятница'));