const append = <T>(ele: T, list: readonly T[]): T[] => {
  return [...list, ele]
}


const res = append(5, [])

const res2 = append('two', ['one'])

console.log(res)