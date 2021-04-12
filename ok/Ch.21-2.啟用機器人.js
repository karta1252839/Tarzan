// 引用 linebot 套件
import linebot from 'linebot'
// 引用 dotenv 套件
import dotenv from 'dotenv'
// 引用 request_promise 套件
import rp from 'request_promise'

// 讀取 dotenv 檔案
dotenv.config()

// 設定機器人 (宣告機器人資訊)
const bot = linebot({
    // process處理程序，env環境
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當收到訊息時，event 包含了訊息的類型、文字等
bot.on('message', event => {
    // event.message.text 為使用者傳送的文字
    let text = event.message.text
    // event.reply 為回覆訊息
    event.reply(event.message.text)
});

// 當收到訊息時 (async)
bot.on('message', async (event) => {
    try {
        const data = await rp(({ uri: 'https://kktix.com/events.json', json: true }))
        msg = data.entry[0].title
    } catch (error) {
        msg = '發生錯誤'
    }
    event.reply(msg)
});

// 設定機器人監聽 port
bot.listen('/linewebhook', process.env.PORT);

// 使用ngrok 查探機器人狀況視窗 (需登入進去才有安裝npm的內容 => 裝完後把exe檔案丟進檔案內)



// heroku
// https://www.heroku.com/
// 註冊 Heroku (opens new window)帳號，建立新的 App
// 在 Settings 輸入機器人 TOKEN 等環境變數
// 在 Deploy 綁定 Github 專案
