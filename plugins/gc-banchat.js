let handler = async (m, { conn, participants }) => {
let chat = global.db.data.chats[m.chat]
  if (!(m.chat in global.db.data.chats)) return m.reply('                   *[❗𝐈𝐍𝐅𝐎❗]*\n\n*𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙽𝙻 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂!*')
 await conn.sendMessage(m.chat, { react: { text: '🫡', key: m.key } }) 
    if (chat.isBanned) return m.reply('                   *[❗𝐈𝐍𝐅𝐎❗]*\n\n*𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙱𝙰𝙽𝙴𝙰𝙳𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*')
    chat.isBanned = true
    m.reply('                    *[❗𝐈𝐍𝐅𝐎❗]*\n\n*𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*')
}
handler.help = ['bangrupo']
handler.tags = ['owner']
handler.command = /^bangrupo$/i
handler.admin = true
export default handler
