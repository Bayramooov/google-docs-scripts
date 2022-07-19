// Google Sheets Config
const app_url                 = 'https://script.google.com/macros/s/AKfycbzir-vsp37TQpoxqV...NjmV3tI5b6KHcIaIg/exec';
const spread_sheet_id         = '1_rwo5jDPRSsdfZ...GMe9-_R6D1bEpR0cs';
const sheet_name              = 'DASHBOARD';
const col_driver_status       = 1; // A
const col_delivery_date       = 2; // B
const col_delivery_time       = 3; // C
const col_pickup_status       = 4; // D
const col_delivery_status     = 5; // E
const col_telegram_chat_id    = 6; // G
const col_telegram_user_id    = 7; // F
const col_telegram_first_name = 8; // H
const range_table             = 'A5:V60';

// Telegram Bot Config
const telegram_token  = '52329490...wkMwF-96MDI';
const telegram_url    = 'https://api.telegram.org/bot' + telegram_token;
const admin_chat_ids  = [
  '1192104705'          // Admin
];
const pickup = [
  'Arrived PU',
  'Checked in PU',
  'Got door',
  'Loading',
  'Departed'
];
const delivery = [
  'Arrived DEL',
  'Checked in DEL',
  'Docked',
  'Unloading',
  'Empty'
];
const replyKeyboardMarkup = {
  // one_time_keyboard: true,
  resize_keyboard: true,
  keyboard: [
    [{ text: pickup[0] }, { text: delivery[0] }],
    [{ text: pickup[1] }, { text: delivery[1] }],
    [{ text: pickup[2] }, { text: delivery[2] }],
    [{ text: pickup[3] }, { text: delivery[3] }],
    [{ text: pickup[4] }, { text: delivery[4] }]
  ]
};
const forceReply = {
  force_reply: false
}

// Telegram Functions
function bot_url_fetch(url) {
  var response = UrlFetchApp.fetch(telegram_url + url);
  Logger.log(JSON.stringify(JSON.parse(response.getContentText()), null, 4));
}

function get_updates() {
  bot_url_fetch('/getUpdates');
}

function set_webhook() {
  bot_url_fetch('/setWebhook?url=' + app_url);
}

function delete_webhook() {
  bot_url_fetch('/deleteWebhook');
}

function send_message(id, message, is_first_time) {
  var text         = encodeURIComponent(message);
  var reply_markup = encodeURIComponent(JSON.stringify(replyKeyboardMarkup));

  if (is_first_time) {
    bot_url_fetch(`/sendMessage?chat_id=${id}&text=${text}&reply_markup=${reply_markup}`);

  } else {
    bot_url_fetch(`/sendMessage?chat_id=${id}&text=${text}`);

  }
}

function notify_admins(message, log) {
  for (chat_id of admin_chat_ids) {
    send_message(chat_id, `${message || 'Undefined error occured!'}\n\n${log}`);
  }
}

// function getDate() {
//   const d = new Date(Date.now() + (1000 * 60 * 60 * 9)); // => second * min * hour * nine_Hours (adding 9 hours);
//   let month = d.getMonth() + 1;
//   let day = d.getDate();
//   let year = d.getFullYear();
//   let date = `${month}/${day}/${year}`;
//   Logger.log(date);
//   return date;
// }

// function getTime() {
//   const d = new Date(Date.now() + (1000 * 60 * 60 * 9)); // => second * min * hour * nine_Hours (adding 9 hours);
//   let hour = d.getHours();
//   let min = String(d.getMinutes()).padStart(2, '0');
//   let period = 'AM';
//   if (hour > 12) {
//     period = 'PM';
//     hour -= 12;
//   }
//   let time = `${hour}:${min} ${period}`;
//   Logger.log(time);
//   return time;
// }

// Google Sheets Event Functions
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  if (sheet.getName() != sheet_name) return;
  var range = sheet.getRange(range_table);
  range.sort([
    { column: col_driver_status, ascending: true },
    { column: col_delivery_date, ascending: true },
    { column: col_delivery_time, ascending: true }
  ]);
}

function doPost(e) {
  try {
    var data       = JSON.parse(e.postData.contents);
    var user_id    = data.message.from.id;
    var first_name = data.message.from.first_name;
    var chat_id    = data.message.chat.id;
    var text       = data.message.text;
    var answer     = `OK, ${first_name}: ${text}`;

    if (text == '/start') {
      send_message(chat_id, 'Welcome to the Kesh Express bot!', true);
      send_message(chat_id, 'You can notify dispatchers about your current status by clicking some buttons below.');
      return;
    } else if (!pickup.includes(text) && !delivery.includes(text)) return;

    var sheet = SpreadsheetApp.openById(spread_sheet_id).getSheetByName(sheet_name);
    var range = sheet.createTextFinder(user_id).findNext();

    if (!range) {
      // looking for first_name if user_id could't be found
      range = sheet.createTextFinder(first_name).findNext();

      if (!range) {
        send_message(chat_id, `Sorry, ${first_name} not found!`);
        throw `${first_name} not found from the list`;
      };
    }

    var rowIndex = range.getRowIndex();

    if (pickup.includes(text)) {
      sheet.getRange(rowIndex, col_pickup_status).setValue(text);
      sheet.getRange(rowIndex, col_delivery_status).setValue(null);
    }

    else if (delivery.includes(text)) {
      sheet.getRange(rowIndex, col_delivery_status).setValue(text);
      if (text == delivery[4])
        sheet.getRange(rowIndex, col_pickup_status).setValue(null);
      else
        sheet.getRange(rowIndex, col_pickup_status).setValue(pickup[4]);
    }

    sheet.getRange(rowIndex, col_telegram_chat_id).setValue(chat_id);
    sheet.getRange(rowIndex, col_telegram_user_id).setValue(user_id);
    send_message(chat_id, answer);
  } catch (ex) {
    notify_admins(ex, JSON.stringify(data));
    Logger.log(ex + '\n\n' +JSON.stringify(data));
  }
}
