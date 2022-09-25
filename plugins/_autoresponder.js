@@ -0,0 +1,13 @@
import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝚂𝚑𝚒𝚣𝚞 - 𝙱𝚘𝚝', body: '©𝐵𝑟𝑢𝑛𝑜𝑆𝑜𝑏𝑟𝑖𝑛𝑜', sourceUrl: `https://github.com/Shizu-Hub/Shizu-Bot-MD`, thumbnail: Menu2}}})}

return !0 }
export default handler
