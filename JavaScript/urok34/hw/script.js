"use strict";
    // Использование строго режима для обработки данных 
        let a = 10;
        let b = a;


        b = b + 15;
        // console.log(b);


        const arr1 = {
            a: 1,
            b: 2

        };
        // console.log(arr1)
        const newArr = arr1;

        newArr.a = 10;
        // console.log(arr1);





        function copy_arr(myObj){
            const newObj = {};
            let key ;
            for (key in myObj){
                newObj[key] = myObj[key];
            }
            return newObj;
        }

        const oldObj = {
            name: "Damir",
            surname: "Busurmankulov",
            hobby:{
                1: "swimming",
                2: "running"
            }
        };
        // console.log(oldJbj);
        const newObj = copy_arr(oldObj);
        newObj.name = "Sima";

  


        newObj.hobby[1] = "Listening";
        // console.log(oldObj);

        // console.log(newObj);






        const newAssign = Object.assign({}, oldObj);
        newAssign.name = "Panda";
        // console.log(newAssign);



        const arr = ["apple","painable","avacado"];


        const arr2 = arr.slice();
        arr2[2] = "arbuz";



        const tech = ["Handy","MobileHandy", "Laptop"],
                sounds = ["Classic","Jazz","Hip-Hop"],
                combo = [...tech, ...sounds,"Swimming","run"]

        // console.log(combo);

        const oldper = ["Handy","MobileHandy", "Laptop"];
        const newper = [...oldper];

        newper[1] = "Linkpad"
        // console.log(oldper);
        // console.log(newper);

        const arr3 = {
            a: 1,
            b: 2

        };
        const arr4 = {...arr3};
        arr4.b = 10;
        // console.log(arr4,arr3);





        