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

class Customer{
    firstname: string;
    lastname: string;

    constructor(thefname: string, thelname: string){
        this.firstname = thefname;
        this.lastname = thelname;
    }
}

// Let's create an instance

let mynewCustomer = new Customer("Khushali", "Bhanushali");

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);