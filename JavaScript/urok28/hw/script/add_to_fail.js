// 1)Изучить событья кнопок
//     2)По клику на кнопку добавить в корзину товар с след параметроми:
//         1) картина 
//         2) Заголовок
//         3) доп параметры 
//         4) цена
//     3) Добавить в корзину

    //  .class - docoment.getElementbyclassName 
        //      вкладка 
        //      (.) связка 
        //      get - получить 
        //      Elements - Элементы ( потому что класснов несколько)
        //      by - по \ от 
        //      ByclassName - название класса 
       
        let title = document.getElementsByClassName("title"); 
        console.log(title[1].innerText);
                // ничего не вывелось 
        
        
        // Без команды вывода ничего не выведится ;


        let product = document.getElementsByClassName("product"); 
        console.log(product[0].innerText);