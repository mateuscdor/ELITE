import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

 
const sections = [
{
title: `Elige quiÃ©n puede enviar mensajes a este grupo :`,
rows: [
      {title: "ð¦ð¼ð¹ð¼ ð®ð±ðºð¶ð»ð¶ððð¿ð®ð±ð¼ð¿ð²ð", description: 'Pulsa ahi para cerrar el grupo                                â«', rowId: `.grupo cerrar`},
      {title: "ð§ð¼ð±ð¼ð ð¹ð¼ð ð½ð®ð¿ðð¶ð°ð¶ð½ð®ð»ðð²ð", description: 'Pulsa ahi para abrir el grupo                                â«', rowId: `.grupo abrir`},
]}, ]
 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*âMENU ABRIR/CERRAR GRUPOâ*

*âââââ² â¨ð´ð¹ð´ð¼ð¿ð»ð¾â¨ â³ââââ* 
*â  ${usedPrefix + command} abrir*
*â  ${usedPrefix + command} cerrar*
*âââââââââââââââââââ*
`, footer: `${wm}`, pp,
title: null,
buttonText: "ððð¨ð¦ð§ðð¦ ððð ðð¥ð¨ð£ð¢", 
sections }

await conn.sendMessage(m.chat, listMessage)

let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ â ] ð¶ððð¿ð¾ ð²ð¾ð½ðµð¸ð¶ððð°ð³ð¾ ð²ð¾ððð´ð²ðð°ð¼ð´ð½ðð´*')}
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(grupo|gc)$/i
handler.admin = true
handler.exp = 50
handler.register = true

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
