let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 STAR+ 」─*\n*“${pickRandom(global.star)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
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
  "Correo: gusmaojean3@gmail.com Contraseña: rosa1997",
  "Correo: joaocamposjr@yahoo.com.br Contraseña: Morf@2651",
  "Correo: romeroraposo@gmail.com Contraseña: esqueci99",
  "Correo: dbrunatventasml@gmail.com Contraseña: frusciante17",
  "Correo: fernando170894@gmail.com Contraseña: Fernand2",
  "Correo: celina.pirondi@terra.com.br Contraseña: 8uenaVista",

] 
