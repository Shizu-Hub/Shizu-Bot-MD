import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] TAG A USER WITH THE @𝚝𝚊𝚐*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] ENTER THE AMOUNT OF EXPERIENCE(XP) YOU WANT TO ADD*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] UNSPORTED SYMBOLS, ONLY NUMBERS!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] THE MINUMUM NUMBER OF EXPERIENCE TO ADD IS 𝟷*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`≡ *𝚇𝙿 ADDED*
┌──────────────
▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
└──────────────`)
}
handler.command = ['añadirxp','addexp'] 
handler.rowner = true
export default handler
