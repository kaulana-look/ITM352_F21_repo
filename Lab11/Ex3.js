var attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>" ;

var pieces = attributes.split(";");

for (i=0; i< pieces.length; i++){
    console.log(pieces[i] + " " + typeof(pieces[i]));
}

var attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>" ;

var pieces = attributes.split(";");
console.log(typeof pieces);

for (i=0; i< pieces.length; i++){
    console.log(pieces[i] + " " + typeof(pieces[i]));
}

var new_attributed = pieces.join(";");
console.log(new_attributed);

var attributed = "5; 03; 0; xxx; 7.5; 13";
var pieces = attributed.split(";");

function isNonNegInt(q) {
    errors = []; 
    if(Number(q) != q) errors.push('Not a number!'); string is a number value
    if(q < 0) errors.push('Negative value!'); non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); that it is an integer
    return errors.length == 0;
}

for (testVal in pieces) {
    console.log(testVal + ":" + pieces[testVal] + " " isNonNegInt(pieces[testVal]));
}