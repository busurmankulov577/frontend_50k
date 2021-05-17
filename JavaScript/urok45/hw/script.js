(function () {
    'use strict';
    // Концепция 
    class ploshad {

        constructor(width, height) {
            this.width = width;
            this.height = height;

        }
        calcPloshad() {
            return this.width * this.height;

        }
        calcPloshad2() {
            return this.width + this.height;

        }

    }
    class ploshadTExt extends ploshad{
        //extens  связка двух классов 

        constructor(width, height,text,value) {
            super(width, height);

            this.text = text;
            this.value = value;

        }
        showText (){
            console.log(`Text: ${this.text} | value: ${this.value}`);

        }

    }
    // const result = new ploshadTExt(200, 10 ,"Damir","class ");
    // result.showText();
    // console.log(result.calcPloshad());




    class User {
        constructor(name,surname,year){
            this.name = name;
            this.surname =surname;
            this.year = year;
        }

        getFullname(){
            console.log(`"Name: "${this.name} "| Surmane: " ${this.surname} "| Year in University" ${this.year}`);
        }
    }
    // const result_area = new User("Damir","Busurmankulov",2017);
    // console.log(result_area.getFullname());

    class Student extends User{
        constructor(name,surname,year,now_year){
            super(name,surname,year);

            this.name = name;
            this.surname = surname;
            this.year = year;
            this.now_year = now_year;
        }
        getCourse(){
            return this.now_year - this.year;
            

        }
    }
    const result_area = new Student("Damir","Busurmankulov",2017,2021);
    console.log(`Текущий курс: ${result_area.getCourse()}`);
    console.log(result_area);



}());