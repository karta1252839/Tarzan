// Ch.27 資料庫 API

// [npm套件]
// 1.express ()(只會收到 GET)
// npm i express
// https://www.npmjs.com/package/express

// body-parser (讓express可以收到除了 GET的其他)
// npm i body-parser

// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取post資料
import bodyParser from 'body-parser'
// md5 加密 npm i md5
import md5 from 'md5'

import db from './db.js'

const app = express()

app.use(bodyParser.json())
// 讓 express 使用 body-parser，並把收到的資料轉json
// req 代表進來的請求，res 代表回傳的請求
app.post('/new', async (req, res) => {
    // 拒絕不是 json 的資料格式
    if (req.headers['content-type'] !== 'application/json') {
        //     res.sendStatus(400) sendStatus:回傳錯誤狀態碼，不回傳內容
        // status:回傳錯誤狀態碼
        res.status(400)
        // 回傳內容
        res.send({ success: false, message: '格式不符' })
        return
    }
    // console.log(req.body);
    // 使用postman 選擇)輸入網址/body/json/送出(不可以是空的否則會一直跑到當)
    // res.send('ok')

})

// 檢查資料內容
if (req.body.name === undefined ||
    req.body.account === undefined ||
    req.body.password === undefined ||
    req.body.email === undefined
) {
    res.status(400)
    res.send({ success: false, message: '欄位不正確' })
    return
}

//  新增資料 ------------------------------------------
try {
    const result = await users.create(
        {
            name: req.body.name,
            account: req.body.account,
            password: md5(req.body.password),
            email: req.body.email
        }
    )
    console.log(result);
    res.status(200)
    res.send({ success: true, message: '' })
} catch (error) {
    const key = Object.keys(error.errors)[0]
    // console.log(key);
    const message = error.errors[key].message

    res.status(400)
    res.send({ success: false, message })
}

//  查詢資料 ------------------------------------------
app.get('/find', async (req, res) => {
    if (req.query.id === undefined) {
        res.status(400)
        res.send({ success: false, message: '欄位不正確' })
        return
    }
})
try {
    // 'account -_id' 去掉 ID
    // 使用 ID 尋找資料，只收 account 去掉 ID
    const result = await db.user.findById(req.query.id, 'account -_id')
    console.log(result);
    res.send(200)
    res.send({ success: false, message: '', account: result.account })
} catch (error) {
    res.status(404)
    res.send({ success: false, message: '找不到' })
}

//  修改資料 ------------------------------------------
// :type 會變成 type
app.path('/update/:type', async (req, res) => {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400)
        res.send({ success: false, message: '格式不符' })
        return
    }
    console.log(req.params.type);
    res.send(200)
    try {
        
    } catch (error) {
        
    }
})
//  刪除資料 ------------------------------------------


app.listen(3000, () => {
    console.log('網頁伺服器已啟動');
    console.log('http://localhost:3000');
})

// npm run dev
