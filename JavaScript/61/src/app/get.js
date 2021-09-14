function myModule () {
    this.hello = function (){
        console.log("Hello Damir");
    };
    this.bye = function (){
        console.log("Bye Bye");
    };
    
}
module.exports = myModule;