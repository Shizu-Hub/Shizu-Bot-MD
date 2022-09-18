let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 DISNEY+ 」─*\n*“${pickRandom(global.disney)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['disney']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^disney/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.disney = [
  "Correo: david_hession@hotmail.com Contraseña: Everton1",
  "Correo: vikilholanda@gmail.com Contraseña: felicidade27",
  "Correo: smitetha987@gmail.com Contraseña: smith1234",
  "Correo: shakirabartley@gmail.com Contraseña: P@pedog1",
  "Correo: eggencole@gmail.com Contraseña: Hunting97",
  "Correo: julien.bestron@gmail.com Contraseña: Sucesmoi54",
  "Correo: natalie@nativeno.com Contraseña: 4Me2know",

] 
