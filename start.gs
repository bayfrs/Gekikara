// --- START
bot.start(ctx => {
if (ctx.chat.type == 'private'){

// let bwaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '📅 dd-MMMM-YYYY \n⏰ HH:mm:ss')+'</code>'
let version = lumpia.version

let payload = ctx.payload;
if (!payload) {
  ctx.replyWithSticker(helper.random(startSticker));
  Utilities.sleep(123);
  let pesan = "tes <b>html</b> <i>parse</i>";
  ctx.replyWithHTML(pesan);
  Utilities.sleep(123);
  pesan = "tes *markdown* _parse_";
  ctx.replyWithMarkdown(pesan);
  Utilities.sleep(234);

pesan = '🤓 Hallo <b>'+umention(ctx)+'</b> [<code>'+ctx.from.id+'</code>]'
pesan += `\n\nperkenalkan <b>𝓼𝐜я𝕚𝐏𝓣ⓖ𝐎σ𝐠ℓ𝑒</b> @ScriptGooglebot!\n🦾 di<a href='https://t.me/bot_indonesia/66'>⁣</a>buat dengan <b>Lumpia</b> <code>v${version.number}.${version.build}</code>`
pesan += '\n\n'+xPings(ctx)

let keyb = [
  [button.url('⁣', 'https://t.me/ScriptGooglebot?start=cekID')]]
ctx.replyItWithHTML(pesan, { protect_content: true, reply_markup: markup.inlineKeyboard(keyb)})

Utilities.sleep(234);
sendMenuInline(ctx);}

/*
 ----- payLoad
 ------------- https://t.me/ScriptGooglebot?start=cekID
*/
if (payload == 'cekID') {
let awaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '📅 dd-MM-YYYY ⏰ HH:mm:ss')+'</code>'
let uname = ctx.from.username ? '@'+ctx.from.username : '@GunakanUsername';
let pesan = '🐣 '+umention(ctx)+'\n ├ 🆔 <code>'+ctx.from.id+'</code> '+ctx.from.language_code+'\n ╰─ ®️ '+uname+'\n\n'+awaktu+' '+xPings(ctx)
pesan = LTR(pesan)
ctx.replyItWithHTML(pesan, { protect_content: true});}

// -- batas START
}})

// -- Leave Chat
bot.on(['group_chat_created', 'new_chat_member'], ctx => {
if (! helper.isIn(markas, ctx.chat.id) ){
let hJSON = JSON.stringify(ctx.update, null, 2)
let blob = helper.textBlob('ScriptGooglebot'+ctx.message.date, hJSON);
let gname = ctx.chat.username ? '@'+ctx.chat.username : '';
try{
  ctx.replyWithSticker('CAACAgUAAxkBAAIim2BxtfwxzeKAN1lkzeDnEt206H68AAIsAwACRNfQVh1rkHInYZOqHgQ')
  ctx.replyWithChatAction('typing')
  let pesan = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '🕰 HH:mm:ss 📅 dd-MMMM-YYYY')+'</code>'
  pesan += '\n\n👥 <b><i>Group</i>:</b>'
  pesan += '\n ├🗝 id: <code>'+ctx.chat.id+'</code>'
  pesan += '\n ├⚜️ title: <b>'+ctx.chat.title+'</b> '+gname
  pesan += '\n └🗃 tipe: <i>'+ctx.chat.type+'</i>'
  pesan += "\n\n🙏🏼 <i>Permisi, 𝓼𝐜я𝕚𝐏𝓣ⓖ𝐎σ𝐠ℓ𝑒 akan pergi secara otomatis</i>."
  pesan += "\n<span class='tg-spoiler'>jOin [<b>c</b>]<s>oretan</s> <b>Script</b> @cScript kUy‼️</span>"
  ctx.replyWithDocument(blob, {caption: pesan, parse_mode: 'html'});
  ctx.replyWithSticker('CAACAgUAAxkBAAIh9GBwQZ9rDHkw4RxWJwey25ILGYYjAAIvAwACDlTQVnPVqf5ZCViMHgQ')
}catch(e){} ctx.leaveChat();}})

bot.cmd('leave', ctx => {
if (! helper.isIn(markas, ctx.chat.id) ){
// -- cek member
let cek = ctx.getChatMember(ctx.from.id)
let ustatus = cek.result.status
if (ustatus == 'administrator'){
  ctx.leaveChat();}}})
