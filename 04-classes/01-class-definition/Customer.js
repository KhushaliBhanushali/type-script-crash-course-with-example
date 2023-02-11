/*class Customer{
    firstname: string;
    lastname: string;
}

// Let's create an instance

let myCustomer = new Customer();

myCustomer.firstname = "Khushali";
myCustomer.lastname = "Bhanushali";

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
*/
//Using Constructor
var Customer = /** @class */ (function () {
    function Customer(thefname, thelname) {
        this.firstname = thefname;
        this.lastname = thelname;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Khushali", "Bhanushali");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
