const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦
┏━━━━━━━━━━━━━┓
┃ *<𝗟𝗢𝗚𝗢𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ 🖍️ _${usedPrefix}itssostupid_
┣ 🖍️ _${usedPrefix}pixelar_
┣ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.owner'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menulogo|menulogos|memulogos|memulogo)$/i
handler.fail = null
handler.register = true
export default  handler