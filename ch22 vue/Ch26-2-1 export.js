// 預設匯出
// 一個檔案裡面只能有一個
const exp = 1
export default exp

// const add = (num1, num2) => {
//     return num1 + num2
// }
// export default add

// 具名匯出(一個檔案裡面可以有好幾個，匯出時用宣告變數的方法寫)
const number1 = 1
const number2 = 2
export const a = 'a'
export const b = 'b'
export const c = number1 + number2