interface labelledValue {
  size: number,
  label: string
}

function printLabel(labelledObj: labelledValue) {
  console.log('label', labelledObj.label)
}

printLabel({ size: 10, label: 'interface'})


interface Point {
  readonly x: number,
  readonly y: number
}

let p1:Point = { x: 10, y: 20}

// p1.x = 5 Error

let a: number[] = [1, 2, 3, 4]

let ro: ReadonlyArray<number> = a

// a = ro as number[]  断言

// ro[0] = 12 error
// ro.push(5)  error


