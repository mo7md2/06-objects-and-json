var Person = function(name){
    console.log(name);
}
Person.prototype.talk = function(word){
    console.log(word)
}
var driver = new Person('david');
driver.talk('hi')
