// const fname = prompt("Введите имя: "," ");
// const lname = prompt("Введите фамилию: ", "");
// console.log("Имя: "+ fname +  " Фамилия : " + lname);



// var num1 = prompt("Число 1 : ", );
// var num2 = prompt("Число 2 : ", );

// var numm1 = Number(num1);
// var numm2 = Number(num2);
// var result = numm1 + numm2;

// alert(result);
// console.log("Резултьтат Сложения:",result);




// var ch1 = prompt("Число 1 : " );
// var ch2 = prompt("Число 2 : " );

// var n1 = Number(ch1);
// var n2 = Number(ch2);
// var result1 = n1 * n2;

// alert(result1);
// console.log("Резултьтат умножения :",result1);



// Важно знать 
    // Операции сравнение всегда будут возвращать операции сравнения 
        // TRUE AND FALSE 

// alert(2 == 2); // == операции сравнения 

// alert(5 != 4);
// Все что заключено в кавычки это текст 
// 

// alert("2" == 2);

// == сравнение значений (она конвертирует текста в цифры )
//  === строгое равенство сравнение типов данных + значения 



// Условные операвторы 

// if - если 
// esle -  впротивном случаии

// if 2 == 2, выполни след условия выведи на экран сообщение о том что "Ответ правильный !" выведи в противнов слачии не првильный 

// если 2 равно 2 
    // if (2 == 2) То = {}



    // if(2 == 2){
    //     alert( "Ответ правильный !");
    // }else{
    //     alert("Не правильный Ответ !")
    // }


document.getElementById("check").onclick = function(){
    let login1 = document.getElementById("login1").value;
    let password1 = document.getElementById("password1").value;

    if (login1 == "damir" && password1 == "qwe123"){
        console.log("Welcome Damir");
    }else if (login1 != "damir"){
        console.log(" Неправильный логин ");
    }else if(password1 != "qwe123"){
        console.log(" Неправильный пароль ");
    }
    
    
    
    // if(login1 == "busur" && password1 == "asd123"){
    //     console.log("Welcome Busur ");
    // }
    // else if (login1 != "busur"){
    //     console.log(" Неправильный логин ");
    // }
    // else if(password1 != "asd123"){
    //     console.log(" Неправильный пароль ");
    //     }
       


    // if (login1 == "admin" && password1 == "zxc123"){
    //     console.log("Welcome admin");
    // }else if (login1 != "admin"){
    //     console.log(" Неправильный логин ");
    // }else if(password1 != "zxc123"){
    //     console.log(" Неправильный пароль ");
    // }
        

        
    else {
        console.log("ERROR");
    } 



};



function insert(num){
    document.form.textview.value = 
    document.form.textview.value + num;
    
}

function clean(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;

    document.form.textview.value = exp.substring(0,exp.length-1);

}
function equal (){
    var exp = document.form.textview.value;
    if(exp ){
        document.form.textview.value = eval(exp);
    }
}