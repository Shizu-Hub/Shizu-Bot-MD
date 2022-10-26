import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦`,
rows: [
      {title: "🥵 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 🥵", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}creador`},
      {title: "🎁 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🎁", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧', rowId: `${usedPrefix}allmenu`},
      {title: "💎 𝗠𝗘𝗡𝗨 𝗚𝗥𝗨𝗣𝗢 💎", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦/𝗧𝗢𝗣𝗦 🎮", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗝𝗨𝗘𝗚𝗢𝗦/𝗧𝗢𝗣𝗦', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🔊", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢𝗦', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 👽", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢 🎤", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 👾", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 🔞", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗡𝗦𝗙𝗪🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 📲", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦 🖍️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗟𝗢𝗚𝗢𝗦', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 𝗠𝗘𝗡𝗨 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦 🔍", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔𝗦', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ⚒️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 𝙈𝙀𝙉𝙐 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑", description: '𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗦𝗢𝗟𝗢 𝗣𝗨𝗘𝗗𝗘 𝗦𝗘𝗥 𝗨𝗦𝗔𝗗𝗢𝗦 𝗣𝗢𝗥 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 𝗛𝗢𝗟𝗔 _${name}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗖𝗥𝗘𝗔𝗗𝗢𝗥
┏━━━━━━━━━━━━━┓
┃ *<COMANDOS CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}enable *restrict*_
┣ 👑 _${usedPrefix}disable *restrict*_
┣ 👑 _${usedPrefix}enable *autoread*_
┣ 👑 _${usedPrefix}enable *welcome*_
┣ 👑 _${usedPrefix}enable *modohorny*_
┣ 👑 _${usedPrefix}disable *autoread*_
┣ 👑 _${usedPrefix}enable *public*_
┣ 👑 _${usedPrefix}disable *public*_
┣ 👑 _${usedPrefix}enable *pconly*_
┣ 👑 _${usedPrefix}disable *pconly*_
┣ 👑 _${usedPrefix}enable *gconly*_
┣ 👑 _${usedPrefix}disable *gconly*_
┣ 👑 _${usedPrefix}banchat2_
┣ 👑 _${usedPrefix}unbanchat2_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc *<texto>*_
┣ 👑 _${usedPrefix}bcchats *<texto>*_
┣ 👑 _${usedPrefix}bcgc *<texto>*_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}resetuser_
┣ 👑 _${usedPrefix}block_
┣ 👑 _${usedPrefix}unblock_
┣ 👑 _${usedPrefix}spamgp *link*_
┣ 👑 _${usedPrefix}banlist_ 
┣ 👑 _${usedPrefix}block *<@tag>*_
┣ 👑 _${usedPrefix}unblock *<@tag>*_
┣ 👑 _${usedPrefix}setprefix *<texto>*
┣ 👑 _${usedPrefix}resetprefix
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ 👑 _${usedPrefix}leavegc_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝗦", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucreador|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
