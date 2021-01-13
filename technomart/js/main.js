"use strict";

var arrShopCart = new Array(6);
var numberShopCart = 0;

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomUrl() {
    let arrUrl = ['bosch-2000', 'bosch-3000', 'bosch-6000', 'bosch-9000', 'makita-td-110'];
    return 'img/catalog/' + arrUrl[getRandomNumber(0, arrUrl.length)] + '.jpg';
}

function getRandomBrand() {
    let arrBrand = ['BOSCH', 'Makita', 'Vagner', 'Mega', 'Proline'];
    return arrBrand[getRandomNumber(0, arrBrand.length)];
}

function getRandomTitle() {
    let arrTitle = ['Перфоратор BOSCH BFG 2000', 'Перфоратор BOSCH BFG 3000', 'Перфоратор BOSCH BFG 6000', 'Перфоратор BOSCH BFG 9000', 'Шуруповерт Makita TD-110'];
    return arrTitle[getRandomNumber(0, arrTitle.length)];
}

function getPrice() {
    return getRandomNumber(5000,20000);
}

function getDiscount(price) {
    price = price * 1.15;
    return Math.round(price/500) * 500;
}

function getFlag() {
    let arrFlag = ['new', 'promo'];
    return arrFlag[getRandomNumber(0, arrFlag.length)];
}

function getIsElectric() {
    let arrIsElectric = [true, false]
    return arrIsElectric[getRandomNumber(0, arrIsElectric.length)];
}

for (let i = 0; i < arrShopCart.length; i++) {
    arrShopCart[i] = {
        url: getRandomUrl(),
        brand: getRandomBrand(),
        title: getRandomTitle(),
        price: getPrice(),
        flag: getFlag(),
        isElectric: getIsElectric()
    }
}
console.log(arrShopCart);