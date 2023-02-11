"use strict";
class Customer {
    constructor(thefname, thelname) {
        this._firstName = thefname;
        this._lastName = thelname;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Let's create an instance
let myCustomer = new Customer("Khushali", "Bhanushali");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
