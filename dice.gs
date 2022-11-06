// --- DICE - 🎲 🎯 🏀 ⚽️ 🎳 🎰
bot.on('message', ctx => { if (ctx.message.dice){
if (helper.isIn(markas, ctx.chat.id) ){
//  ctx.deleteMessage();}}})
  let msg = ctx.message;
  let msgdv = msg.dice.value;
  let dEmoji = msg.dice.emoji;
  let chatID = msg.chat.id;

if (dEmoji == "🎰"){
if (msgdv == 37){
  ctx.tg.sendSticker(chatID, helper.random(BARwineLemon));
  ctx.replyItWithHTML(helper.random(BarWineLemon));}

// replyWithHTML
if (msgdv == 64){
  ctx.tg.sendSticker(chatID, 'CAACAgEAAxkBAAJs4WA6HchGSgkBpwrYUyEU3mhalpFBAAIRAAPDcwkVDG2a3N5swX8eBA');
  ctx.replyItWithHTML(helper.random(acak777));}

  let dval = [1, 22, 37, 43, 64];
//  let dval = [1, 13, 22, 30, 43, 47, 52, 56, 60, 64];
//  let dval = [1, 22, 37, 43, 52, 56, 60, 64];
//  let dval = [37, 64];
if (!helper.isIn(dval, msgdv) ){
  ctx.deleteMessage();}}

if (dEmoji == "🎳"){
  let dval = [1, 6];
  if (!helper.isIn(dval, msgdv) ){
    ctx.deleteMessage();}}

if (dEmoji == "⚽️"){
  let dval = [4, 5];
  if (!helper.isIn(dval, msgdv) ){
    ctx.deleteMessage();}}

if (dEmoji == "🏀"){if (msgdv < 3){
  ctx.deleteMessage();}}

if (dEmoji == "🎯"){
  let dval = [1, 6];
  if (!helper.isIn(dval, msgdv) ){
    ctx.deleteMessage();}}

if (dEmoji == "🎲"){
  let dval = [1, 6];
  if (!helper.isIn(dval, msgdv) ){
    ctx.deleteMessage();}}

// -- batas dice
}}})

let acak777 = [
  "thats it!",
  "woW yeSSs!\n<b>Seven</b>\nseven\n<code>seven</code>",
  "wOw your're so Luck!",
  "wooOHOoo!!",
  "its so emejinK!"
]

let BARwineLemon = [
  'CAACAgUAAxkBAAI_BWI_OaVd2Z8altPs6Ii53xwGJPMRAAK7AQACowauDr7XpbQ6EUmEIwQ',
  'CAACAgUAAxkBAAI_A2I_OYg_JNl-E97vJ-MCfAk2qPGGAAK6AAMFH7UPH2lu9gdJFxojBA',
  'CAACAgUAAxkBAAI_AWI_ORh92WR5MZseckG8hnQ9te_nAAIHBAACSsMhVC0PM7MnnpHxIwQ',
  'CAACAgQAAxkBAAIjUGBzBcTpnYvM1XfVVooPKwMHpMtAAAKqBwACp0h3BYwevlr1uB59HgQ',
  'CAACAgQAAxkBAAIjPGBzBZMAAXa9kSi19R6IKWXWleRDJAAC3QcAAqdIdwUUGP0ekRm8zR4E',
  'CAACAgQAAxkBAAIjHGBzBT09SvQmIutDKNAgoKiDPUSiAAIBCAACp0h3BTmlTvkGy7HxHgQ',
  'CAACAgIAAxkBAAIiYGBwXLuTMW4LQ4xVL6Y4eKkGh08uAALRAAP3AsgPsNUWIvohscweBA',
  'CAACAgIAAxkBAAIdLWBXJT_GYt2bu_8DCWmnt4rcROxAAAKOBwACYyviCUsXdsavgmo8HgQ',
  'CAACAgIAAxkBAAIdIWBXCOqY69p6J2q1KtKzSP13EyLOAAL9DQAC6BwAAUrEhyo9WU4NPR4E',
  'CAACAgIAAxkBAAIdBWBXCIAQxPRKJUMRK90D83FP3EjQAAKwBAACnNbnCkHN05NyZy4lHgQ',
  'CAACAgIAAxkBAAIc2WBXB_tKgDsNHdMzaaJY_ueuXs6RAAJ8AwACtXHaBm0O5avKoAygHgQ',
  'CAACAgIAAxkBAAIc0WBXB991VtXXunvVyMIJD0LM-ZHbAAICAgACFkJrCr-5yNnZcY-gHgQ',
  'CAACAgEAAxkBAAIcyWBXB76rvailMW5o9EsoQp9z142rAAJ-CgACv4yQBBrF-nok2iNmHgQ',
  'CAACAgIAAxkBAAIcwWBXB5suWWqMvR4u6wvi7knrgvROAAIODQACUfmQSpn_y0XLSRMsHgQ',
  'CAACAgIAAxkBAAIcsWBXB1mNAgd2JRE0KUN67-YWxdVzAAKzCwACKlBRSiyjtgnsadPWHgQ',
  'CAACAgIAAxkBAAIcqWBXBzDNLS2feaVvzJIAAaG6T_XPqgACYA4AArUZqUoDTvrWOrylSh4E',
  'CAACAgIAAxkBAAIcmWBXBu64cUoJPUIL_icdpibMoYRmAAJiAAN4qOYPiW9skvfBcb8eBA',
  'CAACAgIAAxkBAAIcgWBXBoYedbTdBuwEgKBJSTmQkGjSAAKXDQACg5B5SorKwT47DT-5HgQ',
  'CAACAgIAAxkBAAIbcGBSZ0lBUG2uMfFQfysJ0K_WEXSrAALLAAM_NfIEftHe0O278LQeBA',
  'CAACAgIAAxkBAAIbbGBSZywHddZMOw71U7L6zYT1jNnEAAIMAAO9ZGc0nXikrW9CXYceBA',
  'CAACAgIAAxkBAAIbZGBSZu6QRtuu-KcUBGNJ3fTaqOA8AAIQAAO9ZGc0KOJutnBaXbMeBA',
  'CAACAgIAAxkBAAIXbGA_8Bj9KryYsVEkAcFSAfAv9yDPAAIIAwADOKAKikpTl5bt4WIeBA',
  'CAACAgIAAxkBAAIXYGA_77zhk6ssyWJf1Uee2r9Y_rOzAAKcAAMnFEkL4hkZYyHYm4YeBA',
  'CAACAgIAAxkBAAIXWGA_749Tc2DOIZsgXTzu42SRwYXdAAKbAAMnFEkLuUQJJHaQvbgeBA',
  'CAACAgIAAxkBAAIXVGA_73mS9KZLMrai5YD85pcqLM3NAAKZAAMnFEkL-H1e-U6lq80eBA',
  'CAACAgIAAxkBAAIXSGA_o9YtfS9447gF5rsb0ZMAAc3FvQADCQACYyviCT6srw_3Hk6MHgQ',
  'CAACAgIAAxkBAAIXOGA_o5imHyGDmZ0s4IenWUEnkTQEAAIBCQACYyviCV-Cu7r4R3gbHgQ',
  'CAACAgIAAxkBAAIXNGA_o4AWHF1k_IL0dWgXbPU0IO2oAAIWCQACYyviCXRX6dVtLqApHgQ',
  'CAACAgIAAxkBAAIXMGA_o2j1YIkzgUnZ_1Tnod4J_Q8bAAIHCQACYyviCbh974htg-r-HgQ',
  'CAACAgIAAxkBAAIXJGA_oniIiGD3w5m6MKx_9dJm-4jzAAIECQACYyviCeXWStJVeXlvHgQ'
]

let BarWineLemon = [
  "ow WOW, u gOt Hidden SLOT!",
  "ow WOW, u gOt <b>Hidden</b> SLOT!",
  "ow WOW, u gOt Hidden <b>SLOT</b>‼️",
  "<b>Bar Wine Lemon</b>\n<i>Like Hidden Treasure</i>",
  "<i>Bar Wine Lemon</i>\nLike Hidden Treasure",
  "you know why?\n<i>thats Like some Hidden Treasure</i>",
  "<i>its nice to see thats</i>",
  "<b>thats de ONE secret</b>",
  "🎰 NiCE PLAY",
  "NiCE PLAY 🎰"
]
