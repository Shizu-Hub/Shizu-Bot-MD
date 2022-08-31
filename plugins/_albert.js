// # /////////////////////////////////////////////////////////////////////////// #
// #                                                                             #
// #                      Copyright 2022 TheH2SO4 (Hiro)                         #
// #                                                                             #
// #   Licensed under the Apache License, Version 2.0 (the "License");           #
// #   you may not use this file except in compliance with the License.          #
// #   You may obtain a copy of the License at                                   #
// #                                                                             #
// #       http://www.apache.org/licenses/LICENSE-2.0                            #
// #                                                                             #
// #   Unless required by applicable law or agreed to in writing, software       #
// #   distributed under the License is distributed on an "AS IS" BASIS,         #
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  #
// #   See the License for the specific language governing permissions and       #
// #   limitations under the License.                                            #
// #                                                                             #
// # /////////////////////////////////////////////////////////////////////////// #

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// #

// # || Start [📍] || #

const PLUGIN_VERSION="1.0.0"

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! Esta no es la manera correcta de usar *${usedPrefix}getcode*. La manera correcta de usarla es *${usedPrefix}getcode + <ruta del archivo>*! Ejemplo: *${usedPrefix}getcode /plugins/code-getcode.js*.\n\n---------| *${PLUGIN_VERSION}* ( ** ) |--------\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                conn.sendFile(m.chat, `.${args[0]}`, null, { quoted: m })
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[✅] Aqui esta el archivo en la ruta ' *${args[0]}* '!\n\nAlgun error? Reportalo abriendo una issue en GitHub!\n\n---------| *${PLUGIN_VERSION}* |--------\n\n╰══════⊂(^(工)^)⊃══════╯`)
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n---------| *${PLUGIN_VERSION}* |--------\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['albert help']
handler.tags = ['tools']
handler.command = ['albert help']
export default handler
