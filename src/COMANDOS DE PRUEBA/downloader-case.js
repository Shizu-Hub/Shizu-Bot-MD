import { savefrom, instagramStalk, googleImage, mediafiredl, pinterest, youtubeSearch, wallpaper, wallpaperv2, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import { facebookDl } from './scraper.js'
import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import instagramGetUrl from 'fg-ig'
import axios from 'axios'
import hx from 'hxz-api' 
import fs from 'fs'
import yts from 'yt-search'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let limit = 80
let formatSize = sizeFormatter({std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
let type = (command).toLowerCase()
switch (type) {

case 'facebookdownloder': case 'facebookdl': case 'fb': case 'fbdl': case 'facebook':
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] enter a facebook link, EXAMPLE: ${usedPrefix + command}* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl`
try {
m.reply(`*[❗] downloading your video, please wait a moment, this process can take between 2 ʏ 10 minutes depending on the length of the video...*`)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*' }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] error, please try again*\n\n*- check that the link is similar to:*\n*◉* https://www.facebook.com/HolaSoySkull/videos/982580549178886/?app=fbl')} 
break 

case 'gdrive':
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] error, please try again*\n\n*- check that the link is similar to:*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*' 
try {
GDriveDl(args[0]).then(async (res) => {
conn.reply(m.chat, 'Downloading your file, please wait a moment.. \n\n! waiting time may vary depending on the length of the file, if the length exceeds 100 MB your file may not be sent', m)
if (!res) throw res
conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, { mimetype: res.mimetype, asDocument: true })})
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] error, please try again*\n\n*- check that the link is similar to:*\n*◉ https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*')}
break     

case 'gitclone':
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTER A GITHUB LINK,EXAMPLE: ${usedPrefix + command} https://github.com/xIKRATOSx/Shizu-Bot-MD*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃!*'
try {
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] WAIT A MOMENT WHILE I SEND YOUR FILE, IF IT IS NOT SENT IT MAY BE BECAUSE THE REPOSITORY IS VERY HEAVY*`)
conn.sendFile(m.chat, url, filename, null, m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break  

case 'instagram': case 'instagramdl': case 'ig': case 'igdl':
if (!(args[0])) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTRE AN INSTAGRAM LINK,EXAMPLE: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`
try {
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `🔗 *Url:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break                         

case 'igstalk': 
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] PLEASE ENTER THE USERNAME OF USER OF INSTAGRAM, EXAMPLE: ${usedPrefix + command} itx_ahmad.ali*`
try {
const { username, name, description, followersH, followingH, postsH } = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* FOLLOWERS
*${followingH}* FOLLLOWING
*${postsH}* POSTS
*𝙱𝙸𝙾:* ${description}
`.trim())
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break                          

case 'igstory': case 'ighistoria': 
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTRE THE NAME OF AN INSTAGRAM USER*\n\n*EXAMPLE:*\n*${usedPrefix + command} itx_ahmad.ali*`        
try {
hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', null, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)}}})
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break    

case 'gimage': case 'image': case 'imagen': 
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXAMPLE USING THE COMMAND ${usedPrefix + command} Minecraft*`
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *RESULT OF:* ${text}
🌎 *SEEKER:* Google
`, author, link, link, '🔗 𝚄𝚁𝙻', null, null, [
['🔄 NEXT 🔄', `/imagen ${text}`]
], m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break   

case 'mediafire': case 'mediafiredl': case 'dlmediafire': 
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ENTRE A VALID MEDIAFIRE LINK, EXAMPLE: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*NAME:* ${filename}
*SIZE:* ${filesizeH}
*TYPE:* ${ext}
*⏳ WAIT UNTIL I SEND YOUR FILE. . . .* 
*_- FILES LARGER THAN 100 MB MAY NOT BE SENT_* 
`.trim()
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: caption, contextInfo: { externalAdReply: {title: 'DOWNLOADED FROM 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴', body: 'ᴡʰᵃᵗˢᵃᵖᵖ 𝔹OT 🇧 🇾  𝕬𝖍𝖒𝖆𝖉 𝕬𝖑𝖎', thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Shizu-Bot-MD' }, mentionedJid: [m.sender]}}}, { quoted: m })
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] error, please try again*\n\n*- check that the link is similar to:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')}
break

case 'pinterest': case 'pinterest2':         
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXAMPLE OF USE OF COMMAND ${usedPrefix + command} Minecraft*`
try {
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `*SEARCH RESULTS*
${text}
`.trim(), m)  
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] error, please try again*\n\n*- check that the link is similar to:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/TheMystic-Bot-MD-master_%25285%2529.zip/file*')}        
break     

case 'play': case 'play2':         
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME PLEASE ENTER THE COMMAND PLUS THE NAME/TITLE OF A SONG* \n\n*—◉ EXAMPLE:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY I COULD NOT FIND THE AUDIO/VIDEO,TRY ANOTHER NAME/TITLE. *'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *TITLE:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿T𝙸𝙾𝙽:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸SHED:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰TION:* ${durationH}
👀 *𝚅𝙸EWS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv ${url}`],
['MORE RESULTS', `${usedPrefix}playlist ${text}`]  
], m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break 

case 'play3': case 'playdoc':         
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME PLEASE ENTER THE COMMAND PLUS THE NAME/TITLE OF A SONG*\n\n*—◉ 𝙴X𝙴𝙼𝙿𝙻E:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid2 = (await youtubeSearch(text)).video[0]
if (!vid2) throw '*[❗𝐈𝐍𝐅𝐎❗] SORRY I COULD NOT FIND THE AUDIO/VIDEO,TRY ANOTHER NAME/TITLE. *'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid2
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 —◉*
📌 *TITLE:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿TION:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸SHED:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰TION:* ${durationH}
👀 *𝚅𝙸EWS:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta.2 ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv.2 ${url}`]
], m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break      

case 'play.1': case 'play.2':         
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME, PLEASE ENTER THE SONG NAME/TITLE OR LINK OF ANY SONG OR YOUTUBE VIDEO*\n\n*—◉ 𝙴XA𝙼𝙿𝙻E:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m)}
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break  

case 'playlist': case 'playlist2':         
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING SONG NAME, PLEASE ENTER THE SONG NAME/TITLE OR LINK OF ANY SONG OR YOUTUBE VIDEO*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Begin you*`    
try {
let search = await yts(args.join(" "))
let listSerch = []
let listSerch2 = []
let listSerch3 = []
let listSerch4 = []
let teskd = `𝐌𝐮𝐬𝐢𝐜 RELATED TO: ${args.join(" ")}`
const sections = [{
title: `|－－－－－{ ＡＵＤＩＯ }－－－－－|`,
rows: listSerch },
{              
title: `|－－－－－{ ＶＩＤＥＯ }－－－－－|`,
rows: listSerch2 },
{              
title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ３ }－－|`,
rows: listSerch3 },
{              
title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ４ }－－|`,
rows: listSerch4 }]
const listMessage = {
text: teskd,
footer: 'CHOOSE AN OPTION AND PRESS SUBMIT',
title: " 『 RELATED MUSIC 』",
buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐒 ♦]",
sections}
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listSerch2.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listSerch3.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listSerch4.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*')}
break      

case 'tiktokfoto': case 'pptiktok': 
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] ENTER THE USERNAME OF A TIKTOK USER*'
try {
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴 ${text}*`, m, false)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break  

case 'ringtone':
if (!text) throw `*[❗] ENTER THE TEXT YOU WANT TO SEARCH FOR, EXAMPLE: ${usedPrefix + command} Hola*`
try {
let vn = await fetch(`https://fatiharridho.herokuapp.com/api/search/ringtone?query=${text}`)
let x = await vn.json()
conn.sendMessage(m.chat, { audio: { url: x.result[0].audio }, mimetype: 'audio/mp4' }, {quoted: m})
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break        

case 'soundcloud': case 'cover':
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] enter the name of a song to search*`
try {
let res = await fetch(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${text}`)
let json = await res.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.result.download}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒\n┬\n├‣✨ *TITLE:* ${json.result.title}\n┴\n┬\n├‣💚 *𝚄𝚁𝙻 𝙳𝙸𝚁𝙴𝙲𝚃:* ${shortUrl}\n┴\n\n*- SENDING MUSIC...*\n\n_﹫xIKRATOSx_`
conn.sendFile(m.chat, json.result.thumbnail, '', soundcloudt, m)
conn.sendFile(m.chat, json.result.download, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] SORRY I COULD NOT SEARCH THE SONG, PLEASE TRY AGAIN LATER*')}
break

case 'spotify': case 'music':
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] enter the name of a song to search*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${title}\n┴\n┬\n├‣🗣️ *ARTIST:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *𝚄𝚁𝙻:* ${preview_url}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] SORRY I COULD NOT SEARCH THE SONG, PLEASE TRY AGAIN LATER*')}
break 

case 'stickerly': case 'stickerpack':
if (!text) throw `*[❗] EXAMPLE: ${usedPrefix + command} https://getstickerpack.com/stickers/flork-memes-4-1*`
try {
let url = text
let res = await fetch(`https://api.zacros.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, 'sticker.webp', '', m, { asSticker: true })}
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, PLEASE TRY AGAIN*')}
break  

case 'tt': case 'tiktok': case 'ttdl': case 'tiktokdl': case 'ttnowm': case 'tiktoknowm': case 'tiktokaudio': case 'tiktokwm':
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] MISSING TIKTOK LINK, PLEASE ENTRE TIKTOK LINK*\n\n*—◉ 𝙴XAMPLE:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] INNCORECT TIKTOK LINK, PLEASE ENTRE A TIKTOK LINK*\n\n*—◉ EXAMPLE:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
let texto = `*[❗] @${m.sender.split`@`[0]} PLEASE WAIT UNTIL I SEND YOUR TIKTOK VIDEO*`
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Ikratos-Bot-MD', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Shizu-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
let meta = await getInfo(url).catch(_ => {})
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: '_Ikratos-Bot-MD_', footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: m })
} catch {
try {
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/xIKRATOSx/Shizu-Bot-MD' }, mentionedJid: [m.sender] }}}, { quoted: m })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark_raw || video.no_watermark || video.no_watermark_hd || video.with_watermark
await conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let buttons = [{ buttonText: { displayText: '𝙰𝚄𝙳𝙸𝙾' }, buttonId: `${usedPrefix}tomp3` }]
conn.sendMessage(m.chat, { video: { url: url}, caption: '_Ikratos-Bot-MD_', footer: await shortUrl(url), buttons }, { quoted: m })
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] SORRY AN ERROR OCCURED WHILE DOWNLOADING YOUR VIDEO, PLEASE TRY AGAIN*')  
}}    
break   

case 'tiktokstalk': case 'ttstalk':
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] INSERT THE COMMAND PLUS THE USERNAME OF A TIKTOK USER*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `*USAR:* ${json.result.username}\n*NAME:* ${json.result.nickname}\n*FOLLOWERS:* ${json.result.followers}\n*FOLLOWING:* ${json.result.followings}\n*𝙻𝙸𝙺𝙴𝚂:* ${json.result.likes}\n*𝚅𝙸𝙳𝙴𝙾𝚂:* ${json.result.video}\n*𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${json.result.bio}`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, THE USERNAME ENTERED WAS NOT RECEIVED*')}
break  

case 'wallpaper2': case 'wallpaper':
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] EXAMPLE OF USE OF THE COMMMAND ${usedPrefix + command} Minecraft*`
try {
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, img, 'error.jpg', `*RESULT OF ${text}*`, m)
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ERROR, PLEASE TRY AGAIN*')}
break  

case 'ytmp3doc': case 'ytadoc': case 'ytmp3.2': case 'yta.2':
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] INSERT THE COMAND PLUS LINK OF A YOUTUBE VIDEO*'
await m.reply(`*_⏳YOUR AUDIO IS BEING PROCESSED...⏳_*\n\n*◉ IF YOUR AUDIO IS NOT SENT, TRY THE COMMAND #playdoc ᴏ #play.2 ᴏ #ytmp4doc ◉*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[❗] ERROR COULD NOT DOWNLOAD THE AUDIO*', m)}
break          



default:
}}
handler.command = /^(facebookdownloder|facebookdl|fb|fbdl|facebook|gdrive|gitclone|instagram|instagramdl|ig|igdl|igstalk|igstory|ighistoria|gimage|image|imagen|mediafire|mediafiredl|dlmediafire|pinterest|pinterest2|play|play2|play3|playdoc|play.1|play.2|playlist|playlist2|tiktokfoto|pptiktok|ringtone|soundcloud|cover|spotify|music|stickerly|stickerpack|tt|tiktok|ttdl|tiktokdl|tiktokaudio|tiktoknowm|ttnowm|tiktokwm|tiktokstalk|ttstalk|wallpaper2|wallpaper|ytmp3doc|ytadoc|ytmp3.2|yta.2)$/i
export default handler










async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'  }})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}}

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
