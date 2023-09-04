

// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).
//Внизу каждого списка выводится итоговая сумма каждого товара.
//  А так же в самом конце выводится итоговая сумма и количество всех товаров.


// let cars = 
// [
//     {
//       title: "BMW",
//       price: 40000,
//       count: "15",
//     },
//     {
//       title: "Toyota",
//       price: 20000,
//       count: "13",
//     },
//     {
//       title: "Ford",
//       price: 30000,
//       count: "20",
//     },
//     {
//       title: "Chevrolet",
//       price: 60000,
//       count: "9",
//     },
//     {
//       title: "Volkswagen",
//       price: 30000,
//       count: "13",
//     },
//   ];



// const body = document.querySelector("body")
// const ol = document.createElement("ol");
// ol.append("body")


// let TotalPrice=0;


// for (let i =0; i < cars.length; i++){
//   const {title,price,count} = cars[i];

//   const newCar = document.createElement("ol");

//   const carTitle =document.createElement("li");
//   carTitle.innerText = title;

//   const carPrice = document.createElement("li");
//   carPrice.innerText =price;

//   const carCount = document.createElement("li");
//   carCount.innerText = count;

//   const para = document.createElement("p");
//   para.innerText = "price of this car" + price;
//   document.querySelector("body").append.para;

//   TotalPrice+= price * +count;
//   const parag = document.createElement("p");
//   parag.innerText = "Total price of all cars" + TotalPrice;
//   document.querySelector("body").append.parag;

//   newCar.append(carTitle,carPrice,carCount,para,parag);
//   document.querySelector("body").append(newCar);
// }






// for (let i =1; i<=20; i++){
//     const textP = document.createElement("p");
//     textP.innerText = i;
//     body.append(textP);
// }



// // 2)Напишите скрипт, который выводит в интерфейс следующую таблицу
// // (html должен быть пустым, все элементы создаются строго с помощью скриптов):

// let people  = [
//     {
//         No: 1,
//         Name: "Bill Gates",
//         Position: "Founder Microsoft",
//         Salary: 1500,
//     },
//     {
//         No: 2,
//         Name: "Steve Jobs",
//         Position: "Founder Apple",
//         Salary: 1200,
//     },
// //     {
//         No: 3,
//         Name: "Larry Page",
//         Position: "Founder Google",
//         Salary: 1100,
//     },
//     {
//         No: 4,
//         Name: "Mark Zuckerberg",
//         Position: "Facebook",
//         Salary: 1300,
//     },
    
// ]

// let table = document.createElement("table")
// for (let i = 0; i<people.length;i++ ){
//     const {No,Name,Position,Salary} = people[i];

//     const newNo = document.createElement("tr");
//     newNo.innerText =(No);
     
//         const newName = document.createElement("th");
//         newName.innerText = (Name);

//         const NewPosition = document.createElement("th");
//         NewPosition.innerText=(Position);

//         const NewSalary = document.createElement("th");
//         NewSalary.innerText = (Salary);

//         const body = document.querySelector("body")
//         body.append(newNo,newName,NewPosition,NewSalary);
//         body.append(table);
// }


// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст. 
// Напишите цикл, который создаст для каждого объекта параграфы
// (Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

// let dogs = [
//     {
//       breed: "golden retriever",
//       age: 7,
//     },
//     {
//       breed: "labrador retriever",
//       age: 4,
//     },
//     {
//       breed: "french bulldog",
//       age: 12,
//     },
//     {
//       breed: "beagle",
//       age: 6,
//     },
//     {
//       breed: "german shepherd dog",
//       age: 2,
//     },
//     {
//       breed: "poodle",
//       age: 3,
//     },
//     {
//       breed: "bulldog",
//       age: 4,
//     },
// ];


// for (let i = 0; i < dogs.lenght; i++) {
//     const {breed,age} = dogs[i];

//     const newBreed = document.createElement("p");
//     newBreed.innerText = (breed);

//     const newAge = document.createElement("p");
//     newAge.innerText = (age);

//     document.querySelector("body").append(newBreed,newAge);
// }




