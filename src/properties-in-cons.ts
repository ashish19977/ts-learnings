class Shape{
  // name: string
  // constructor(name: string){
  //   this.name = name
  // } ==>>>>>>>>> verbose code
  constructor(public name?: string){ // simpler eqvlnt code

  }
}

const newShape = new Shape('square')

newShape.name