// 1
console.log(hello);                                   
var hello = 'world';                                 
// will output undefined because the variable comes after the console.log

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// will output magnet because the console.log is refering to the variable within the function

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// Will output super cool because the console.log is happening outside the function
// the console.log within the function will not output because there isnt a function call


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// output will display 'chicken' and 'half-chicken' because of the function call eat() activating the function


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// This syntax is invalid, a function call must start with function word() you cannot set a variable to be a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//  The first console.log will be undefined
// within th efunction rock and r&b will be displayed for their respective following console.logs
// lastly disco was defined outside of the fucntion after the first console.log and will be output by the 4th

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// The two console.logs outside of the function will both display son jose, but they will sandwich the console.logs within the fuction
// seatle and burbank will be output respectively


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// This function will not work because dojo is set to a const, which is immutable
// You cannot set dojo to and empty list and then try and change the empty list to a string 