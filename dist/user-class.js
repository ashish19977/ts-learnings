var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName) {
        this.MAX_AGE = 99;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = firstName + lastName;
    }
    UserClass.prototype.getName = function () {
        // this.MAX_AGE = 100 error bcz readonly
        return this.firstName + " " + this.lastName;
    };
    return UserClass;
}());
var user3 = new UserClass('ashish', 'kumar');
console.log(user3.getName());
// user3.password // error
