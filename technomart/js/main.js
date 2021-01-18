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

function createShopCarts(array) {	
	for (var i = 0; i < SHOP_CART_COUNT; i++) {		
		var itCard = createShopCart();
		array.push(itCard);
	}
}

createShopCarts(arrShopCarts);
console.log(arrShopCarts);

var catalogItem = document.querySelector('#catalog-item').content.querySelector('.catalog-item');
var flagNew = document.querySelector('#flag-new').content.querySelector('.flag-new');

var catalogFragment = document.createDocumentFragment();

function generateShopCard(url, title, price, discount) {
	var itShopCard = catalogItem.cloneNode(true);
	itShopCard.querySelector('.image>img').setAttribute('src', url);
	itShopCard.querySelector('.item-title').textContent = title;
	itShopCard.querySelector('.price').textContent = price + ' Р.';
	itShopCard.querySelector('.discount').textContent = discount;
	return itShopCard;
}

function generateShopCards(array) {
	document.querySelector('.catalog-list').innerHTML = "";
	for(var i = 0; i < SHOP_CART_COUNT; i++) {
		catalogFragment.appendChild(generateShopCard(array[i].url, array[i].title, array[i].price, array[i].discount));
	}
	document.querySelector('.catalog-list').appendChild(catalogFragment);
}

generateShopCards(arrShopCarts);

function compareNumericByPrice(a, b) {
	if (a.price > b.price) return 1;
	if (a.price == b.price) return 0;
	if (a.price < b.price) return -1;
}

function sortArrayByPrice(array) {
	var newArray = array.slice();
	newArray.sort(compareNumericByPrice);
	return newArray;
}

var buttonSortByPrice = document.querySelector('.by-price');
buttonSortByPrice.addEventListener('click', onClickButtonSortByPrice, false);

function onClickButtonSortByPrice(evt) {
	evt.preventDefault();
	generateShopCards(sortArrayByPrice(arrShopCarts));
	buttonSortByPrice.removeEventListener('click', onClickButtonSortByPrice, false);
}

console.log(sortArrayByPrice(arrShopCarts));

var modal = document.querySelector('.modal-write');
var buttonContacts = document.querySelector('.contacts-button').addEventListener('click', onClickButtonContacts, false);

var buttonModalClose = document.querySelector('.modal-close');

function onClickButtonModalClose(evt) {
	evt.preventDefault();
	modal.classList.value = 'modal modal-write';
}

function onEscKeyClick(evt) {
	if (evt.key === 'Escape') {
		evt.preventDefault();
		modal.classList.value = 'modal modal-write';
	}
}

function onClickButtonContacts(evt) {
	evt.preventDefault();
	modal.classList.value += 'modal-show';
	buttonModalClose.addEventListener("click", onClickButtonModalClose, false);
	document.addEventListener('keydown', onEscKeyClick, false);
}



