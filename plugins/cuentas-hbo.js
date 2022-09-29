let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 HBO 」─*\n*“${pickRandom(global.hbo)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['hbo']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^hbo/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.hbo = [
  "Correo: khaleelcooper@gmail.com Contraseña: Kcooper13",
  "Correo: lmccorkle9@gmail.com Contraseña: Leyshon1",
  "Correo: suzhaufler@gmail.com Contraseña: Dashlily1!",
  "Correo: wordofbin+3@gmail.com Contraseña: a1652100",
  "Correo: wordofbin+4@gmail.com Contraseña: a1632086",
  "Correo: wordofbin+5@gmail.com Contraseña: a1920203",
  "Correo: wordofbin+9@gmail.com Contraseña: a1692101",
  "Correo: wordofbin+10@gmail.com Contraseña: a4621057",

] 
