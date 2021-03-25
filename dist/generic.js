var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getId = function (obj) {
    var id = 123;
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: 'ashish'
};
// getId<string>('ashish') // error
var result = getId(user5);
