import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './media/DarkSide.m4a'
let chat = global.db.data.chats[m.chat]
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Shizu - Bot', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}  
if (/^futbol$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendButton(m.chat, '*𝙷𝚘𝚕𝚊, 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊 𝚢𝚊 𝙵𝚞𝚝𝙶𝚘𝚕, 𝚞𝚗𝚊 𝚊𝚙𝚙 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚊𝚖𝚎𝚗𝚝𝚎 𝚐𝚛𝚊𝚝𝚒𝚜 𝚙𝚊𝚛𝚊 𝚟𝚎𝚛 𝙵𝚞𝚝𝚋𝚘𝚕 𝚎𝚗 𝚟𝚒𝚟𝚘. 𝙰 𝚚𝚞𝚎 𝚎𝚜𝚙𝚎𝚛𝚊𝚜? 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊 𝚢𝚊 𝚕𝚊 𝚊𝚙𝚙!!!👇*', wm, [['𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗', `#futgol`]], 'conversation', { sendEphemeral: true, quoted: estilo })
conn.sendFile(m.chat, vn, './media/DarkSide.m4a', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: estiloaudio })}
return !0
}
export default handler
