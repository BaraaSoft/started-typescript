var User = /** @class */ (function () {
    function User(id, name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    return User;
}());
var arr = [new User("123", "baraa", 28)];
var res = arr.map(function (user) {
    return user.name;
});
console.log(res);
