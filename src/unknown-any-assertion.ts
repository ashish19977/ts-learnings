let a: any = 5 // number here

a = "5" // here string and no error


let b: unknown = 10

// let c: string = b  // error because b is now number

let d: string = b as string