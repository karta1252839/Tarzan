// [npm套件]
// 1. beautifyUnique (驗證自訂錯誤訊息) 例: unique
// npm install --save mongoose-beautiful-unique-validation
// https://www.npmjs.com/package/mongoose-beautiful-unique-validation

// 2. validator.js (各種好用驗證)
// npm i validator
// https://www.npmjs.com/package/validator




// 資料庫套件
import mongoose from "mongoose";
// 讓 mongoose 支援 unique 錯誤訊息
import beautifyUnique from 'mongoose-beautiful-unique-validation';
// 使用 validator
import validator from "validator";

const Schema = mongoose.Schema

// 
mongoose.set('useCreatIndex', true)
// 連接到本機的 mongoose 的 user 資料庫名字
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true })
// 使用插件
mongoose.plugin(beautifyUnique)

// 定義資料表的架構
const userSchema = new Schema({
    // 欄位名稱 (名字)
    name: {
        // 資料類型 : 文字
        type: String,
        // [必填欄位，自訂錯誤訊息]
        require: [true, '使用者名稱必填'],
        // [最小長度，自訂錯誤訊息]
        minlength: [2, '使用者名稱最少 2 個字'],
        // [最大長度，自訂錯誤訊息]
        maxlength: [20, '使用者名稱最多 20 個字']

    },
    // 帳號
    account: {
        type: String,
        require: [true, '帳號必填'],
        minlength: [8, '帳號最少 8 個字'],
        maxlength: [20, '帳號最多 20 個字']
        // 避免重複，無法自訂錯誤訊息，'除非使用套件'
        // unique: true,
        unique: '帳號重複',
    },
    // 密碼
    password: {
        type: String,
        require: [true, '密碼必填'],
        minlength: [8, '密碼最少 8 個字'],
        maxlength: [20, '密碼最多 20 個字']
    },
    // email
    email: {
        type: String,
        require: [true, 'email必填'],
        minlength: [8, 'email最少 8 個字'],
        maxlength: [20, 'email最多 20 個字']
        // 自訂驗證規則
        validate: {
            // 驗證 function
            validator(value) {
                return validator.isEmail(value)
            },
            // 錯誤訊息
            message: 'Email格式錯誤'

        }
    },
}, {
    // mongoose run時 會有一個 "__v" 是修改紀錄 
    // 加入 versionKey: false 取消修改紀錄
    versionKey: false
})

// 資料表 變數 = mongoose.model(資料表名稱, 對應的Schema)
const user = mongoose.model('user', userSchema)

export default {
    user

}