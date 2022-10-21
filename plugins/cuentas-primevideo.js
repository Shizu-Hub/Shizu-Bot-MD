let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 PRIME VIDEO 」─*\n*“${pickRandom(global.primevideo)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['primevideo']
handler.tags = ['fun']
handler.limit = 2
handler.command = /^prime/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.primevideo = [
  "Registrate en esta web https://dash.boxmineworld.com/register?ref=xGjnynVf y reclama tu cuenta en wa.me/34623442554 oferta valida hasta el 22/10/22",

] 
