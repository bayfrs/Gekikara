// identifikasi
const token = 'B_O_T__T_O_K_E_N';
const bot = new lumpia.init(token);

const userDB = new lumpia.userDB()
const button = lumpia.button
const markup = lumpia.markup
const helper = lumpia.helper
// handle komunikasi via POST dari Telegram ke (webhook) GAS
function doPost(e) {
  bot.doPost(e);}

bot.log_id = -1001234567890;
bot.options.prefix_command = '.!/';
bot.options.username = 'ScriptGooglebot';

function setWebHook() {
  let url = 'W_E_B__H_O_O_K';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);}

function cekUserProperties(){
  var r = userDB.getValues();
  Logger.log(r);}
