let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 CANVA PRO 」─*\n*“${pickRandom(global.canva)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['canva']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^canva/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.canva = [
  "Correo: haxiw46560@apparls.com Contraseña: @Shizu.hub",
  "Correo: nileh70762@admarz.com Contraseña: @Shizu.hub",
  "Correo: wbbhgym364@ondania.com Contraseña: @Shizu.hub",
  "Correo: hyalhuf331@profunivers.com Contraseña: @Shizu.hub",
  "Correo: hcbrrdy343@otelekom.com Contraseña: @Shizu.hub",
  "Correo: fptdujg530@ondania.com Contraseña: @Shizu.hub",
  "Correo: xepoli3895@apparls.com Contraseña: NeKosmic#123",

] 
