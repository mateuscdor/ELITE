let handler = async (m, { conn }) => {
let emot = pickRandom([ "π₯΅", "π", "π", "π»", "πΌ", "π€©", "π₯°", "π", "π", "π₯³", "π", "π³", "π€«", "π₯΄", "π€§", "π€", "π€«", "π€", "π₯Ά", "π", "β‘οΈ", "π", "π", "π", "π", "π€π»", "ππ»", "πͺπ»", "ππ»", "π", "β€οΈ", "π§‘", "π", "π", "π", "π", "π€", "π€", "π€", "π", "β£οΈ", "π", "π", "π", "π", "π", "π", "π", "π", "π", "β", "π»", "π₯"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
    	}
    })	
}
handler.customPrefix = /|ghost|pogo|poke|pokΓ©mon|jhonnier|aya|f en el chat|genial|master|sip|nop||bro||que|cfm|xd|cc|shiny/i
handler.command = new RegExp

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

