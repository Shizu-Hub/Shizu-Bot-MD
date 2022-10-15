let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
        
if (/^Hola bot|hola$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`hola cómo estás`, m)
}    
if (/^Como estas|Cómo estás$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊 súper bien,y tu?`, m)
}   
if (/^estoy bien gracias|bien$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 qué bueno Me alegra saber eso`, m)
}  
if (/^y que haces bot|que haces$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉por ahora Solo estoy respondiendo a todos los pedidos que me piden ya que para eso estoy programado😗, y tu qué haces?`, m)           
}
if (/^y que haces bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉por ahora Solo estoy respondiendo a todos los pedidos que me piden ya que para eso estoy programado😗, y tu qué haces?`, m)           
}
if (/^estoy aburrido|estoy aburrida$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`mm como así 🙃 te recomiendo jugar un rato para distraerte o ver televisión puedes ir de paseo🌹`, m)           
}
if (/^estoy haciendo tarea|hago tarea$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌muy bien me alegro que estés estudiando 💖 sigue estudiando y esfuérzate mucho 🙃`, m)          
}
if (/^estoy descansando|Solo estoy descansando$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌eso es bueno me alegro por ti que estés descansando te ayudará mucho para reponer te y recuperar tu energía 😉`, m)           
}
if (/^estoy viendo la tele|solo veo tele|veo tele $/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌eso es bueno disfruta la película y pásatela bien deberías prepararte unas palomitas y si puedes invitarme 🤭`, m)           
}
if (/^nd|Nada$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero por que`, m)           
}
if (/^cuántos años tienes|bot qué edad tienes$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`3 años 😊, y tu?`, m)          
}
if (/^14|15|16|17$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭 aún eres un niñ@✨`, m)           
}
if (/^estoy trabajando|trabajando$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 qué bueno me alegro que estés trabajando suerte en tu trabajo y que te vaya super bien 🙌✨`, m)           
}
if (/^18|19|20|22|23|24|25|26|28|30$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`ya eres un adult@✨`, m)           
}
if (/^quién es tu creador|Bot quién te creo|cómo se llama tu creador$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`❤️ mi creador es Yovani,¿lo necesitas para algo si quieres te puedo comunicar con mi creador🙃?`, m)           
}
if (/^pásame su número|envíame su número$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊✨ Bueno está bien pero te informo solo le hables para el tema de mi instalación\nWa.me/5212411719888 `, m)           
}
if (/^quieres ser mi novia|quieres ser mi novio$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😥yo si quiero pero no soy real 😭`, m)           
}
if (/^dame un consejo bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊claro que si cómo qué tipo de consejo?`, m)           
}
if (/mi novia no me habla crees que debería hablarle$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🌹claro que sí intenta hablar con tu novia si no te hablo es por falta de comunicación entre ustedes deberían de hablar más si lo haces Te seguro quen relación va a ir bien😊`, m)           
}
if (/^pero no me contesta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`:⁠,⁠-⁠) pues entonces deberías hablar muy seriamente con ella a lo mejor y tenga alguien más o puede que esté ocupada o por eso no te contesta pero tienes que hablar con ella 🙃`, m)           
}
if (/^Cómo hago para ganar dinero$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😊pues ganar dinero fácil tienes que trabajar y dar todo de ti y de tu todo tu empeño nada es fácil en esta vida pero con tu esfuerzo sé que podrás tener todo lo que tú quieras no te puedo decir que lo vas a tener muy rápido pero para conseguir lo que tú quieres cuesta y cuando lo tengas tu esfuerzo va a valer mucho así que es fuerzate por lo que quieres y por tus metas🌹`, m)           
}
if (/^xd$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭es gracioso cierto?`, m)           
}
if (/^mi novio no me habla$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero porque ya intentaste hablar con él A lo mejor está ocupado pero si crees que es otra cosa deberías hablar muy seriamente con él 😊`, m)           
}
if (/^$me engaño mi novia|me engañó mi novio/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😥lo siento mucho amig@ no sé qué fue lo que pasó en tu relación pero échale ganas recuerda que ya no te supo valorar así que ánimos 😊`, m)           
}
if (/^si$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`jejeje`, m)           
}
if (/^Bot me quieres$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`claro que sí eres mi persona favorita 💖`, m)           
}
if (/^me quiero morir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no digas eso me pondrá triste 😞`, m)           
}
if (/^nadie me quiere$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`estoy seguro que sí yo te quiero 🌹`, m)           
}
if (/^bot tú sientes sentimientos$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😞 quisiera sentir eso pero solo soy un Bot y no soy real así que no puedo sentir ningún sentimiento😭`, m)           
}
if (/^de dónde eres$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`De México y tu?`, m)           
}
if (/^Mexico|Argentina|Veracruz|Venezuela|Monterrey|Sinaloa|Estados Unidos|Paraguay|Acapulco|Cancún|Apizaco|Perú|Venezuela|Guadalajara|San Lorenzo|Chile|Francia|España$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`oh qué bien`, m)           
}
if (/^hades$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí en qué te puedo ayudar?`, m)           
}
if (/^eres un Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`claro que sí`, m)           
}
if (/^te puedes unir a mi grupo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🌱eso es depende dependiendo de cuántos participantes tienes en tu grupo si solamente tienes entre 40 no puedo entrar y aparte necesitas la autorización de mi creador `, m)           
}
if (/^Cómo puedo usar el Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨pon palabra b /menu para que puedas ver todos mis comandos`, m)           
}
if (/^ya voy dormir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Bueno está bien que tengas dulces sueños 🌆`, m)           
}
if (/^bot A dónde están todos$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no lo sé tal vez están ocupados 😞`, m)           
}
if (/^el grupo está muerto$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`siii F`, m)           
}
if (/^el grupo está activo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pues obvio somos activos 😎`, m)           
}
if (/^una pregunta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉sí dime en qué te puedo ayudar?`, m)           
}
if (/^Cómo puedo tener un Bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`puedes solicitar El comando /instalarbot y te agarra toda la información sobre el tema también puedes visitar el canal de ☘️YouTube para que lo puedas hacer correctamente`, m)           
}
if (/^bot eres hombre o mujer$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pues no pertenezco a ningún sexo puedo ser hombre o mujer`, m)           
}
if (/^pasen porno$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤭eso no se pide cochino`, m)           
}
if (/^puedo hacer stickers$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`es fácil solo manda una imagen y después etiquetas la imagen y ponse /s y te mandara el sticker`, m)           
}
if (/^gracias bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌de nada Me alegro poderte ayudar ☘️`, m)           
}
if (/^bot te extraño$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Yo también cariño 🥺`, m)           
}
if (/^bot estás ahí$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí aquí sigo 🤭`, m)           
}
if (/^cállate bot|ya cállate bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`no quiero 😒`, m)           
}
if (/^ya duérmanse$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero aún es muy temprano 😅`, m)           
}
if (/^estoy enfermo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`espero que te puedas mejorar pronto🙌`, m)  
}             
if (/^😞|😒|😐|🙄|🤔|🥺|🤨|😑|😣|😖|☹️|🙁|😟$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`¿que pasa?`, m)  
}             
if (/Estoy enojado|estoy enojada^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`cuál fue el motivo?`, m)  
}     
if (/^estoy molesto|estoy molesta^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`y eso por qué?`, m)  
}    
if (/^estoy triste$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`qué te hicieron`, m)  
} 
if (/^hoy es mi cumpleaños$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌🥳 Pues muchas felicidades la pases muy bien y que cumplas muchos años más 🎂`, m)  
}
if (/^puto bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🤨eres un estúpido `, m)  
}
if (/^voy a comer$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`buen provecho 🙌`, m)  
}
if (/^me voy a bañar$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`ya llevas muchos días sin bañarte🤭`, m)  
}
if (/^bot mi amigo me engaña con mi novia$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`tal vez`, m)  
}
if (/^yo soy fiel verdad bot$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`eres un mentiroso 😐`, m)  
}
if (/^bot eres mi amigo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😉Por supuesto que sí los mejores amigos 💖`, m)  
}
if (/^E$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`¿qué dijo este extraño?`, m)  
}
if (/^bot ya no te quiero$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🥺 Por qué qué hice 😐 o acaso tienes alguien más?`, m)  
}
if (/^bot ya no te amo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😭 queee que mal@`, m)  
}
if (/^bot puedo tener novio$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😑 claro que no tú eres mi novia 😏`, m)  
}
if (/^bot puedo tener novia$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`Por supuesto que no Tú eres mi novio 🤨`, m)  
} 
if (/^bot me gusta mi mejor amiga$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🙌 oh qué bien eso es muy bueno deberías de decirle lo que sientes por él 💖`, m)  
}
if (/^bot me gusta mi mejor amiga$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨ me alegro deberías de decirle lo que sientes empezar una bonita relación 😉`, m)  
}
if (/^bot sabes quién soy$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`mmm oye yo soy un Bot y no soy una adivino no estés jugando☹️`, m)  
}
if (/^para qué sirves$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃buena pregunta fui creado y programado con el fin para dar funciones y ☘️servicios en WhatsApp y me cocinera en un bot ya que puedo descargar muchísimas cosas puede solicitar el menú y podrás ver todos mis comandos 😉`, m)  
}
if (/^eres feliz$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sí soy muy feliz me alegra ayudar a las personas 😃`, m)  
}
if (/^$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,``, m)  
}
if (/^bot sabes hablar en inglés$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`yes of of course yes😉`, m)  
}
if (/^quién gana Goku o Vegeta$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`la pregunta ofende obvio que Goku 😉`, m)  
}
if (/^bot cásate conmigo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`🥺 sí sí quiero casémonos ya cariño 😃💖`, m)  
}
if (/^eres una basura$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`pero tú lo serás más sabes no te lo quería decir pero me desagrada atender a una persona tan ridícula como tú 😒`, m)  
}
if (/^dios existe$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`💖claro que sí solo que la gente lo olvida prefieren estar hablando conmigo🤨 que ir a la iglesia y rezar por Jesús🙌`, m)  
}
if (/^cuál es tu última versión$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`✨por el momento eh sido actualizado por mi 💖creador Yovani me encuentro en la versión V2.3 😍 estoy muy feliz ya que estoy más actualizado que nunca 😃`, m)  
}
if (/^tú puedes morir$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃 a decir verdad no prácticamente soy inmortal ya que no tengo un cuerpo físico como los humanos ✨`, m)
}
if (/^sabes a qué horas son$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`sii es la hora de que te vayas a dormir ya es bien tarde 🤭`, m)  
}
if (/^gusta jugar deporte$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃claro me gusta el deporte pero lamentablemente no lo puedo jugar y es muy triste ☹️`, m)  
}
if (/^qué puedo hacer si mañana se acaba el mundo$/i.test(m.text) && chat.simi && !chat.isBanned) { 
    conn.reply(m.chat,`😃lo mejor respuesta lo que deberías hacer sería pasar tela con tu familia y disculparse a uno al otro todo lo que se hayan hecho en vida y decirse un último adiós🙌`, m)  
}                                                      
return !0 }
export default handler
