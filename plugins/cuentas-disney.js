let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 DISNEY+ 」─*\n*“${pickRandom(global.disney)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['disney']
handler.tags = ['fun']
handler.command = /^disney/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.disney = [
  "Correo: pielopes_2010@hotmail.com Contraseña: 985659ro",
  "Correo: shamiacurry@hotmail.com Contraseña: Scurry85!",
  "Correo: smitetha987@gmail.com Contraseña: smith1234",
  "Correo: shakirabartley@gmail.com Contraseña: P@pedog1",
  "Correo: cassidycurnyn@hotmail.com Contraseña: cassidyy13",
  "Correo: julien.bestron@gmail.com Contraseña: Sucesmoi54",
  "Correo: natalie@nativeno.com Contraseña: 4Me2know",

] 
