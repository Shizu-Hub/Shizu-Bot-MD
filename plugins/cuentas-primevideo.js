let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 PRIME VIDEO 」─*\n*“${pickRandom(global.star)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['star']
handler.tags = ['fun']
handler.limit = 2
handler.command = /^star/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.star = [
  "Correo: pruevau36@gmail.com Contraseña: registrate en esta web https://dash.boxmineworld.com/register?ref=xGjnynVf y reclama tu cuenta en wa.e/34623442554 oferta valida hasta el 22/10/22",

] 
