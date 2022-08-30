const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu4.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢
┏━━━━━━━━━━━━━┓
┃ *<𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢/>*
┃     *- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🎤 _${usedPrefix}bass_
┣ 🎤 _${usedPrefix}blown_
┣ 🎤 _${usedPrefix}deep_
┣ 🎤 _${usedPrefix}earrape_
┣ 🎤 _${usedPrefix}fast_
┣ 🎤 _${usedPrefix}fat_
┣ 🎤 _${usedPrefix}nightcore_
┣ 🎤 _${usedPrefix}reverse_
┣ 🎤 _${usedPrefix}robot_
┣ 🎤 _${usedPrefix}slow_
┣ 🎤 _${usedPrefix}smooth_
┣ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.menu'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuefectos|menuefec|menuefect)$/i
handler.fail = null
handler.register = true
export default  handler