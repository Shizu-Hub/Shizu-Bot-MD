import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[👅] 𝙷𝙴𝚈 𝙼𝙰𝙷 𝙻𝙾𝚅𝙴 𝙸𝙽𝚃𝙴𝚁 𝚃𝙷𝙴 𝙽𝙰𝙼𝙴 𝙾𝙵 𝙲𝙾𝚄𝙽𝚃𝚁𝚈, 𝙵𝙾𝚁 𝙴𝚇𝙰𝙼𝙿𝙻𝙴 ${usedPrefix + command} Pakistan*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'País?'
if (json.confirmed) m.reply(`
🌏 Country : ${text}
✅Confirmed : ${json.confirmed.value}
📉Cured : ${json.recovered.value}
☠️Death's : ${json.deaths.value}
🤤Updated Info: ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <país>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
