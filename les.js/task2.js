/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
количества и цены за единицу товара. Написать следующие функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.*/

let Purchase = [["soap"], ["napkins"], ["shampoo"], ["washpowder"], ["toothpaste"]];

let result = [quantity] * [price];
let value = PricePurchase (); 

function PricePurchase () {
    console.log( " purchase " + " value " + result );
    return result;
};
   
 Purchase["soap"] = {
    prodact: "soap",
    quantity: 10,
    price: 160,
    PricePurchase ();// функция не подставляет значение , не правильный ввод данных. 
};

Purchase["napkins"] = {
    prodact: "napkins",
    quantity: 50,
    price: 10,
};

Purchase["shampoo"] = {
    prodact: "shampoo",
    quantity: 5,
    price: 300,
    
};

Purchase["washpowder"] = {
    prodact: "washpowder",
    quantity: 2,
    price: 100,
};

Purchase["toothpaste"] = {
    prodact: "toothpaste",
    quantity: 4,
    price: 50,

};

console.log (Purchase);

