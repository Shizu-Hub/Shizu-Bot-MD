import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que estΓ‘ mencionando no estΓ‘ registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*π½πΎπΌπ±ππ΄:* ${username} ${registered ? '(' + name + ') ': ''}
*π½ππΌπ΄ππΎ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*π»πΈπ½πΊ:* wa.me/${who.split`@`[0]}${registered ? '\n*π΄π³π°π³:* ' + age + ' aΓ±os' : ''}
*π³πΈπ°πΌπ°π½ππ΄π:*  ${limit} π
*ππ΄πΆπΈππππ°π³πΎ:* ${registered ? 'Si': 'No'}
*πΏππ΄πΌπΈππΌ:* ${prem ? 'π« Premium' : 'βοΈFree'}
*π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
