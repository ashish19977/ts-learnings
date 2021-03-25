var Shape = /** @class */ (function () {
    // name: string
    // constructor(name: string){
    //   this.name = name
    // } ==>>>>>>>>> verbose code
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
var newShape = new Shape('square');
newShape.name;
