class Customer{
    private _firstName: string;
    private _lastName: string;

    constructor(thefname: string, thelname: string){
        this._firstName = thefname;
        this._lastName = thelname;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

// Let's create an instance

let myCustomer = new Customer("Khushali", "Bhanushali");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);