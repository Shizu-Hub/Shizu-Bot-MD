let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 CRUNCHYROLL」─*\n*“${pickRandom(global.crunchyroll)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['crunchyroll']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^crunchyroll/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.crunchyroll = [
  "👑CRUNCHYRROL PREMIUM👑 ✉CORREO: chrisbruton99@yahoo.com 🗝️CONTRASEÑA: Chbru176!",


] 
