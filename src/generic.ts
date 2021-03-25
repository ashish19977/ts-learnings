const getId = <T extends object>(obj: T) => {
  const id: number = 123
  return{
    ...obj,
    id,
  }
}

const user5: User = { 
  name: 'ashish'
}

// getId<string>('ashish') // error

const result = getId<User>(user5)

