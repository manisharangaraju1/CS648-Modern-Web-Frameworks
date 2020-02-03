/*eslint-env browser*/

function view(inventory) {
    "use strict";
    inventory.sort((a, b) => (a[0] > b[0]) ? 1 : -1);

    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}


function update(inventory){
    "use strict";
    var foundsku = true;
    var quantityUpdated = true;
    var skuNumber = parseInt(window.prompt("Enter the sku number"), 10);

    inventory.forEach(function (product){

        if(product[0] === skuNumber){
            foundsku = false;
            while(quantityUpdated){
                var quantity = parseInt(window.prompt("Enter the new quantity"));

                if(!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = false;
                }else {
                    window.console.log("Please enter a valid number as quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if(foundsku){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}


function main() {
    "use strict";
    var inventory = [];
    inventory[0] = [4824, "Shirt", 10, 15.99];
    inventory[1] = [6343, "Jeans", 22, 39.99];
    inventory[2] = [3223, "Socks", 36, 9.99];
    inventory[3] = [2233, "Hat", 12, 14.99];
    inventory[4] = [9382, "Jacket", 5, 49.99];
    
    window.console.log("Welcome to The Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - To view existing inventory");
    window.console.log("update - Update an existing products inventory");
    window.console.log("exit - Exit from system");
    window.console.log("");

    var quit = true;

    while(quit){
        var command = window.prompt("Enter command");
        if(command !== null){
            switch(command){
                case "view":
                    view(inventory);
                    break;
                case "update":
                    update(inventory);
                    break;
                case "exit":
                    quit = false;
                    break;
                default:
                    window.alert("Please enter a valid command");
                    break;
            }
        }else {
            break;
        }
    }
}

main();