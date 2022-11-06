// -- thanks to
bot.hear(/^more info$/i, (ctx) => { if (ctx.chat.type == 'private')
ctx.replyWithHTML('💬 <i>thanks to</i>:\n@⁣Betatestmybot\n\n» t.me/botindonesia/85386', {disable_web_page_preview: true});
ctx.replyWithChatAction('typing')
  Utilities.sleep(333);
ctx.replyWithHTML("source:\n<code>https://script.google.com/d/12xrIT_HP66AW9z5v27hBa_klmRPHGg3XTDRUl3Sh8AqQDhDEbRfvgUm8/edit?usp=sharing</code> \n\n<i>gunakan hanya sebagai referensi,\nkembangkan sendiri.\ndibagikan untuk menambah pemahaman,\nsesuaikan <a href='https://bit.ly/telegram-lib-v2'>Library v2</a> by bangHasan.\n\nawas jebakan batman,\n<b>jangan asal copas</b></i>", {disable_web_page_preview: true});
ctx.replyWithChatAction('typing')
  Utilities.sleep(333);
ctx.replyWithSticker('CAACAgIAAxkBAAIN_mAb8VfY0mYBiD_98KLiqvldH1iZAAL5BgACRvusBAXmf7zy8Nr1HgQ', {reply_to_message_id: ctx.message.message_id});
ctx.replyWithChatAction('typing')
  Utilities.sleep(333);
ctx.replyWithHTML("⚙️ re<i>Share</i>:\nhttps://script.google.com/d/1xq_j4sFBw2e2lmk-rujsdRtTQWY-N3bGbu26IiOhHo_KOveyYaN2PEa1/edit?usp=sharing");
ctx.replyWithChatAction('typing')
  Utilities.sleep(333);
ctx.replyWithHTML('🤍 <b>jika ada masukan</b>, <i>kritik</i>, maupun saran membangun untuk @⁣ScriptGooglebot, silahkan hubungi kami,..');
  Utilities.sleep(333);
ctx.replyWithSticker('CAACAgEAAxkBAAIhpmAuCVFhihcxRksrHYZVHLx_QwZpAAILAAPDcwkVxleYUj4gUfkeBA');
let keyb = [[button.url('ƈֆƈяɨקȶ', 'https://t.me/joinchat/HmM1qrD2KzU2Zjg1')]];
ctx.replyWithChatAction('typing')
  Utilities.sleep(333);
ctx.replyItWithHTML('💬 di [<b>c</b>]<s>oretan</s> <b>Script</b>', { reply_markup: markup.inlineKeyboard(keyb)});})

// --- remove hard_keyboard
bot.hear(/^H i D E$/i, (ctx) => { if (ctx.chat.type == 'private')
ctx.deleteMessage();
  Utilities.sleep(333);
ctx.replyWithHTML('<i><b>keyboard</b> off</i>', {reply_markup: {remove_keyboard: true}});
sendMenuInline(ctx);}) //kirim inline_keyboard

// -- fungsi kirim_foto
bot.hear(/^foto/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let photoID = 'AgACAgEAAxkBAAIHwmJJTfk1244LZtj6WgH4YSQxA5ttAAL9qTEbOzVRRqgbCKkoVHBFAQADAgADeAADIwQ'
let keyb = [];
let kBaris = [button.url('🔗 Api sendPhoto', 'https://core.telegram.org/bots/api#sendphoto')]
keyb.push(kBaris);
  ctx.replyWithPhoto(photoID, {caption: '<b>Tes</b> <i>Photo</i>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})

// --fungsi kirim video
bot.hear(/^video/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
var videoID = "BAACAgUAAxkBAAID7WAZYP1qXvIr1lqTvqOAQedmt4dPAAJlAAMZFEFVJwtvxKKt59geBA";
var keyb = [[button.url('🔗 Api sendVideo', 'https://core.telegram.org/bots/api#sendvideo')]]
ctx.replyWithVideo(videoID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+videoID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})

// -- fungsi kirim sticker
bot.hear(/^sticker/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
var stickerID = "CAACAgIAAxkBAAID6WAZYJ6Bun4IdXA0e3qHrYiqH3OGAAL5BgACRvusBAXmf7zy8Nr1HgQ"
var keyb = [[button.url('🔗 Api sendSticker', 'https://core.telegram.org/bots/api#sendsticker')]]
ctx.replyWithSticker(stickerID, { reply_markup: markup.inlineKeyboard(keyb)});
  ctx.replyWithHTML('<b>File</b>_<i>id</i> :\n<code>'+stickerID+'</code>');}})

// -- fungsi kirim gif
bot.hear(/^gif/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let animID = 'CgACAgUAAxkBAAII5mJJwY3XQdPxUSbBSh5oOpORVPqnAAIIAAPf4ZBWaBYo9wc19H8jBA'
let keyb = [[button.url('🔗 Api sendAnimation', 'https://core.telegram.org/bots/api#sendanimation')]]
ctx.replyWithAnimation(animID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+animID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})

// -- fungsi kirim audio
bot.hear(/^audio/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let audID = 'CQACAgUAAxkBAAII-WJJw2IOlK-C8DijVMJtxK5jd5UKAAIGAAPtGohVOaiKIqF68PQjBA'
let keyb = [[button.url('🔗 Api sendAudio', 'https://core.telegram.org/bots/api#sendaudio')]]
ctx.replyWithAudio(audID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+audID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})

// -- fungsi kirim voice
bot.hear(/^voice/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let voiceID = 'AwACAgUAAxkBAAIJBWJJxOj_nj1ZMPS1oEvv2Hl2ciGjAAIWAAPIflhU2wEtgZsjHi8jBA'
let keyb = [[button.url('🔗 Api sendVoice', 'https://core.telegram.org/bots/api#sendvoice')]]
ctx.replyWithVoice(voiceID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+voiceID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})

// -- fungsi kirim dice
bot.hear(/^dice/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let emoji = helper.random(['🎲', '🎯', '🎳', '🎰', '🏀', '⚽️'])
let keyb = [[button.url('🔗 Api sendDice', 'https://core.telegram.org/bots/api#senddice')]]
bot.tg.callApi('sendDice', {
  chat_id: ctx.chat.id,
  emoji: emoji,
  reply_markup: markup.inlineKeyboard(keyb)});}})

// -- fungsi kirim document
bot.hear(/^document/i, (ctx) => { if (ctx.chat.type == 'private'){
ctx.deleteMessage();
let docID = 'BQACAgUAAxkBAAIJZmJJzkOwdRjhSZtwbAr0qishfvxXAAKOAQACrdfRVCDbIn3qAbBRIwQ'
let keyb = [[button.url('🔗 Api sendDocument', 'https://core.telegram.org/bots/api#senddocument')]]
ctx.replyWithDocument(docID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+docID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});}})
