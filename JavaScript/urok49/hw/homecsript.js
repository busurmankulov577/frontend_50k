
const literObj  ={
    nameSite: "Bookstore-kg",
    date: "20 june",
    views:{
        Html: 5,
        css: 'bootsrap 5',
        language: "JS"
    }

};
console.log(literObj);
console.log(JSON.stringify(literObj));
console.log(JSON.parse(JSON.stringify(literObj)));

const newObj = JSON.parse(JSON.stringify(literObj));
newObj.views.Html = 4;
console.log(newObj);