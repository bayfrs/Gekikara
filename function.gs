// -- menu
function sendMenuInline(ctx){
  let keyb = [];
  let kBaris = [button.text('Hard keyboard', 'keyboard')];
  keyb.push(kBaris);
  kBaris = [
    button.text('foto', 'kirim_foto'),
    button.text('video', 'kirim_video'),
    button.text('sticker', 'kirim_sticker')    
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('gif', 'kirim_gif'),
    button.text('audio', 'kirim_audio'),
    button.text('voice', 'kirim_voice')
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('dice', 'kirim_dice'),
    button.text('document', 'kirim_document'),
    button.text('🆔', 'yourID')
  ];
  keyb.push(kBaris);
  kBaris = [
    button.url('🔗 Api telegram', 'https://core.telegram.org/bots/api')
  ];
  keyb.push(kBaris);

  ctx.replyWithHTML('<b>Menu</b> <i>inline</i>', {reply_markup: markup.inlineKeyboard(keyb)});}

function sendMenu(ctx){
  let keyb = [];
  let kBaris = [
    button.text('H i D E')    
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('foto'),
    button.text('video')    
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('sticker'),
    button.text('gif')
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('audio'),
    button.text('voice')
  ];
  keyb.push(kBaris);
  kBaris = [
    button.text('dice'),
    button.text('document')
  ];
  keyb.push(kBaris);
    kBaris = [
    button.text('more info')
  ];
  keyb.push(kBaris);
  
  ctx.replyWithHTML('Menu <b>Keyboard</b>', {reply_markup: {keyboard: (keyb), resize_keyboard: true, one_time_keyboard: true}});}

function LTR(text){
  const arabic_mark = /[\u0600-\u06FF\u0750-\u077F]/gm
  const mark = /[\u200F]/gm
// check the string have a rtl or not
  if(mark.test(text)){
// don't LTR the Arabic character.
    if(!arabic_mark.test(text)){
// replace all RTL mark with blank string
      return text.replace(mark,"")
    }
    return text
  }
  return text
}

function xPings(ctx){
let ndate = Date.now();
let mdate = ctx.message.date;
let mtime = (ndate / 1000) - mdate;
let ping = mtime.toFixed(3);
let Pings = '⏱ <code>'
Pings += `${ping}`
Pings += `'s</code>`
return Pings;}

function umention(ctx){
let xmention = "<a href='tg://user?id="+ctx.message.from.id+"'>"+helper.name(ctx.message.from).fullname+"</a>";
return xmention;}

function replyMsgMention(ctx){
let replyMsg = ctx.message.reply_to_message
let xmention = "<a href='tg://user?id="+replyMsg.from.id+"'>"+helper.name(replyMsg.from).fullname+"</a>"
return xmention;}

let startSticker = [
  'CAACAgEAAxkBAAIsRWC7z9qeP8LgtoyaKxBcCqKOVmm9AAJPAAM4DoIRqbuQVVKVy3kfBA',
  'CAACAgIAAxkBAAIsKWC7zqZBXdnXTnEe2RTzP8WEl6NCAAJ8AgADOKAKbh1Q7iNtkF8fBA',
  'CAACAgIAAxkBAAIsGWC7zZV6dzAwXtKVk0VvE13cnFQhAAIFBgACGELuCJldKt5f57hSHwQ',
  'CAACAgIAAxkBAAIsCWC7xyCrFVSu4vS5RBKfcVOuOgifAAIiAANOXNIpYXS-_nMW_BQfBA',
  'CAACAgIAAxkBAAIr7WC7xrRlXsCwZIzDMyPxpzaw5QusAAKnBAACz1-LB-4rdX_wiEZYHwQ',
  'CAACAgIAAxkBAAIr0WC7xjfVSTZjgL65YxEK_B34mBSgAALoAAP3AsgPQgg0u2PTD9MfBA',
  'CAACAgIAAxkBAAIrzWC7xh9mzfMH_W1zU51TAAGJ2PGPJwACZwEAAhZCawpzib7OpZZoIh8E',
  'CAACAgIAAxkBAAIryWC7xfjOG6DzpONMI5FWdw3JQ2hhAAJ0AAM7YCQUs8te1W3kR_QfBA',
  'CAACAgIAAxkBAAIrwWC7xaw8RnB1TeachLcEVZDDlA82AAIjAQACMNSdEZ7ZN4GuqlwCHwQ',
  'CAACAgIAAxkBAAIrvWC7xZUnAAEC1WYBqkM5161MGzpWRwACGAADDbbSGX671giQDJU8HwQ',
  'CAACAgIAAxkBAAIruWC7xYGfIqWOmmHHguYX7_EAAfi0PwAC0wADVp29CvUyj5fVEvk9HwQ',
  'CAACAgIAAxkBAAIrtWC7xV4M9yDufwaT7RlkLnbccCxdAAIEBwACRvusBEPY1ijiqT2DHwQ',
  'CAACAgIAAxkBAAIrsWC7xTqUMqqYJCT139offvlm3rASAAJUAANBtVYMarf4xwiNAfofBA',
  'CAACAgIAAxkBAAIrqWC7xRKVvQZPytoqTEsfQBibgO8gAAJuBQACP5XMCoY62V2IvLc1HwQ',
  'CAACAgIAAxkBAAIrnWC7tv_IqUcrxYkza6Pql1j5lYlVAAKRDwACjtoAAUiE95HJQWbafh8E',
  'CAACAgIAAxkBAAIrlWC7tthFI7Oj7jZ7C_rUimW9l4LXAAKSAQACVp29Cp_QLQhCLtUFHwQ',
  'CAACAgIAAxkBAAIrjWC7trBDA9URX5yyPIrItS5Xt1jyAAJVAgACVp29CqxLLIJPoxXfHwQ',
  'CAACAgIAAxkBAAIrhWC7to308rEepgR4ou0awtgpr0HUAAJPAAOtZbwUa5EcjYesr5MfBA',
  'CAACAgIAAxkBAAIrgWC7tneMB7T0qQAB98Jh4gSE3BmabAACuAAD9wLID0YLnLTiTgs4HwQ',
  'CAACAgIAAxkBAAIrfWC7tmUoaNcNutRJhlCebvpciZV6AAJvAAP3AsgP6TP9mweCjjIfBA',
  'CAACAgIAAxkBAAIrcWC7tkl0zwABCTyzwy0FjbOTrK_3KwACHgkAAhhC7gj5WNnuHSGcIR8E',
  'CAACAgIAAxkBAAIrbWC7tjmPa97YJzbI52qjQH_aLoUBAAIFAAPANk8T-WpfmoJrTXUfBA',
  'CAACAgIAAxkBAAIrZWC7tiE9F_7v5Vpi4sObLPNkJNseAAL8AAP3AsgP4krCZ6WVKu4fBA',
  'CAACAgIAAxkBAAIrYWC7tgqLnG3w8oTp6-Bym2awPM5gAAIBAQACVp29CiK-nw64wuY0HwQ',
  'CAACAgIAAxkBAAIrXWC7tfnsAgaKKgABny35H1iZgMVQXAACug4AAh0riUs8l5PXehBSVR8E',
  'CAACAgIAAxkBAAIrWWC7teWmNMjhoYF-Xc7sJunz5rRHAAJlCwACUas4S_UAAVke-cEmqh8E',
  'CAACAgIAAxkBAAIrQWC7tbmIuw6d00RgRcA_7LFUfWFtAAIrDQACXqroS0Ld84TPAQt1HwQ',
  'CAACAgIAAxkBAAIrPWC7taby4LhU5RDsQcPXuvVELFJJAALRDQACy3FwS87WvzNe81iXHwQ',
  'CAACAgIAAxkBAAIrOWC7tZOmk_YuKv8FVbsaZMoj10PHAAKtDAACjzPxS9rXwCxL7_2rHwQ',
  'CAACAgIAAxkBAAIrJWC7tWt8kQjwPWgxr5qltUw0XzGaAAICDwACaAvhSqarjYU0ckJVHwQ',
  'CAACAgIAAxkBAAIrIWC7tVc0K3U9NeJfXRH4FrSU7Mf7AAK5DQACFHHAS8kgdSSBz8HdHwQ',
  'CAACAgIAAxkBAAIrHWC7tUR1iCHNoUzWabCeX3ppK2vPAAJ0DAACtrs4S47Op8xAxIAlHwQ',
  'CAACAgIAAxkBAAIrGWC7tS_ZjtV7A50emPhD4Ke5_vYYAAKDDwAC5Kv5S5tVIDVDbwcPHwQ',
  'CAACAgIAAxkBAAIrFWC7tRVrWfCjfJwCYksHs6B_VGgvAAKmEgACeUBoSi_iG1qytp4qHwQ',
  'CAACAgIAAxkBAAIrEWC7tFIo-RT9uWYbDIejmcDvLUeJAAIpDgACxKNRS2tMxc-PfTVfHwQ'
]

let markas = [
  -1001109837870
]

let adminBot = [
  724677596
]
