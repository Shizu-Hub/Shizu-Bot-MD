const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'   
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪
┏━━━━━━━━━━━━━┓
┃ *<🔞𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 +18🔞/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔞 _${usedPrefix}pack_
┣ 🔞 _${usedPrefix}pack2_
┣ 🔞 _${usedPrefix}pack3_
┣ 🔞 _${usedPrefix}videox_
┣ 🔞 _${usedPrefix}tetas_
┣ 🔞 _${usedPrefix}booty_
┣ 🔞 _${usedPrefix}ecchi_
┣ 🔞 _${usedPrefix}furro_
┣ 🔞 _${usedPrefix}imagenlesbians_
┣ 🔞 _${usedPrefix}panties_
┣ 🔞 _${usedPrefix}pene_
┣ 🔞 _${usedPrefix}porno_
┣ 🔞 _${usedPrefix}porno2_
┣ 🔞 _${usedPrefix}randomxxx_
┣ 🔞 _${usedPrefix}pechos_
┣ 🔞 _${usedPrefix}yaoi_
┣ 🔞 _${usedPrefix}yaoi2_
┣ 🔞 _${usedPrefix}yuri_
┣ 🔞 _${usedPrefix}yuri2_
┣ 🔞 _${usedPrefix}trapito_
┣ 🔞 _${usedPrefix}hentai_
┣ 🔞 _${usedPrefix}pies_
┣ 🔞 _${usedPrefix}nsfwloli_
┣ 🔞 _${usedPrefix}nsfworgy_
┣ 🔞 _${usedPrefix}nsfwfoot_
┣ 🔞 _${usedPrefix}nsfwass_
┣ 🔞 _${usedPrefix}nsfwbdsm_
┣ 🔞 _${usedPrefix}nsfwcum_
┣ 🔞 _${usedPrefix}nsfwero_
┣ 🔞 _${usedPrefix}nsfwfemdom_
┣ 🔞 _${usedPrefix}nsfwglass_
┣ 🔞 _${usedPrefix}xnxxsearch_
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
handler.command = /^(menunsfw|memunsfw|nsfw|menuhorny)$/i
handler.fail = null
handler.nsfw = true
handler.register = true
export default  handler