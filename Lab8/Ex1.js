require("./products_data.js"); 

var num_products = 5;
var count = 1;

while(count <= num_products) {
    if(count > (num_products / 4) && count < (num_products * 0.75)) {
        console.log(`${eval('name' + count)} is sold out.`);
        count++;
        break;
    }
    console.log(`${count}. ${eval('name' + count)}`);
    count++;
}
console.log("That's all we have!");