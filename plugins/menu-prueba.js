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

let pp = '.media/menus/Menu2.jpg'
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
 	]
    },
    {
        title: "𝗗𝗔𝗥𝗞 𝗦𝗜𝗗𝗘",
	rows: [    
	      {title: "𝗖𝗨𝗘𝗡𝗧𝗔𝗦", description: '𝗖𝗨𝗘𝗡𝗧𝗔𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠', rowId: `${usedPrefix}cuentas`},
	       	]
	        },
    {
        title: "𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦",
	rows: [    
	      {title: "𝗥𝗘𝗗𝗘𝗦", description: '𝗦𝗜𝗚𝗨𝗘𝗠𝗘 𝗘𝗡 𝗧𝗢𝗗𝗔𝗦 𝗠𝗜𝗦 𝗥𝗘𝗗𝗘𝗦', rowId: `${usedPrefix}redes`},
                ]
	        },
    {
        title: "𝗦𝗢𝗣𝗢𝗥𝗧𝗘 𝗧𝗘𝗖𝗡𝗜𝗖𝗢",
	rows: [    
	      {title: "𝗚𝗥𝗨𝗣𝗢𝗦", description: '𝗚𝗥𝗨𝗣𝗢 𝗗𝗘 𝗦𝗢𝗣𝗢𝗥𝗧𝗘', rowId: `${usedPrefix}grupos`},
	       	]
                },
    {
	title: "𝗢𝗪𝗡𝗘𝗥",
	rows: [
                {title: "𝗨𝗣𝗗𝗔𝗧𝗘", description: '𝗔𝗖𝗧𝗨𝗔𝗟𝗜𝗭𝗔𝗥 𝗕𝗢𝗧', rowId: `${usedPrefix}update`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bᴏᴛ Nᴀᴍᴇ :  Shizu - Bot*
*│* *│* *Creador del Bot: 𝗦𝗵𝗶𝘇𝘂* 
*│* *│* *N° del creador:* wa.me/34623442554 (No bot)*
*│* *│* *Apoyame registrandote en esta web*
*│* *│* *https://tinyurl.com/2jzuzsef*
*│* *│* *Mis redes: atom.bio/shizu_ofc*
*│* *╰────────────────❊*
*│*    *㊏───ɪɴғᴏ───㊏*
*│* *╭─────────────────❊*
*│* *│* *ɴᴀᴍᴇ :* ${name}
*│* *│* *sᴛᴀᴛᴜs: ${prem ? '🎫 Premium':'Free'}*
*│* *│* *ʙᴀʟᴀɴᴄᴇ : ${limit}*
*│* *│* *ʀᴜɴɴɪɴɢ ᴏɴ: AcidicNodes*
*│* *│* *ᴍᴏᴅᴇ : Publico✅*
*│* *│* *Dᴀᴛᴇ : ${week}, ${date}*
*│* *│* *ᴛɪᴍᴇ : ${uptime}*
*│* *│* *ᴛᴏᴛᴀʟ ᴜsᴇʀ : ${rtotalreg}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*`, footer: `${wm}`, pp,
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝗦", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menuprueba|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
