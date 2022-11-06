// -- kepoin profile photo(s)
bot.cmd('kepo', ctx => { if (helper.isIn(markas, ctx.chat.id) ){
if (ctx.message.sender_chat) return;
let replyMsg = ctx.message.reply_to_message
if (replyMsg){
if (replyMsg.sender_chat) return;

let profile = ctx.tg.getUserProfilePhotos(replyMsg.from.id)
if (profile.result.total_count < 1) { ctx.replyItWithHTML("‼️ ProfilePhoto(s) <span class='tg-spoiler'><i>"+LTR(replyMsgMention(ctx))+"</i></span> --- <b>nOt found</b>");
}else{
ctx.tg.sendChatAction(ctx.chat.id, 'upload_photo')
let media = []
if (profile.result.total_count > 10) { var total = '<i>hanya 10 yang kecomots,.. dari '+ profile.result.total_count+'</i>'
} else { var total = profile.result.total_count }
let maxPhoto = profile.result.photos
maxPhoto.forEach( (photos, index) => {
   if (index < 10) {
   let photo = photos
   let photoId = photo[photo.length-1].file_id
   media.push({type: 'photo', media: photoId});}
  return;})
media[0].caption = "❓ <span class='tg-spoiler'><i>"+LTR(umention(ctx))+" kepoin "+total+" pp "+LTR(replyMsgMention(ctx))+"</i></span>"
media[0].parse_mode = 'HTML'

Utilities.sleep(1234);
  ctx.tg.sendMediaGroup(ctx.chat.id, media, {protect_content: true, reply_to_message_id: ctx.message.message_id});}}}})

//**************** Handle Foto ******************
bot.on('photo', ctx => {
if (ctx.chat.type == 'private'){
// -- jika dikirimi foto, maka kirim kembali fotonya.
let photoID = ctx.message.photo[ctx.message.photo.length-1] //ambil file_id foto
let keyb = [[button.url('🔗 Api sendPhoto', 'https://core.telegram.org/bots/api#sendphoto')]]
ctx.replyWithPhoto(photoID.file_id, {
  caption: '🖼 <b>File</b>_<i>id</i> :\n<code>'+photoID.file_id+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);}})
//***************** End Handle Foto ***************

//***************** Handle Video ******************
bot.on('video', ctx => {
if (ctx.chat.type == 'private'){
let videoID = ctx.message.video.file_id
let keyb = [[button.url('🔗 Api sendVideo', 'https://core.telegram.org/bots/api#sendvideo')]]
ctx.replyWithVideo(videoID, {
  caption:'🎬 <b>File</b>_<i>id</i> :\n<code>'+videoID+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);}})
//**************** End Handle Video ****************

//***************** Handle Sticker *****************
bot.on('sticker', ctx => {
if (ctx.chat.type == 'private'){
// -- jika dikirimi sticker, maka kirim kembali stickernya.
let stickerID = ctx.message.sticker.file_id; //ambil file_id sticker
let xkeyb = [[button.url('🎭 sticker pack', 'https://t.me/addstickers/'+ctx.message.sticker.set_name)]]
let keyb = [[button.url('🔗 Api sendSticker', 'https://core.telegram.org/bots/api#sendsticker')]]
ctx.replyWithSticker(stickerID, {
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
ctx.replyItWithHTML('🎭 <b>File</b>_<i>id</i> :\n<code>'+stickerID+'</code>\n\n'+ctx.message.sticker.emoji+'️ <b>'+ctx.message.sticker.set_name+'</b>', {reply_markup: markup.inlineKeyboard(xkeyb)})
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//*************** End Handle Sticker ***************

//***************** Handle Document ****************
bot.on('document', ctx => {
if (ctx.chat.type == 'private'){
let docID = ctx.message.document.file_id;
let keyb = [[button.url('🔗 Api sendDocument', 'https://core.telegram.org/bots/api#senddocument')]]
ctx.replyWithDocument(docID, {
  caption: '🗄 <b>File</b>_<i>id</i> :\n<code>'+docID+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//*************** End Handle Document **************

//******************* Handle GIF *******************
bot.on('animation', ctx => {
if (ctx.message.document) return
if (ctx.chat.type == 'private'){
let animID = ctx.message.animation.file_id;
let keyb = [[button.url('🔗 Api sendAnimation', 'https://core.telegram.org/bots/api#sendanimation')]]
ctx.replyWithAnimation(animID, {
  caption: '🎭 <b>File</b>_<i>id</i> :\n<code>'+animID+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//***************** End Handle GIF *****************

//****************** Handle Audio ******************
bot.on('audio', ctx => {
if (ctx.chat.type == 'private'){
let audID = ctx.message.audio.file_id;
let keyb = [[button.url('🔗 Api sendAudio', 'https://core.telegram.org/bots/api#sendaudio')]]
ctx.replyWithAudio(audID, {
  caption: '🎼 <b>File</b>_<i>id</i> :\n<code>'+audID+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//***************** End Handle Audio *****************

//******************** Handle Voice ******************
bot.on('voice', ctx => {
if (ctx.chat.type == 'private'){
let voiceID = ctx.message.voice.file_id;
let keyb = [[button.url('🔗 Api sendVoice', 'https://core.telegram.org/bots/api#sendvoice')]]
ctx.replyWithVoice(voiceID, {
  caption: '🎙 <b>File</b>_<i>id</i> :\n<code>'+voiceID+'</code>', parse_mode: 'html',
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//****************** End Handle Voice ******************

//******************** Handle Dice *********************
bot.on('dice', ctx => {
if (ctx.chat.type == 'private'){
let emoji = ctx.message.dice.emoji;
let value = ctx.message.dice.value;
let keyb = [[button.url('🔗 Api sendDice', 'https://core.telegram.org/bots/api#senddice')]]
ctx.replyItWithHTML('<b>Your Dice</b> :\nEmoji : '+emoji+'\nValue : '+value);
bot.tg.callApi('sendDice', {
  chat_id: ctx.chat.id, emoji: emoji,
  reply_to_message_id: ctx.message.message_id,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
  sendMenuInline(ctx);}})
//******************** End Handle Dice ******************
