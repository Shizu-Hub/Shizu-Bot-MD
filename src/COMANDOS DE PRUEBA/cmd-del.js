let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `You can only remove assigned commands from stickers`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw 'You do not have permission to remove this sticker command'
delete sticker[hash]
m.reply(`*[ ✔ ] Done!*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
