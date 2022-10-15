let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙰𝙻 𝙲𝚄𝙰𝙻 𝚂𝙴 𝙻𝙴 𝙷𝙰𝚁𝙰 𝙴𝙻 𝚂𝙿𝙰𝙼 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂!*\n*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
let str = `
Hola +57 313 7903503
@+52 378 186 1489
Quiere meter a Shizu-Bot al grupo.

Apruebas la solicitud?

`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '✅' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '❎' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: imagen1,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝗦𝗛𝗜𝗭𝗨 » 𝗕𝗢𝗧 👑',
body: null,
thumbnail: img,
sourceUrl: `https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.help = ['solicitar <number>']
handler.tags = ['General']
handler.command = /^solicitar$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
