"use strict";
        // ООП - понятие 

        // понятие 

        // Как понять что есть 
    let str = "Текст";
    let strObj = new String(str);


    // console.log(typeof(str));
    // console.log(typeof(strObj));


    let array = [1,2,3,4,5];
    // console.log(array);



    let car = {
        kuzov: "Железо",
        kolesa: "4 kolesa",
        modal: function(){
            // alert("Hello wordl");
        }
    };

    // let mb = {
    //     marka: "Mersedes",
    //     year: "2018"
    // };

    let mb = Object.create(car);
    mb = {
        marka: "Mersedes",
        year: "2018"

    };

    // mb.__proto__ = car;
    Object.setPrototypeOf(mb, car);

    console.log(mb.year);

    mb.modal();

    let salary = {
        almaz: 1200,
        adilet: 1300,
        nursultan: 3000,
    };
    

    let bonus = {
        almaz: 400,
        adilet: 300,
        nursultan: 200,
    };

    var obj ={};
    Object.keys(salary).forEach(function(a){
      obj[a] = salary[a] + bonus[a];
    
    });



    console.log(obj);







