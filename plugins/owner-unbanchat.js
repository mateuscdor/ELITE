let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no estΓ‘ registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('              *[βππππβ]* \n\n*π΄πππ΄ π²π·π°π π½πΎ π΄πππ° π±π°π½π΄π°π³πΎ.*')
  chat.isBanned = false
  m.reply('                       *[βππππβ]* \n\n*π΄πππ΄ π²π·π°π π΅ππ΄ π³π΄ππ±π°π½π΄π°π³πΎ π²πΎπ½ π΄ππΈππΎ.*')
}
handler.command = /^unbanchat$/i
handler.admin = true
export default handler
