class UserClass {
  
  firstName: string
  lastName: string
  private password: string
  readonly MAX_AGE: number = 99
  
  constructor(firstName: string, lastName: string){
    this.firstName = firstName
    this.lastName = lastName
    this.password = firstName + lastName
  }

  getName(): string {
    // this.MAX_AGE = 100 error bcz readonly
    return this.firstName + " " +this.lastName
  }

}

const user3 = new UserClass('ashish', 'kumar')

console.log(user3.getName())

// user3.password // error