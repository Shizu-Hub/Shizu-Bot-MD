let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!m.quoted) throw '✳️ Reply to a message'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let sticker = db.data.sticker
let hash = m.quoted.fileSha256.toString('hex')
if (!(hash in sticker)) throw 'It is not registered in the database'
sticker[hash].locked = !/^un/i.test(command)
m.reply('*[ ✔ ] Done!*')} 
handler.command = ['unlockcmd', 'lockcmd'] 
handler.rowner = true
export default handler
