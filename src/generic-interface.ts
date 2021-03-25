interface ResponseI<T, V>{ // T will auto pick whatever we pass to interface while using
  data: T[]
  pageNumber: V
}


const responseOfStrings: ResponseI<string, string> = {
  data: ['1', '3'],
  pageNumber: '5',
}

const responseOfNUmber: ResponseI<number, number> = {
  data: [1, 3],
  pageNumber: 5,
}