var Customer = /** @class */ (function () {
    function Customer(thefname, thelname) {
        this._firstName = thefname;
        this._lastName = thelname;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Khushali", "Bhanushali");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
