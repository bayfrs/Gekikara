bot.hear(/^(\.promote? )/i, (ctx) => {
let cTitle = ctx.message.text.replace(ctx.match[1],'');
if (helper.isIn(adminBot, ctx.from.id) ){

let replyMsg = ctx.message.reply_to_message
if (replyMsg){
  try{
    ctx.promoteChatMember(replyMsg.from.id, {
//      is_anonymous: false,
      can_manage_chat: true,
      can_change_info: false,
      can_delete_messages: true,
      can_manage_voice_chats: true,
      can_restrict_members: true,
      can_promote_members: true,
      can_invite_users: true,
      can_pin_messages: true
    })
  }catch(e){}
// -- cek member
let cek = ctx.getChatMember(replyMsg.from.id)
let ustatus = cek.result.status
// -- jika sudah admin, diberikan / ganti title
if (ustatus == 'administrator'){
  ctx.setChatAdministratorCustomTitle(replyMsg.from.id, cTitle);
// -- Laporan telah add admin
let awaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '⏰ HH:mm:ss 📅 dd-MM-YYYY')+'</code>'
let uname = replyMsg.from.username ? '@'+replyMsg.from.username : '';

let pesan = '<code>╭───「</code><b><i>added admin</i>:</b>'
pesan += '\n<code>│</code>'
pesan += '\n<code>├──「</code>'+LTR(replyMsgMention(ctx))+' ⭐️ '+cTitle
pesan += '\n<code>├─ •</code> '+uname
pesan += '\n<code>└── •</code> 🆔 <code>'+replyMsg.from.id+'</code>'
pesan += '\n\n'+awaktu
// -- pada channel atau sesuaikan
ctx.tg.sendMessage(-1001374226098, pesan, {parse_mode: 'html', protect_content: true});}
  ctx.deleteMessage();}}})

// -- un Admin
bot.hear(/^\.copote?/i, (ctx) => {
if (helper.isIn(adminBot, ctx.message.from.id) ){
let replyMsg = ctx.message.reply_to_message
if (replyMsg){
  ctx.promoteChatMember(replyMsg.from.id, {can_manage_chat: false});
  ctx.tg.sendMessage(ctx.chat.id, 'akses admin '+LTR(replyMsgMention(ctx))+' dicopots 💢', {parse_mode: 'html', protect_content: true});
  ctx.deleteMessage();}}})

// -- IDs
bot.cmd('id', ctx => {
let bwaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '📅 dd-MMMM-YYYY \n⏰ HH:mm:ss')+'</code>'
let awaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '📅 dd-MM-YYYY ⏰ HH:mm:ss')+'</code>'

let uname = ctx.from.username ? '@'+ctx.from.username : '@GunakanUsername';
let gname = ctx.chat.username ? '@'+ctx.chat.username : '';

if (ctx.chat.type == 'private') {
let pesan = '🐣 '+umention(ctx)+'\n ├ 🆔 <code>'+ctx.from.id+'</code> '+ctx.from.language_code+'\n ╰─ ®️ '+uname+'\n\n'+awaktu+' '+xPings(ctx)
pesan = LTR(pesan)
ctx.replyItWithHTML(pesan)}

if (helper.isIn(markas, ctx.chat.id) ){
let nChan = ctx.chat.title
let nType = ctx.chat.type
let chanChat = ctx.message.sender_chat
let pesan = '💬 <b>'+nChan+'</b>\n ├ 🆔 <code>'+ctx.chat.id+'</code>\n ╰─ 🦾 '+gname
if (chanChat) {
  pesan += '\n\n💭 <b>'+chanChat.title+'</b>\n ├ 🆔 <code>'+chanChat.id+'</code>\n ╰─ ®️ @'+chanChat.username+'\n\n'+bwaktu+'\n'+xPings(ctx)
}else{
  pesan += "\n\n🐣 "+umention(ctx)+"\n │\n ├ 🆔 <code>"+ctx.from.id+"</code> <i>"+ctx.from.language_code+"</i>\n ├ ®️ "+uname+"\n │\n ╰─ "+awaktu+" "+xPings(ctx)}
  pesan = LTR(pesan)
  ctx.replyItWithHTML(pesan)};})

// -- admin cek
bot.hear(/(^\.core )/i, (ctx) => {
let = uidGroup = ctx.message.text.replace(ctx.match[1],'');
let check = ctx.tg.getChatAdministrators(uidGroup)
let cre = "<code>╭──「</code> "+uidGroup+" <code>•</code>\n<code>│\n├──「</code><b><i>created by</i>:</b>"
let adm = "<code>├──「</code><b><i>admins</i>:</b>"
check.result.forEach((e)=>{
                     let adminStatus = e.status
                     let idAdmin = e.user.id
                     let namaAdmin = e.user.first_name
                     if(e.user.last_name) namaAdmin = e.user.first_name+" "+e.user.last_name
let oprex = '<a href="tg://user?id='+idAdmin+'">'+helper.clearHTML(namaAdmin)+'</a>'
if (e.custom_title) oprex += ' • <code>'+helper.clearHTML(e.custom_title)+'</code>'
if(/^creator/i.exec(adminStatus)){
  cre += "\n<code>│•</code> "+oprex
  cre+= "\n<code>│</code> [<code>"+idAdmin+"</code>]"
}else
  if(/^administrator/i.exec(adminStatus)){
    adm += "\n<code>├•</code> "+oprex//+" [<code>"+idAdmin+"</code>]"
    adm += "\n<code>│</code> [<code>"+idAdmin+"</code>]"
  }
})
let AdminList = cre+"\n<code>│</code>\n"+adm
let waktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '⏰ HH:mm:ss \n📅 dd-MM-YYY')+'\n'+xPings(ctx)+'</code>'
if (helper.isIn(markas, ctx.chat.id) ){
  ctx.replyItWithHTML(LTR(AdminList)+'<code>\n│</code>\n\n'+waktu)}})

bot.hear(/^\.core$/i, (ctx) => {
if (ctx.chat.type != 'private'){
  let check = ctx.tg.getChatAdministrators(ctx.chat.id)
  let cre = "<code>╭──「</code> "+ctx.chat.id+" <code>•</code>\n<code>│\n├──「</code><b><i>created by</i>:</b>"
  let adm = "<code>├──「</code><b><i>admins</i>:</b>"
  check.result.forEach((e)=>{
                       let adminStatus = e.status
                       let idAdmin = e.user.id
                       let namaAdmin = e.user.first_name
                       if(e.user.last_name) namaAdmin = e.user.first_name+" "+e.user.last_name
  let oprex = '<a href="tg://user?id='+idAdmin+'">'+helper.clearHTML(namaAdmin)+'</a>'
  if (e.custom_title) oprex += ' • <code>'+helper.clearHTML(e.custom_title)+'</code>'
  if(/^creator/i.exec(adminStatus)){
    cre += "\n<code>│•</code> "+oprex
    cre+= "\n<code>│</code> [<code>"+idAdmin+"</code>]"
  }else
    if(/^administrator/i.exec(adminStatus)){
      adm += "\n<code>├•</code> "+oprex
      adm += "\n<code>│</code> [<code>"+idAdmin+"</code>]"
    }
})
let AdminList = cre+"\n<code>│</code>\n"+adm
if (helper.isIn(adminBot, ctx.from.id) ){
  ctx.replyItWithHTML(LTR(AdminList)+"<code>\n│\n╰──</code> "+xPings(ctx));}}})

// -- PiNG
bot.hear(/^[\.!\/]?n?p[io]ng(@ScriptGooglebot)?$/i, (ctx) => {
if (helper.isIn(markas, ctx.chat.id) ){
if (ctx.message.sender_chat) return;
let replyMsg = ctx.message.reply_to_message
let pesan = "<a href='tg://user?id="+ctx.from.id+"'>🏓</a> <b><i>/pOng</i>!</b>\n"+xPings(ctx)
if (replyMsg){ return ctx.replyItWithHTML(pesan, { reply_to_message_id: replyMsg.message_id})}
ctx.replyItWithHTML(pesan);}})

// -- CAS
// CAS - Combot Anti-Spam check
// -- https://api.cas.chat/check?user_id=
bot.hear(/^(\.CAS )/i, (ctx) => {
let CAS = ctx.message.text.replace(ctx.match[1],'')
let resp = JSON.parse(UrlFetchApp.fetch('https://api.cas.chat/check?user_id='+CAS))
let bwaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '📅 dd-MMMM-YYYY \n⏰ HH:mm:ss')+'</code>'

if (!resp.ok) {
  let noRecord = '🆔 <code>'+CAS+'</code>\n<b><i>'+resp.description+'</i></b>\n<code>¯\\_(ツ)_/¯</code>\n\n'+bwaktu+'\n'+xPings(ctx)
  ctx.replyItWithHTML(noRecord)
} else {
  let oCAS = resp.result.offenses
  let mCAS = resp.result.messages
  let tAdd = resp.result.time_added

  let pCAS = '['+oCAS+'] <code>'+mCAS+'</code>\n\n<b>Banned</b>❗️[<code>'+tAdd+'</code>]'
let keyb = [[button.url('💢 Recorded spam messages', 'https://cas.chat/query?u='+CAS)]]
ctx.replyItWithHTML(pCAS, { reply_markup: markup.inlineKeyboard(keyb)});}})

bot.cmd('me', ctx => { if (helper.isIn(markas, ctx.chat.id) ){
if (ctx.message.sender_chat) return;
let cek = ctx.getChatMember(ctx.from.id)
let res = cek.result
let userID = res.user.id
let xname = res.user.first_name
if (res.user.last_name) xname = res.user.first_name+" "+res.user.last_name
let xmention = "<a href='tg://user?id="+userID+"'>"+xname+"</a>"
xmention = LTR(xmention)

let uname = res.user.username ? '@'+res.user.username : '@GunakanUsername';
let lang = res.user.language_code
let ustatus = res.status
let awaktu = '<code>'+Utilities.formatDate(new Date(), 'GMT+7', '⏰ HH:mm:ss 📅 dd-MM-YYYY')+'</code>'

let pesan = '<code>╭───「</code><b><i>'+xmention+'</i>:</b>'
pesan += '\n<code>│</code>'
pesan += '\n<code>├──「</code> 🆔 <code>'+ctx.from.id+'</code> [<b>'+lang+'</b>]'
pesan += '\n<code>├─ •</code> '+uname
pesan += '\n<code>└── •</code> <i>'+ustatus+'</i>'
pesan += '\n\n'+awaktu
ctx.replyItWithHTML(pesan);}})

// -- Lock Pin
bot.cmd('sPin', ctx => {
if (helper.isIn(adminBot, ctx.from.id) ){
  var replyMsg = ctx.message.reply_to_message
  if (replyMsg){
  var idPesanPin = replyMsg.message_id;
  userDB.setValue('pinIDgroup'+ctx.chat.id, idPesanPin)}
  ctx.tg.pinChatMessage(ctx.chat.id, idPesanPin);}
ctx.deleteMessage()})

// -- reload pin msg
bot.cmd('rPin', ctx => {
if (helper.isIn(adminBot, ctx.from.id) ){
  ctx.unpinAllChatMessages();
  ctx.tg.pinChatMessage(ctx.chat.id, userDB.getValue('pinIDgroup'+ctx.chat.id))};
ctx.deleteMessage();})

// -- ngelock pin yang ditimpa pin oleh channel
bot.on('message', ctx => {
if (helper.isIn(markas, ctx.chat.id) ) { if (ctx.message.forward_from_chat){
  if (ctx.message.from.id == 777000){
    ctx.unpinAllChatMessages();
    ctx.tg.pinChatMessage(ctx.chat.id, userDB.getValue('pinIDgroup'+ctx.chat.id));}}
}})

// -- semua members bebas nge-pin
bot.cmd('ipin', ctx => {
if (helper.isIn(markas, ctx.chat.id) ){
  var replyMsg = ctx.message.reply_to_message
  if (replyMsg){ ctx.tg.pinChatMessage(ctx.chat.id, replyMsg.message_id);}}
  ctx.deleteMessage();})

// -- semua members bebas unPin -- kecuali pinLock
bot.cmd('upin', ctx => {
if (helper.isIn(markas, ctx.chat.id) ){
  let replyMsg = ctx.message.reply_to_message
  let pinLock = userDB.getValue('pinIDgroup'+ctx.chat.id)
  if (replyMsg.message_id != pinLock)
    ctx.tg.unpinChatMessage(ctx.chat.id, replyMsg.message_id);
  ctx.deleteMessage();}})

// -- trigger bersihkan pin(Lock)
bot.cmd('xPin', ctx => {
if (helper.isIn(adminBot, ctx.from.id) ){
  userDB.delete('pinIDgroup'+ctx.chat.id);
  ctx.tg.unpinAllChatMessages();
  ctx.replyItWithHTML('#pinLock‼️<b>OFF</b>');}
ctx.deleteMessage();})

// -- PURGE
bot.cmd('purge', (ctx) => { if (helper.isIn(adminBot, ctx.from.id) ){
let replyMsg = ctx.message.reply_to_message
if (replyMsg){
  try{
  var awalMsg = replyMsg.message_id
  for ( var delMsg = 0; delMsg < 15; awalMsg++ ){
    ctx.deleteMessage(awalMsg);
    Utilities.sleep(123);}
  }catch(e){}
  return ctx.deleteMessage();}}})

bot.cmd('ajson', ctx => { if (helper.isIn(adminBot, ctx.from.id) ){
  let cek = ctx.tg.getChatAdministrators(ctx.chat.id)
  let hJSON = JSON.stringify(cek, null, 2)
try{
ctx.replyItWithHTML('<code>'+hJSON+'</code>');
}catch(e){
let pesan = '‼️ <i>message is too long</i>'
let blob = helper.textBlob('JSONadmins'+ctx.message.date, hJSON);
  ctx.replyItWithDocument(blob, {caption: pesan, parse_mode: 'html'});}}})

bot.cmd('cjson', ctx => { if (helper.isIn(adminBot, ctx.from.id) ){
  let cek = ctx.tg.getChat(ctx.chat.id)
  let hJSON = JSON.stringify(cek, null, 2)
try{
ctx.replyItWithHTML('<code>'+hJSON+'</code>');
}catch(e){
let pesan = '‼️ <i>message is too long</i>'
let blob = helper.textBlob('JSONchats'+ctx.message.date, hJSON);
  ctx.replyItWithDocument(blob, {caption: pesan, parse_mode: 'html'});}}})

bot.cmd('mjson', ctx => { if (helper.isIn(adminBot, ctx.from.id) ){
  let cek = ctx.tg.getChatMember(ctx.chat.id, ctx.from.id)
  let hJSON = JSON.stringify(cek, null, 2)
try{
ctx.replyItWithHTML('<code>'+hJSON+'</code>');
}catch(e){
let pesan = '‼️ <i>message is too long</i>'
let blob = helper.textBlob('JSONmembers'+ctx.message.date, hJSON);
  ctx.replyItWithDocument(blob, {caption: pesan, parse_mode: 'html'});}}})

// getChatMemberCount
bot.cmd('mcjson', ctx => { if (helper.isIn(adminBot, ctx.from.id) ){
  let cek = ctx.tg.getChatMembersCount(ctx.chat.id)
  let hJSON = JSON.stringify(cek, null, 2)
try{
ctx.replyItWithHTML('<code>'+hJSON+'</code>');
}catch(e){
let pesan = '‼️ <i>message is too long</i>'
let blob = helper.textBlob('JSONmembersCount'+ctx.message.date, hJSON);
  ctx.replyItWithDocument(blob, {caption: pesan, parse_mode: 'html'});}}})

// ****************************************************************
