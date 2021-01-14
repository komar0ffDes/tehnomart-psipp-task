"use strict";

var SHOP_CART_COUNT = 6;

var arrBrand = ['BOSCH', 'Makita', 'Vagner', 'Mega', 'Proline'];
var arrUrl = ['bosch-2000', 'bosch-3000', 'bosch-6000', 'bosch-9000', 'makita-td-110'];
var arrTitle = [
	'Перфоратор BOSCH BFG 2000',
	'Перфоратор BOSCH BFG 3000',
	'Перфоратор BOSCH BFG 6000',
	'Перфоратор BOSCH BFG 9000',
	'Шуруповерт Makita TD-110'
	];
var arrFlag = ['new', 'promo', ''];
var arrShopCarts = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomUrl() {
    return 'img/catalog/' + arrUrl[getRandomNumber(0, arrUrl.length)] + '.jpg';
}

function getRandomBrand() {    
    return arrBrand[getRandomNumber(0, arrBrand.length)];
}

function getRandomTitle() {
    return arrTitle[getRandomNumber(0, arrTitle.length)];
}

function getPrice() {
    return Math.round(getRandomNumber(5000,20000)/100)*100;
}

function getDiscount(price) {
    price = price * 1.15;
    return Math.round(price/500) * 500;
}

function getFlag() {
    return arrFlag[getRandomNumber(0, arrFlag.length)];
}

function getIsElectric() {
    return Math.random() < 0.5;
}

function createShopCart() {
	var price = getPrice();

	return {
		url: getRandomUrl(),
		brand: getRandomBrand(),
		title: getRandomTitle(),
		price: price,
		discount: getDiscount(price),
		flag: getFlag(),
		isElectric: getIsElectric()
	};
}

function createShopCarts() {	
	for (var i = 0; i < SHOP_CART_COUNT; i++) {		
		var itCard = createShopCart();
		arrShopCarts.push(itCard);
	}
}

createShopCarts();

var catalogItem = document.querySelector('#catalog-item').content.querySelector('.catalog-item');

var catalogFragment = document.createDocumentFragment();

function generateShopCard(url, title, price, discount) {
	var itShopCard = catalogItem.cloneNode(true);
	itShopCard.querySelector('.image>img').setAttribute('src', url);
	itShopCard.querySelector('.item-title').textContent = title;
	itShopCard.querySelector('.price').textContent = price + ' Р.';
	itShopCard.querySelector('.discount').textContent = discount;
	return itShopCard;
}

function generateShopCards() {
	for(var i = 0; i < SHOP_CART_COUNT; i++) {
		catalogFragment.appendChild(generateShopCard(arrShopCarts[i].url, arrShopCarts[i].title, arrShopCarts[i].price, arrShopCarts[i].discount));
	}
	document.querySelector('.catalog-list').appendChild(catalogFragment);
}

generateShopCards();
