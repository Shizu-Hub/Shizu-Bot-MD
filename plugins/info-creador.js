let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ The Developer (Ayush) Number wa.me/16468338933*

*—◉ Developer ka Number wa.me/16468338933*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/ayushdeveloper001` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/ayushdeveloper001',
'mediaType': 2,
'previewType': 'pdf',
'title': 'number of the developer ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/@akioisop' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//lllet vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Ayush 👑;;;\nFN:Ayush 👑\nORG:Ayush 👑\nTITLE:\nitem1.TEL;waid=16468338933:+1 646 833 8933\nitem1.X-ABLabel:Ayush\nX-WA-BIZ-DESCRIPTION:[❗] Developer's number.\nX-WA-BIZ-NAME:Ayush 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Ayush', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
