interface User{
  name: string,
  age?: number, // optional property
  getName?(): string
}


const user1: User = {
  name: 'ashish',
  getName: function(): string{
    return this.name
  }
}

console.log(user1.getName())