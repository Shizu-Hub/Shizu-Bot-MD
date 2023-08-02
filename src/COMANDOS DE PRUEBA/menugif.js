import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let img = await(await fetch('https://www.paidmembershipspro.com/wp-content/uploads/2017/07/PayPal-Express.png')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let str = `
*ミ💖 𝙷I ✨${taguser}✨, HERE IS THE COMPLETE MENU OF IKRATOS-BOT 💖彡*
*📅 DATE: ${week}, ${date}*
*📈 UPTIME: ${uptime}*
*📊 USERS: ${rtotalreg}*
${readMore}
*<INFORMATION OF BOT/>*
° 💟 _${usedPrefix}grupos_
° 💟 _${usedPrefix}estado_
° 💟 _${usedPrefix}infobot_
° 💟 _${usedPrefix}speedtest_
° 💟 _${usedPrefix}donar_
° 💟 _${usedPrefix}grouplist_
° 💟 _${usedPrefix}owner_
° 💟 _${usedPrefix}script_
° 💟 _Bot_ (USE WITHOUT PREFIX)
*<ADD BOT TO YOUR GROUP/>*
° 👽 _${usedPrefix}join *<enlace / link / url>*_
*<GAMES/>*
° 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
° 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
° 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
° 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
° 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
° 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° 🎖️ _${usedPrefix}love *<nombre / @tag>*_
° 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pregunta *<texto>*_
° 🎖️ _${usedPrefix}suitpvp *<@tag>*_
° 🎖️ _${usedPrefix}slot *<apuesta>*_
° 🎖️ _${usedPrefix}ttt *<nombre sala>*_
° 🎖️ _${usedPrefix}delttt_
° 🎖️ _${usedPrefix}simi *<texto>*_
° 🎖️ _${usedPrefix}top *<texto>*_
° 🎖️ _${usedPrefix}topgays_
° 🎖️ _${usedPrefix}topotakus_
° 🎖️ _${usedPrefix}formarpareja_
° 🎖️ _${usedPrefix}verdad_
° 🎖️ _${usedPrefix}reto_
° 🎖️ _${usedPrefix}cancion_
° 🎖️ _${usedPrefix}pista_
*<ACTIVATE OR DISABLE/>*
° ☑️ _${usedPrefix}enable *welcome*_
° ☑️ _${usedPrefix}disable *welcome*_
° ☑️ _${usedPrefix}enable *modohorny*_
° ☑️ _${usedPrefix}disable *modohorny*_
° ☑️ _${usedPrefix}enable *antilink*_
° ☑️ _${usedPrefix}disable *antilink*_
° ☑️ _${usedPrefix}enable *antilink2*_
° ☑️ _${usedPrefix}disable *antilink2*_
° ☑️ _${usedPrefix}enable *detect*_
° ☑️ _${usedPrefix}disable *detect*_
° ☑️ _${usedPrefix}enable *audios*_
° ☑️ _${usedPrefix}disable *audios*_
° ☑️ _${usedPrefix}enable *autosticker*_
° ☑️ _${usedPrefix}disable *autosticker*_
° ☑️ _${usedPrefix}enable *antiviewonce*_
° ☑️ _${usedPrefix}disable *antiviewonce*_
° ☑️ _${usedPrefix}enable *antitoxic*_
° ☑️ _${usedPrefix}disable *antitoxic*_
° ☑️ _${usedPrefix}enable *antitraba*_
° ☑️ _${usedPrefix}disable *antitraba*_
° ☑️ _${usedPrefix}enable *antiarabes*_
° ☑️ _${usedPrefix}disable *antiarabes*_
*<BUG REPORTS/>*
° 🔰 _${usedPrefix}reporte *<texto>*_
*<DOWNLOAD/>*
° 📥 _${usedPrefix}facebook *<enlace / link / url>*_
° 📥 _${usedPrefix}instagram *<enlace / link / url>*_
° 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
° 📥 _${usedPrefix}instagram *<enlace / link / url>*_
° 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
° 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
° 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
° 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
° 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
° 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° 📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
° 📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
° 📥 _${usedPrefix}play *<texto>*_
° 📥 _${usedPrefix}playdoc *<texto>*_
° 📥 _${usedPrefix}playlist *<texto>*_
° 📥 _${usedPrefix}playlist2 *<texto>*_
° 📥 _${usedPrefix}spotify *<texto>*_
° 📥 _${usedPrefix}ringtone *<texto>*_
° 📥 _${usedPrefix}soundcloud *<texto>*_
° 📥 _${usedPrefix}imagen *<texto>*_
° 📥 _${usedPrefix}pinteret *<texto>*_
° 📥 _${usedPrefix}wallpaper *<texto>*_
° 📥 _${usedPrefix}wallpaper2 *<texto>*_
° 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
° 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
° 📥 _${usedPrefix}igstory *<nombre de usuario>*_
° 📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
*<GROUP/>* 
° 💎 _${usedPrefix}add *<numero>*_
° 💎 _${usedPrefix}kick *<@tag>*_
° 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
° 💎 _${usedPrefix}promote *<@tag>*_
° 💎 _${usedPrefix}demote *<@tag>*_
° 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° 💎 _${usedPrefix}demote *<@tag>*_
° 💎 _${usedPrefix}infogroup_
° 💎 _${usedPrefix}link_
° 💎 _${usedPrefix}setname *<texto>*_
° 💎 _${usedPrefix}setdesc *<texto>*_
° 💎 _${usedPrefix}invocar *<texto>*_
° 💎 _${usedPrefix}setwelcome *<texto>*_
° 💎 _${usedPrefix}setbye *<texto>*_
° 💎 _${usedPrefix}hidetag *<texto>*_
° 💎 _${usedPrefix}fantasmas_
° 💎 _${usedPrefix}destraba_
*<CONVERT/>*
° 🧧 _${usedPrefix}togifaud *<responde a un video>*_
° 🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° 🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° 🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° 🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
° 🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° 🧧 _${usedPrefix}tts es *<texto>*_
*<EFFECTS AND LOGOS/>*
° 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
° 🖍️ _${usedPrefix}logocorazon *<texto>*_
° 🖍️ _${usedPrefix}logochristmas *<texto>*_
° 🖍️ _${usedPrefix}simpcard *<@tag>*_
° 🖍️ _${usedPrefix}hornycard *<@tag>*_
° 🖍️ _${usedPrefix}lolice *<@tag>*_
° 🖍️ _${usedPrefix}ytcomment *<texto>*_
° 🖍️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
° 🖍️ _${usedPrefix}itssostupid_
° 🖍️ _${usedPrefix}pixelar_
° 🖍️ _${usedPrefix}blur_
*<PHRASES AND TEXTS/>*
° 🥀 _${usedPrefix}consejo_
° 🥀 _${usedPrefix}fraseromantica_
° 🥀 _${usedPrefix}historiaromantica_
*<RANDOM/>*
° 👾 _${usedPrefix}cristianoronaldo_
° 👾 _${usedPrefix}messi_
° 👾 _${usedPrefix}meme_
° 👾 _${usedPrefix}itzy_
° 👾 _${usedPrefix}blackpink_
° 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
° 👾 _${usedPrefix}lolivid_
° 👾 _${usedPrefix}loli_
° 👾 _${usedPrefix}navidad_
° 👾 _${usedPrefix}ppcouple_
° 👾 _${usedPrefix}wpmontaña_
° 👾 _${usedPrefix}pubg_
° 👾 _${usedPrefix}wpgaming_
° 👾 _${usedPrefix}wpaesthetic_
° 👾 _${usedPrefix}wpaesthetic2_
° 👾 _${usedPrefix}wprandom_
° 👾 _${usedPrefix}wallhp_
° 👾 _${usedPrefix}wpvehiculo_
° 👾 _${usedPrefix}wpmoto_
° 👾 _${usedPrefix}coffee_
° 👾 _${usedPrefix}pentol_
° 👾 _${usedPrefix}caricatura_
° 👾 _${usedPrefix}ciberespacio_
° 👾 _${usedPrefix}technology_
° 👾 _${usedPrefix}doraemon_
° 👾 _${usedPrefix}hacker_
° 👾 _${usedPrefix}planeta_
° 👾 _${usedPrefix}randomprofile_
° 👾 _${usedPrefix}neko_
° 👾 _${usedPrefix}waifu_
° 👾 _${usedPrefix}akira_
° 👾 _${usedPrefix}akiyama_
° 👾 _${usedPrefix}anna_
° 👾 _${usedPrefix}asuna_
° 👾 _${usedPrefix}ayuzawa_
° 👾 _${usedPrefix}boruto_
° 👾 _${usedPrefix}chiho_
° 👾 _${usedPrefix}chitoge_
° 👾 _${usedPrefix}deidara_
° 👾 _${usedPrefix}erza_
° 👾 _${usedPrefix}elaina_
° 👾 _${usedPrefix}eba_
° 👾 _${usedPrefix}emilia_
° 👾 _${usedPrefix}hestia_
° 👾 _${usedPrefix}hinata_
° 👾 _${usedPrefix}inori_
° 👾 _${usedPrefix}isuzu_
° 👾 _${usedPrefix}itachi_
° 👾 _${usedPrefix}itori_
° 👾 _${usedPrefix}kaga_
° 👾 _${usedPrefix}kagura_
° 👾 _${usedPrefix}kaori_
° 👾 _${usedPrefix}keneki_
° 👾 _${usedPrefix}kotori_
° 👾 _${usedPrefix}kurumi_
° 👾 _${usedPrefix}madara_
° 👾 _${usedPrefix}mikasa_
° 👾 _${usedPrefix}miku_
° 👾 _${usedPrefix}minato_
° 👾 _${usedPrefix}naruto_
° 👾 _${usedPrefix}nezuko_
° 👾 _${usedPrefix}sagiri_
° 👾 _${usedPrefix}sasuke_
° 👾 _${usedPrefix}sakura_
° 👾 _${usedPrefix}cosplay_
*<COMMANDS 18+/>*
° 🔞 _${usedPrefix}pack_
° 🔞 _${usedPrefix}pack2_
° 🔞 _${usedPrefix}pack3_
° 🔞 _${usedPrefix}videoxxx_
° 🔞 _${usedPrefix}tiktokxxx_
° 🔞 _${usedPrefix}tetas_
° 🔞 _${usedPrefix}booty_
° 🔞 _${usedPrefix}ecchi_
° 🔞 _${usedPrefix}furro_
° 🔞 _${usedPrefix}imagenlesbians_
° 🔞 _${usedPrefix}panties_
° 🔞 _${usedPrefix}pene_
° 🔞 _${usedPrefix}porno_
° 🔞 _${usedPrefix}porno2_
° 🔞 _${usedPrefix}randomxxx_
° 🔞 _${usedPrefix}pechos_
° 🔞 _${usedPrefix}yaoi_
° 🔞 _${usedPrefix}yaoi2_
° 🔞 _${usedPrefix}yuri_
° 🔞 _${usedPrefix}yuri2_
° 🔞 _${usedPrefix}trapito_
° 🔞 _${usedPrefix}hentai_
° 🔞 _${usedPrefix}nsfwloli_
° 🔞 _${usedPrefix}nsfworgy_
° 🔞 _${usedPrefix}nsfwfoot_
° 🔞 _${usedPrefix}nsfwass_
° 🔞 _${usedPrefix}nsfwbdsm_
° 🔞 _${usedPrefix}nsfwcum_
° 🔞 _${usedPrefix}nsfwero_
° 🔞 _${usedPrefix}nsfwfemdom_
° 🔞 _${usedPrefix}nsfwglass_
*<EFFECTS ON AUDIO/>*
*- REPLY TO AN AUDIO/VOICE NOTE*
° 🎤 _${usedPrefix}bass_
° 🎤 _${usedPrefix}blown_
° 🎤 _${usedPrefix}deep_
° 🎤 _${usedPrefix}earrape_
° 🎤 _${usedPrefix}fast_
° 🎤 _${usedPrefix}fat_
° 🎤 _${usedPrefix}nightcore_
° 🎤 _${usedPrefix}reverse_
° 🎤 _${usedPrefix}robot_
° 🎤 _${usedPrefix}slow_
° 🎤 _${usedPrefix}smooth_
° 🎤 _${usedPrefix}tupai_
*<ANONYMOUS CHAT/>*
° 📳 _${usedPrefix}start_
° 📳 _${usedPrefix}next_
° 📳 _${usedPrefix}leave_
*<SEARCH/>*
° 🔍 _${usedPrefix}stickersearch *<texto>*_
° 🔍 _${usedPrefix}xnxxsearch *<texto>*_
° 🔍 _${usedPrefix}animeinfo *<texto>*_
° 🔍 _${usedPrefix}google *<texto>*_
° 🔍 _${usedPrefix}letra *<texto>*_
° 🔍 _${usedPrefix}wikipedia *<texto>*_
° 🔍 _${usedPrefix}ytsearch *<texto>*_
° 🔍 _${usedPrefix}apkdone *<texto>*_
° 🔍 _${usedPrefix}apkgoogle *<texto>*_
° 🔍 _${usedPrefix}apkmody *<texto>*_
° 🔍 _${usedPrefix}apkshub *<texto>*_
° 🔍 _${usedPrefix}happymod *<texto>*_
° 🔍 _${usedPrefix}hostapk *<texto>*_
° 🔍 _${usedPrefix}revdl *<texto>*_
° 🔍 _${usedPrefix}toraccino *<texto>*_
° 🔍 _${usedPrefix}uapkpro *<texto>*_
° 🔍 _${usedPrefix}playstore *<texto>*_
*<AUDIOS/>* 
*- WRITE THE FOLLOWING WORDS PHRASES WITHOU ANY PREFIX (#, /, *, .)* 
_(USE WITHOUT PREFIX)_
° 🔊 _Quien es tu sempai botsito 7w7_
° 🔊 _Te diagnostico con gay_
° 🔊 _A nadie le importa_
° 🔊 _Fiesta del admin_
° 🔊 _Fiesta del administrador_ 
° 🔊 _Vivan los novios_
° 🔊 _Feliz cumpleaños_
° 🔊 _Noche de paz_
° 🔊 _Buenos dias_
° 🔊 _Buenos tardes_
° 🔊 _Buenos noches_
° 🔊 _Audio hentai_
° 🔊 _Chica lgante_
° 🔊 _Feliz navidad_
° 🔊 _Vete a la vrg_
° 🔊 _Pasa pack Bot_
° 🔊 _Atencion grupo_
° 🔊 _Marica quien_
° 🔊 _Murio el grupo_
° 🔊 _Oh me vengo_
° 🔊 _tio que rico_
° 🔊 _Viernes_
° 🔊 _Baneado_
° 🔊 _Sexo_
° 🔊 _Hola_
° 🔊 _Un pato_
° 🔊 _Nyanpasu_
° 🔊 _Te amo_
° 🔊 _Yamete_
° 🔊 _Bañate_
° 🔊 _Es puto_
° 🔊 _La biblia_
° 🔊 _Onichan_
° 🔊 _Mierda de Bot_
° 🔊 _Siuuu_
° 🔊 _Epico_
° 🔊 _Shitpost_
° 🔊 _Rawr_
° 🔊 _UwU_
° 🔊 _:c_
° 🔊 _a_
*<TOOLS/>*
° 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
° 🛠️ _${usedPrefix}afk *<motivo>*_
° 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
° 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° 🛠️ _${usedPrefix}calc *<operacion math>*_
° 🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° 🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
° 🛠️ _${usedPrefix}qrcode *<texto>*_
° 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° 🛠️ _${usedPrefix}styletext *<texto>*_
° 🛠️ _${usedPrefix}traducir *<texto>*_
° 🛠️ _${usedPrefix}nowa *<numero>*_
° 🛠️ _${usedPrefix}covid *<pais>*_
*<RPG ECONOMY LIMITED/>*
° 💵 _${usedPrefix}balance_
° 💵 _${usedPrefix}claim_
° 💵 _${usedPrefix}lb_
° 💵 _${usedPrefix}levelup_
° 💵 _${usedPrefix}myns_
° 💵 _${usedPrefix}perfil_
° 💵 _${usedPrefix}work_
° 💵 _${usedPrefix}minar_
° 💵 _${usedPrefix}buy_
° 💵 _${usedPrefix}buyall_
° 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° 💵 _${usedPrefix}verificar_
° 💵 _${usedPrefix}unreg *<numero de serie>*_
*<STICKERS/>*
° 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° 👽 _${usedPrefix}sticker *<enlace / link / url>*_
° 👽 _${usedPrefix}s *<responder a imagen o video>*_
° 👽 _${usedPrefix}s *<enlace / link / url>*_
° 👽 _${usedPrefix}sfull *<responder a imagen o video>*_
° 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° 👽 _${usedPrefix}scircle *<responder a imagen>*_
° 👽 _${usedPrefix}sremovebg *<responder a imagen>*_
° 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° 👽 _${usedPrefix}attp *<texto>*_
° 👽 _${usedPrefix}attp2 *<texto>*_
° 👽 _${usedPrefix}attp3 *<texto>*_
° 👽 _${usedPrefix}ttp *<texto>*_
° 👽 _${usedPrefix}ttp2 *<texto>*_
° 👽 _${usedPrefix}ttp3 *<texto>*_
° 👽 _${usedPrefix}ttp4 *<texto>*_
° 👽 _${usedPrefix}ttp5 *<texto>*_
° 👽 _${usedPrefix}pat *<@tag>*_
° 👽 _${usedPrefix}slap *<@tag>*_
° 👽 _${usedPrefix}kiss *<@tag>*_
° 👽 _${usedPrefix}dado_
° 👽 _${usedPrefix}wm *<packname> <author>*_
° 👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
° 👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
*<OWNER AND MODERATORS/>*
° 👑 > *<funcion>*
° 👑 => *<funcion>*
° 👑 $ *<funcion>*
° 👑 _${usedPrefix}cajafuerte_
° 👑 _${usedPrefix}blocklist_
° 👑 _${usedPrefix}enable *restrict*_
° 👑 _${usedPrefix}disable *restrict*_
° 👑 _${usedPrefix}enable *autoread*_
° 👑 _${usedPrefix}disable *autoread*_
° 👑 _${usedPrefix}enable *public*_
° 👑 _${usedPrefix}disable *public*_
° 👑 _${usedPrefix}enable *pconly*_
° 👑 _${usedPrefix}disable *pconly*_
° 👑 _${usedPrefix}enable *gconly*_
° 👑 _${usedPrefix}disable *gconly*_
° 👑 _${usedPrefix}enable *anticall*_
° 👑 _${usedPrefix}disable *anticall*_
° 👑 _${usedPrefix}enable *antiprivado*_
° 👑 _${usedPrefix}disable *antiprivado*_
° 👑 _${usedPrefix}msg *<texto>*_
° 👑 _${usedPrefix}banchat_
° 👑 _${usedPrefix}unbanchat_
° 👑 _${usedPrefix}banuser *<@tag>*_
° 👑 _${usedPrefix}unbanuser *<@tag>*_
° 👑 _${usedPrefix}dardiamantes *<@tag>*_
° 👑 _${usedPrefix}añadirxp *<@tag>*_
° 👑 _${usedPrefix}banuser *<@tag>*_
° 👑 _${usedPrefix}bc *<texto>*_
° 👑 _${usedPrefix}bcchats *<texto>*_
° 👑 _${usedPrefix}bcgc *<texto>*_
° 👑 _${usedPrefix}cleartpm_
° 👑 _${usedPrefix}restart_
° 👑 _${usedPrefix}update_
° 👑 _${usedPrefix}banlist_
° 👑 _${usedPrefix}addprem *<@tag>*_
° 👑 _${usedPrefix}delprem *<@tag>*_
° 👑 _${usedPrefix}listprem_
° 👑 _${usedPrefix}listcmd_
° 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
° 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
*<WHATSAPP VIRUS EYES/>*
° ☠ _${usedPrefix}crash𝟷_
° ☠ _${usedPrefix}crash2_
° ☠ _${usedPrefix}crash3_
° ☠ _${usedPrefix}crash4_
° ☠ _${usedPrefix}crash5_
° ☠ _${usedPrefix}crash6_
`.trim()

const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4',
'https://telegra.ph/file/e38881701692c74484a17.mp4',
'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4',     'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4',     'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4']

var vid = vi[Math.floor(Math.random() * (vi.length))]

//templateButtons
let templateButtons = [ 
{index: 1, urlButton: {displayText: 'GITHUB', url: 'https://github.com/xIKRATOSx/Shizu-Bot-MD'}},
{index: 2, urlButton: {displayText: 'INSTAGRAM', url: 'https://www.instagram.com/its_ahmad.ali'}},
{index: 3, quickReplyButton: {displayText: 'OWNER', id: '#owner'}},
{index: 4, quickReplyButton: {displayText: 'INFOBOT', id: '#infobot'}},
]

conn.sendMessage(m.chat, { video: { url: vid }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: str.trim(), footer: wm, templateButtons }, { quoted: m})

} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] THE MENU HAS AN ERROR AND IT WAS NOT POSSIBLE TO SEND IT, REPORT IT TO THE OWNER OF BOT*', m)
}}
handler.command = /^(prueba)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
