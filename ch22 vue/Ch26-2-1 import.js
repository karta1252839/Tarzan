// import exp from './export.js'
// console.log(exp);

// let number = apple(1, 2)
// console.log(number);





// 具名匯入 全部:import*，挑使用的變數(可單一):import{}，as可更改名稱
// import(a as aa, b) from './export.js'
// console.log(aa);
// console.log(b);


// import * as apple from './export.js'
// console.log(apple.a);
// console.log(apple.b);





// 預設和具名同時匯入
// import 預設,具名 from 檔案
import apple,{a} from './export.js'
console.log(apple);
console.log(a);