let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*TodavΓ­a hay votos en este chat.!*`, author, null, [
                ['ππ’π₯π₯ππ₯', `${usedPrefix}-vote`]
            ], m)
            let caption = `Comienza la votaciΓ³n!
*${usedPrefix}cekvote* - comprobar votos 
*${usedPrefix}delvote* - borrar votacion`
            await conn.sendButton(m.chat, caption, author, null, [
                ['π©π’π§π’ π πππ©π’π₯', `${usedPrefix}upvote`],
                ['π©π’π§π’ ππ‘ ππ’π‘π§π₯π', `${usedPrefix}devote`]
            ], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(vote|votar)$/i

export default handler
