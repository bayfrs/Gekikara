// -- inline keyboard
bot.action('keyboard', (ctx) => {
ctx.deleteMessage();
sendMenu(ctx);})

// -- Kirim foto
bot.action('kirim_foto', (ctx) => {
ctx.deleteMessage();
let photoID = 'AgACAgEAAxkBAAIHwmJJTfk1244LZtj6WgH4YSQxA5ttAAL9qTEbOzVRRqgbCKkoVHBFAQADAgADeAADIwQ'
let keyb = [[button.url('🔗 Api sendPhoto', 'https://core.telegram.org/bots/api#sendphoto')]]
ctx.replyWithPhoto(photoID, {caption: '<b>Tes</b> <i>Photo</i>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})
    
// -- Kirim video
bot.action('kirim_video', (ctx) => {
ctx.deleteMessage();
var videoID = "BAACAgUAAxkBAAID7WAZYP1qXvIr1lqTvqOAQedmt4dPAAJlAAMZFEFVJwtvxKKt59geBA";
var keyb = [[button.url('🔗 Api sendVideo', 'https://core.telegram.org/bots/api#sendvideo')]]
ctx.replyWithVideo(videoID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+videoID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim sticker
bot.action('kirim_sticker', (ctx) => {
ctx.deleteMessage();
var stickerID = "CAACAgIAAxkBAAID6WAZYJ6Bun4IdXA0e3qHrYiqH3OGAAL5BgACRvusBAXmf7zy8Nr1HgQ"
var keyb = [[button.url('🔗 Api sendSticker', 'https://core.telegram.org/bots/api#sendsticker')]]
ctx.replyWithSticker(stickerID, { reply_markup: markup.inlineKeyboard(keyb)});
ctx.replyWithHTML('<b>File</b>_<i>id</i> :\n<code>'+stickerID+'</code>');
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim gif
bot.action('kirim_gif', (ctx) => {
ctx.deleteMessage();
let animID = 'CgACAgUAAxkBAAII5mJJwY3XQdPxUSbBSh5oOpORVPqnAAIIAAPf4ZBWaBYo9wc19H8jBA'
let keyb = [[button.url('🔗 Api sendAnimation', 'https://core.telegram.org/bots/api#sendanimation')]]
ctx.replyWithAnimation(animID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+animID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim audio
bot.action('kirim_audio', (ctx) => {
ctx.deleteMessage();
let audID = 'CQACAgUAAxkBAAII-WJJw2IOlK-C8DijVMJtxK5jd5UKAAIGAAPtGohVOaiKIqF68PQjBA'
let keyb = [[button.url('🔗 Api sendAudio', 'https://core.telegram.org/bots/api#sendaudio')]]
ctx.replyWithAudio(audID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+audID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim voice
bot.action('kirim_voice', (ctx) => {
ctx.deleteMessage();
let voiceID = 'AwACAgUAAxkBAAIJBWJJxOj_nj1ZMPS1oEvv2Hl2ciGjAAIWAAPIflhU2wEtgZsjHi8jBA'
let keyb = [[button.url('🔗 Api sendVoice', 'https://core.telegram.org/bots/api#sendvoice')]]
ctx.replyWithVoice(voiceID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+voiceID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim dice
bot.action('kirim_dice', (ctx) => {
ctx.deleteMessage();
let emoji = helper.random(['🎲', '🎯', '🎳', '🎰', '🏀', '⚽️'])
let keyb = [[button.url('🔗 Api sendDice', 'https://core.telegram.org/bots/api#senddice')]]
bot.tg.callApi('sendDice', {
  chat_id: ctx.chat.id,
  emoji: emoji,
  reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

// -- Kirim document
bot.action('kirim_document', (ctx) => {
ctx.deleteMessage();
let docID = 'BQACAgUAAxkBAAIJZmJJzkOwdRjhSZtwbAr0qishfvxXAAKOAQACrdfRVCDbIn3qAbBRIwQ'
let keyb = [[button.url('🔗 Api sendDocument', 'https://core.telegram.org/bots/api#senddocument')]]
ctx.replyWithDocument(docID, {caption: '<b>File</b>_<i>id</i> :\n<code>'+docID+'</code>', parse_mode: 'html', reply_markup: markup.inlineKeyboard(keyb)});
Utilities.sleep(123)
sendMenuInline(ctx);})

bot.action('yourID', (ctx) => {
ctx.replyWithHTML('🆔 <code>'+ctx.from.id+'</code>')})
