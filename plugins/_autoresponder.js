
import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: '©Shizu-Hub', sourceUrl: `https://github.com/Shizu-Hub/Shizu-Bot-MD`, thumbnail: imagen2}}})}
    
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
let join = `*< 𝚄𝙽𝙴 𝚄𝙽 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 />*\n\n*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾/𝙰*\n*𝙿𝙰𝚁𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝚁 𝚄𝙽 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #join 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*◉ #join* https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E`.trim() 
this.sendHydrated(m.chat, join, wm, imagen4, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [[null, null]], m)}
    
    
return !0 }
export default handler
