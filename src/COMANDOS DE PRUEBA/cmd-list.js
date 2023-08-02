let handler = async (m, { conn }) => {
conn.reply(m.chat, `
「 *LIST OF COMMANDS* 」
▢ Info: If it is in *bold* it is blocked

❉─────────────────────❉ 
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*(blocked)* ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
})}
handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']
export default handler
