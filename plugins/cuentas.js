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
      {title: "🎁 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 🎁", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧', rowId: `${usedPrefix}memucomp`},
      {title: "🌠 𝗛𝗕𝗢 🌠", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗛𝗕𝗢', rowId: `${usedPrefix}hbo`},
      {title: "🏰 𝗗𝗜𝗦𝗡𝗘𝗬 🏰", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗗𝗜𝗦𝗡𝗘𝗬', rowId: `${usedPrefix}disney`},
      {title: "🌏 𝗩𝗣𝗡 🌏", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗞𝗘𝗘𝗣𝗦𝗢𝗟𝗜𝗗 𝗦𝗘𝗜𝗦 𝗠𝗘𝗦𝗘𝗦', rowId: `${usedPrefix}vpn`},
      {title: "🌈𝗖𝗔𝗡𝗩𝗔 𝗣𝗥𝗢🌈", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗖𝗔𝗡𝗩𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠', rowId: `${usedPrefix}canva`},
      {title: "🟥𝗡𝗘𝗧𝗙𝗟𝗜𝗫🟥", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗗𝗘 𝗡𝗘𝗧𝗙𝗟𝗜𝗫', rowId: `${usedPrefix}netflix`},
      {title: "🔊 𝗠𝗨𝗦𝗜𝗖𝗔 🔊", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗠𝗨𝗦𝗜𝗖𝗔', rowId: `${usedPrefix}musica`},
      {title: "💥 𝗛𝗜𝗧𝗦 💥", description: '𝗛𝗜𝗧𝗦 𝗩𝗔𝗥𝗜𝗔𝗗𝗢𝗦', rowId: `${usedPrefix}hits`},
      {title: "🎚️ 𝗔𝗖𝗢𝗥𝗡𝗧𝗩 🎚️", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗔𝗖𝗢𝗥𝗡 𝗧𝗩', rowId: `${usedPrefix}acorntv`},
      {title: "⚡ 𝗖𝗥𝗨𝗡𝗖𝗛𝗜𝗥𝗥𝗢𝗟 ⚡", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗖𝗥𝗨𝗡𝗖𝗛𝗜𝗥𝗥𝗢𝗟', rowId: `${usedPrefix}crunchirrol`},
      {title: "✴️ 𝗦𝗧𝗔𝗥 ✴️", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗦𝗧𝗔𝗥', rowId: `${usedPrefix}star`},
      {title: "📲 𝗖𝗟𝗔𝗥𝗢 𝗩𝗜𝗗𝗘𝗢 📲", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗖𝗟𝗔𝗥𝗢 𝗩𝗜𝗗𝗘𝗢', rowId: `${usedPrefix}clarovideo`},
      {title: "📖 𝗦𝗖𝗥𝗜𝗕𝗗 📖", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗗𝗘 𝗦𝗖𝗥𝗜𝗕𝗗', rowId: `${usedPrefix}scribd`},
      {title: "🪙 𝗖𝗢𝗠𝗣𝗥𝗔𝗥 🪙", description: '𝗖𝗢𝗠𝗣𝗥𝗔 𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢𝗦', rowId: `${usedPrefix}comprar4`},
      {title: "⚒️ 𝗠𝗘𝗡𝗨 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ⚒️", description: '𝗘𝗦𝗧𝗘 𝗘𝗦 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 𝙈𝙀𝙉𝙐 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑", description: '𝗘𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗦𝗢𝗟𝗢 𝗣𝗨𝗘𝗗𝗘 𝗦𝗘𝗥 𝗨𝗦𝗔𝗗𝗢𝗦 𝗣𝗢𝗥 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 : ${rtotalreg}*
*_________________________________________*
*Recuerda no cambiar las contraseñas a las cuentas*
*Si inicias sesion agradece con cap*
*Comparte el link del grupo*
*Recuerda registrarte en esta web para apoyarme*
https://billing.acidicnodes.ml/register?ref=nSzLjTPd
*_________________________________________*`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝗦", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(cuentas|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
