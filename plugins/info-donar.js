/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙴𝙻𝙻𝙾 𝙼𝙰𝙷 𝙻𝙾𝚅𝙴 ${name} 💙*
*┃*
*┃ 👉🏻 𝙷𝙴𝚁𝙴 𝚂𝙾𝙼𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 𝙸𝙽 𝙲𝙰𝚂𝙴 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝚃𝙾 𝚂𝚄𝙿𝙿𝙾𝚁𝚃 *
* :𝟹*
*┃*
*┃ ➤ KEY CODE? :* 
*┃ 03475589080*
*┃ ➤ Account : EASYPAISA* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝚈:* 
*┃ BRUNO SOBRINO* 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃: 𝚄𝙳-𝙼𝙳-𝚅1*  
*┃ ➤ 𝙴𝙰𝚂𝚈𝙿𝙰𝙸𝚂𝙰: 03475589080*
*┃*
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 * 
*┃ 𝚈𝙾𝚄 𝙽𝙴𝙴𝙳 𝙼𝙾𝚁𝙴*
*┃ 𝙶𝙸𝙵𝚃 𝙰𝙽𝙳 𝙵𝙾𝚁* 
*┃ 𝚃𝙷𝙰𝙽𝙺 𝚈𝙾𝚄 🌚🔥<𝟹*
*┃ wa.me/19294515557*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
