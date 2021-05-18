(function () {
    'use strict';

    // // Концепция 
    // class ploshad {

    //     constructor(width, height) {
    //         this.width = width;
    //         this.height = height;

    //     }
    //     calcPloshad() {
    //         return this.width * this.height;

    //     }
    //     calcPloshad2() {
    //         return this.width + this.height;

    //     }

    // }
    // class ploshadTExt extends ploshad{
    //     //extens  связка двух классов 

    //     constructor(width, height,text,value) {
    //         super(width, height);

    //         this.text = text;
    //         this.value = value;

    //     }
    //     showText (){
    //         console.log(`Text: ${this.text} | value: ${this.value}`);

    //     }

    // }
    // const result = new ploshadTExt(200, 10 ,"Damir","class ");
    // result.showText();
    // console.log(result.calcPloshad());




    // class User {
    //     constructor(name,surname,year){
    //         this.name = name;
    //         this.surname =surname;
    //         this.year = year;
    //     }

    //     getFullname(){
    //         console.log(`"Name: "${this.name} "| Surmane: " ${this.surname} "| Year in University" ${this.year}`);
    //     }
    // }
    // const result_area = new User("Damir","Busurmankulov",2017);
    // console.log(result_area.getFullname());

    // class Student extends User{
    //     constructor(name,surname,year,now_year){
    //         super(name,surname,year);

    //         this.name = name;
    //         this.surname = surname;
    //         this.year = year;
    //         this.now_year = now_year;
    //     }
    //     getCourse(){
    //         return this.now_year - this.year;


    //     }
    // }
    // const result_area = new Student("Damir","Busurmankulov",2017,2021);
    // console.log(`Текущий курс: ${result_area.getCourse()}`);
    // console.log(result_area);


    class cardProduct {
        constructor(tooltips,tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convetToUsd(this.originPrice);
            this.oldPrice = this.convetToUsd(this.oldPrice);

        }
        convetToUsd(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }
        render() {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `
                            <div class="img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img}>

                                <div class="desc_img">
                                    <div class="desc">
                                        <p class="title">out of stock!</p>
                                        <p><span class="coral">beatfull</span></p>
                                    </div>
                                </div>

                            </div>
                            <div class="body_product">

                                    <p class="title"><a href="#">${this.title}</a></p>
                                    <div class="block_stars">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="reviews">
                                            <span>6 review(s)</span>
                                        </div>
                                    </div>

                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="add_price">${this.originPrice}</span>
                                        <del>$${this.oldPrice}</del>
                                    </div>
                                    <div class="btns dnone">
                                        <ul class="ul_li">
                                            <li class="add_cart">
                                                <span class="seryi_krug">
                                                    <i class="fas fa-briefcase"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <span class="seryi_krug">
                                                    <i class="fas fa-balance-scale"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <span class="seryi_krug">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                
                            </div>`;

            this.innerBlock.append(div);


        }

    }
    new cardProduct(
        'New',
        "bg_orange",
        '../img/img1.jpg',
        'Cardigan QA',
        1850,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        'Sale',
        "bg_green",
        '../img/img2.jpg',
        'New T-Shirt',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        '-15%',
        "bg_red",
        '../img/img3.jpg',
        'Summer Sunrise',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        'Sale',
        "bg_blue",
        '../img/img4.jpg',
        'Sweater',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        '-25%',
        "bg_blue",
        '../img/img46.jpg',
        'NY LS',
        1230,
        2500,
        '.list_product'
    ).render();




}());