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
  "Correo: jetrueba2004@yahoo.com Contraseña: Amber305@",
  "Correo: jrod9613@yahoo.com Contraseña: Baseball87*",
  "Correo: dalofs2001@yahoo.com Contraseña: Chloecalla2",
  "Correo: shakirabartley@gmail.com Contraseña: P@pedog1",
  "Correo: eggencole@gmail.com Contraseña: Hunting97",
  "Correo: julien.bestron@gmail.com Contraseña: Sucesmoi54",
  "Correo: natalie@nativeno.com Contraseña: 4Me2know",

] 
