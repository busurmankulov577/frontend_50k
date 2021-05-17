(function () {
    // 'use strict';
    // this возможность вызова обьекта  и всего содержимого что находится внутри обьекта
    // использование this внутри функции так же будет обращаться к window  
    // если мы ключим use strict this  это нам выдаст сообщения undefined
    // function get_this (a,b){

    //     // console.log(this);

    //     function arif (){

    //         // console.log(this);
    //         return a + b;


    //     }
    //     console.log(arif());
    // }
    // get_this(15, 7);

    // const object = {
    //     name: "Damir",
    //     age: 26,
    //     age1: 26,
    //     age2: 26,
    //     age3: 26,
    //     summ: function(){
    //         console.log(this.age);
    //         // доступен (26)
    //         function test(){
    //             console.log(this);
    //             // this не досутпен
    //         }
    //         test();
    //     }


    // };
    // object.summ();
    // при использовании this внутри метода обьекта object y this есть возможность исполльзовать рядом стоящие данные 
    // если внутри одного метода создать функецию и внутри него использовать this то она обратиться к глобальному окну window


    // function USer (name,id){
    //     this.name = name,
    //     this.id = id,
    //     this.data_ = function(){
    //         console.log("Hello "+ this.name);
    //     };
    // }
    // let damir = new USer("Damir",21);
    // damir.data_();
    // // this может быть использован внутри функции которая создает собьекты и this получит предсозданные обьекты и их данные 

    // function hello (age){
    //     console.log(this);
    //     console.log(this.name);
    //     console.log(age);

    // }

    // const newObj = {
    //     name: "DAMIR"
    // };

    // hello.call(newObj,21);
    // hello.apply(newObj,['21']);
    // function count(num){
    //     return this+num;

    // }
    // const mnojitel = count.bind(5);

    // console.log(mnojitel(10));


    const click = document.querySelector("#btn6");
    click.addEventListener("click", function () {
        this.remove();
    });

}());



function userN(name, id, city) {
    this.name = name,
    this.id = id,
    this.city = city,
    this.data_ = function () {
        console.log("name: " + this.name + " age: " + this.id + " city: "+ this.city);
    };
}
let damir = new userN("ALI", 21 ,"Osh");
damir.data_();
let adilet = new userN("Adilet",26, "Chui");
adilet.data_();


