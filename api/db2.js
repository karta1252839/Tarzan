import mongoose from "mongoose";
import beautifyUnique from 'mongoose-beautiful-unique-validation';
import validator from "validator";

const Schema = mongoose.Schema

mongoose.set('useCreatIndex', true)
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.plugin(beautifyUnique)

const ProductSchema = new Schema({
    // price
    price: {
        type: Number,
        min: [0, 'price最小 0 元'],
        require: [true, '商品價格必填'],
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
    // description
    description: {
        type: String,
        minlength: [2, '商品說明最少 2 個字'],
        require: [true, '商品說明必填'],
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
    // count
    count: {
        type: Number,
        min: [0, '商品庫存最少 0 元'],
        require: [true, '商品庫存必填'],
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
    // image
    image: {
        type: Number,
        min: [0, '商品庫存最少 0 元'],
        require: [true, '商品庫存必填'],
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
    versionKey: false
})

// 資料表 要分開來(因為另一個是帳號不可重複，這次是金錢可重複)
const product = mongoose.model('products', ProductSchema)

export default {
    product,
    
}