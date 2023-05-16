/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 Donate 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name} 💙*
*┃*
*┃ 👉🏻 Thanks for Using My Bot*
*┃ Its really Appreciatable :𝟹*
*┃*
*┃ ➤ Number of Main developer:* 
*┃ wa.me/16468338933*
*┃ ➤ Country Of Ayush: India* 
*┃ ➤ Donation:* 
*┃ No Need* 
*┃ ➤ Age: 16*  
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
