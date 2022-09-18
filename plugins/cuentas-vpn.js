let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 KEEPSOLID 」─*\n*“${pickRandom(global.vpn)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['vpn']
handler.tags = ['fun']
handler.limit = 5
handler.command = /^vpn/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.vpn = [
  "Correo: behen71900@admarz.com Contraseña: @Shizu.hub",
  "Correo: nacar19667@apparls.com Contraseña: @Shizu.hub",
  "Correo: nekaso4157@ecipk.com Contraseña: @Shizu.hub",
  "Correo: xomel68728@admarz.com Contraseña: @Shizu.hub",
  "Correo: vawobeb465@apparls.com Contraseña: @Shizu.hub",
  "Correo: netad33153@ecipk.com Contraseña: @Shizu.hub",
  "Correo: sobeje2583@ecipk.com Contraseña: @Shizu.hub",
  "Correo: xepoli3895@apparls.com Contraseña: NeKosmic#321",

] 
