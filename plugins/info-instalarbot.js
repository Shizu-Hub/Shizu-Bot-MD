let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let pp = './portada_download.jpg'
let text = `
Download Shizu-Bot

Descarga Shizu-Bot en tu número, bot de WhatsApp multi device, con comandos actualizados a diario.

Bot editable con menú desplegable

Link: https://youtu.be/rWzCNV2J8S0

GitHub: https://github.com/Shizu-Hub/Shizu-Bot-MD

Número OFC del Bot: +972 55-724-6503
Link: wa.me/+97255-724-6503

AcidicNodes
Mantén tus servidores activos 24/7 gratuitamente.
https://billing.acidicnodes.ml/register?ref=nSzLjTPd

Grupo de WhatsApp
https://chat.whatsapp.com/LwPNmhUV8P76isIyFgEK8E

Unete👆!!!

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
> npm startç
(Este bot puede tener fallos, porque esta desactualizado.)`  
m.reply(text)   
}
handler.command = /^(instalarbot)/i
export default handler
