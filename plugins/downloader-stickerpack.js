import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[β] π΄πΉπ΄πΌπΏπ»πΎ π³π΄ πππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command} Anya Forger*`
try {
let res = await fetch(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=5bd33b276d41d6b4`)
let json = await res.json()
for (let data of (json.result.stickerlist || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })}
//await delay(1500)
} catch {  
await m.reply('*[β] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ*')  
}}
handler.command = /^stickerly|stickerpack$/i
export default handler
//const delay = time => new Promise(res => setTimeout(res, time))
