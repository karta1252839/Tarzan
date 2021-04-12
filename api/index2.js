// npm i multer (網頁server處理進來的檔案)
import express from 'express'
import bodyParser from 'body-parser'

// multer 檔案上傳套件
import multer from 'multer'
// nodejs 預設套件不用裝npm (可處理有關 路徑檔案 副檔名之類)
import path from 'path'
import e from 'express'
import db from './db'

const app = express()

app.use(bodyParser.json())

// 檔案上傳設定
const upload = multer({
    // 檔案儲存; multer.diskStorage代表儲存在電腦上;
    storage: multer.diskStorage({
        // 儲存路徑; req 使用者放的資料, file 使用者上傳檔案, cb 代表回應
        destination(req, file, cb) {
            // cb ( 錯誤顯示訊息 , 路徑 )
            cb(null, 'images/')
        },
        // 檔名
        destination(req, file, cb) {
            // 目前時間
            const now = Date.now()
            // 副檔名;  使用 path 套件取得上傳原始檔的副檔名
            // extname 取得一個路徑的副檔名 file.originalname原始檔名
            const ext = path.extname(file.originalname)
            // 時間+副檔名(避免重複)
            cb(null, now + ext)
        },
    }),
    limits: {
        // 檔案大小限制 1MB
        fileSize: 1024 * 1024
    },
    fileFilter(req, file, cb) {
        // 檔案類型有沒有包含 image 文字
        if (file.mimetype.includes('image')) {
            // cb(錯誤顯示訊息, 接受檔案)
            cb(null, true)
        } else {
            // cb(觸發 multer 套件錯誤, 不接受檔案)
            cb(new.multer.MulterError('格式錯誤'), false)
        }
    }
})

app.post('new/', async (req, res) => {
    // 有一個上傳的檔案 欄位是image
    // req 進來, res 出去, err 錯誤
    // upload.single(欄位)(req, res,上傳完畢的 function)
    upload.single('image')(req, res, err => {
        // console.log(req.file);
        // console.log(req.body);
        // res.sendStatus(200)

        // 如果是上傳發生錯誤
        if (err instanceof multer.MulterError) {
            const message = (err.code === 'LIMIT_FILE_SIZE') ? '檔案太大' : '格式不符'
            res.status(400)
            res.send({ success: false, message })
        } else if (err) {
            // 不是上傳的錯誤
            res.send(500)
            res.send({ success: false, message: '伺服器發生錯誤' })
        } else {
            // 成功，寫入資料庫
            try {
                const result = await db.product.create(
                    {
                        name: req.body.name,
                        price: req.body.price,
                        description: req.body.description,
                        count: req.body.count,
                        image: req.body.image
                    }
                )
                res.sendStatus(200)
                res.send({ success: true, message: '', id: 'result._id' })
            } catch (error) {
                const key = Object.keys(error.errors)[0]
                const message = error.errors[key].message
                res.status(400)
                res.send({ success: false, message })
            }
        }
    })
})

app.listen(3000, () => {
    console.log('網頁伺服器已啟動');
    console.log('http://localhost:3000');
})