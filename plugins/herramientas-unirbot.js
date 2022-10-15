let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙰𝙻 𝙲𝚄𝙰𝙻 𝚂𝙴 𝙻𝙴 𝙷𝙰𝚁𝙰 𝙴𝙻 𝚂𝙿𝙰𝙼 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂!*\n*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 ✨${taguser}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴 𝙼𝚈𝚂𝚃𝙸𝙲 - 𝙱𝙾𝚃 💖彡*
`.trim()
let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
{ buttonId: '#owner', buttonText: { displayText: '🌹 𝙾𝚆𝙽𝙴𝚁 🌹' }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
handler.help = ['spamwa <number>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
