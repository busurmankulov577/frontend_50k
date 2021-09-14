
// const literObj  ={
//     nameSite: "Bookstore-kg",
//     date: "20 june",
//     views:{
//         Html: 5,
//         css: 'bootsrap 5',
//         language: "JS"
//     }

// };
// console.log(literObj);
// console.log(JSON.stringify(literObj));
// console.log(JSON.parse(JSON.stringify(literObj)));

// const newObj = JSON.parse(JSON.stringify(literObj));
// newObj.views.Html = 4;
// console.log(newObj);
const   inputSom = document.querySelector("#som"),
        inputUsd = document.querySelector("#usd");

const inputRub = document.querySelector("#rub");

inputSom.addEventListener('input', () => {

const request = new XMLHttpRequest();

request.open("GET", "current.json");
// request.open(method(GET/POST), url , asy, login);
request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
request.send();

request.addEventListener('load', () => {

if (request.readyState === 4 && request.status === 200) {
    // console.log(request.response);
    // console.log(JSON.parse(request.response));


    const currency = JSON.parse(request.response);

    const result = inputSom.value / currency.current.usd;

    const resultRub = inputSom.value * currency.current.som_rub;

    inputUsd.value = (result).toFixed(2);
    inputRub.value = (resultRub).toFixed(2);


}
 else {
    inputUsd.value = "Что-то пошло не так ";
}


});





// status 
// ststusText
// respose
// readyState
});

inputUsd.addEventListener('input', () => {

const request = new XMLHttpRequest();

request.open("GET", "current.json");
// request.open(method(GET/POST), url , asy, login);
request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
request.send();

request.addEventListener('load', () => {

if (request.readyState === 4 && request.status === 200) {
    // console.log(request.response);
    // console.log(JSON.parse(request.response));


    const currency = JSON.parse(request.response);

    const result = inputUsd.value * currency.current.som;
    const resultRub = inputUsd.value * currency.current.usd_rub;


    inputSom.value = (result).toFixed(2);
    inputRub.value = (resultRub).toFixed(2);

}
 else {
    inputSom.value = "Что-то пошло не так ";
}


});

});

inputRub.addEventListener('input', () => {

const request = new XMLHttpRequest();

request.open("POST", "current.json");
// request.open(method(GET/POST), url , asy, login);
request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
request.send();

request.addEventListener('load', () => {

if (request.readyState === 4 && request.status === 200) {
    // console.log(request.response);
    // console.log(JSON.parse(request.response));


    const currency = JSON.parse(request.response);

    const result = inputRub.value * currency.current.rub_som;
    const resultUsd = inputRub.value * currency.current.rub_usd;

    

    inputSom.value = (result).toFixed(2);
    inputUsd.value = (resultUsd).toFixed(2);


}
 else {
    inputSom.value = "Что-то пошло не так ";
}


});

const script = new Promise(function(resolve, reject) {


    setTimeout(() => {
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"; 
        document.head.appendChild(script);
        resolve(script);

    },2000);
    setTimeout(() => {
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"; 
        document.head.appendChild(script);
        resolve(script);

    },5000);
        

});

script.then(data => {
    console.log("Promise resolved..." , data);
});




});
