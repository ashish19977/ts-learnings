const someElement = document.querySelector("#id")

// now someElement is of type Element which is generic class for all dom elements
// so if try to access someElement.value it will show error


//someElement.value // error because it can be a btn which dont have value

// so lets type assert someElement as type of InputElement


const someElement1: HTMLInputElement = document.querySelector("#id")
someElement1.value // no error