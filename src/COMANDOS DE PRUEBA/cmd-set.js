let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw 'Assign a command for a sticker using .setcmd + the command'
if (!m.quoted.fileSha256) throw 'You can only assign one command to stickers/photos'
if (!text) throw `Usage:\n${usedPrefix + coommand} <texto>\n\nExample:\n${usedPrefix + command} Test`
let sticker = db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw 'You do not have permission to modify this stickers command.'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false, }
m.reply(`✅Done!`)}
handler.command = ['setcmd']
handler.rowner = true
export default handler
