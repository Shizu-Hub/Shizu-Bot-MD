let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 NETFLIX 」─*\n*“${pickRandom(global.netflix)}”*\n*└────「 CUENTA GENERADA 」─*`, m)
}
handler.help = ['netflix']
handler.tags = ['fun']
handler.command = /^netflix/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.netflix = [
  "Correo: ravindra1976@gmail.com Contraseña: FedJok!2 ",
  "Correo: lee.trak97@gmail.com Contraseña: Trac110797",
  "Correo: bonnabona@hotmail.com Contraseña: 030411",
  "Correo: luismendes@codifinanca.pt Contraseña: Lpsm1974149",
  "Correo: tonomtz@outlook.com Contraseña: Tono251309@",
  "Correo: dsmmesquita@hotmail.com Contraseña: scorpion1978",
  "Correo: jesusdecorme@gmail.com Contraseña: jona2004",
  "Correo: belarmino20424-2@hotmail.com Contraseña: 20242024 ",
  "Correo: pinardursen@gmail.com Contraseña: 260905",
  "Correo: maceprg@gmail.com Contraseña: hana3248",
  "Correo: neggan200@gmail.com Contraseña: aecio#300386",
  "Correo: fjsmith4@gmail.com Contraseña: Lpsm1974149",
  "Correo: tonomtz@outlook.com Contraseña: Tono251309@",
  "Correo: dsmmesquita@hotmail.com Contraseña: Workshop7269",

] 
