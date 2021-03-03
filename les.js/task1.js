/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название 
продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/


let arrProductItem =[ "milk", "yogurt", "butter", "bread","pineaple"];
 function arrProduct (){
    console.log (arrProductItem);
}; 

function FiltrarrProductItem_1(status) { 
 
 return status = false;
};

console.log(arrProductItem.filter(FiltrarrProductItem_1));

FiltrarrProductItem_1(status);

arrProduct ([]);

arrProductItem ["milk"] = {
       quantity: 5,
       status: true,
       units: "piece",
   };

arrProductItem ["yogurt"] = {
    quantity: 8,
    status: true,
    units: "piece",
   };

arrProductItem ["butter"] = {
    quantity: 2,
    status: false,
    units: "piece",
    };

arrProductItem ["bread"] = {
    quantity: 1,
    status: true,
    units: "piece",  
   };

arrProductItem ["pineaple"] = {
    quantity: 3,
    status: false,
    units: "piece",
  };

  console.log ( arrProductItem ["pineaple"]); //первый вариант

  /*let arrShopListEl = [
    { 
        el: "milk", 
        quantity: 2,
        status: true,
        units: "piece",  
    },

    {
       el: "yogurt",
       quantity: 8,
       status: true,
       units: "piece", 
    },

    {
        el: "butter",
        quantity: 5,
        status: false,
        units: "piece", 
    },
    {
        el: "bread",
        quantity: 3,
        status: false,
        units: "piece", 
    },
    {
        el: "pineaple",
        quantity: 1,
        status: true,
        units: "piece", 
    },    

  ]

 console.log(arrShopListEl); */
 //второй вариант.

 
 

   

