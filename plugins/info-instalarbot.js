let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙰𝙲𝙸𝙳𝙸𝙲𝙽𝙾𝙳𝙴𝚂 𝙷𝙾𝚂𝚃*
> Tutorial: https://youtu.be/rWzCNV2J8S0
> Pagina Oficial: https://billing.acidicnodes.ml/register?ref=nSzLjTPd
> Soporte: http://whatsapp.acidicnodes.com/

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> pkg install
> pkg upgrade
> pkg install git
> pkg install ffmpeg && pkg install libwebp
> pkg install nodejs
> pkg install yarn
> git clone https://github.com/Shizu-Hub/WaBot-MD
> cd WaBot-MD
> npm install
> yarn
> npm start`  
m.reply(text)   
}
handler.command = /^(instalarbot)/i
export default handler
