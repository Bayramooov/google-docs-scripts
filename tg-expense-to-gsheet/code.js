//////////////////////////////////////////////////
// configuration
//////////////////////////////////////////////////
const WEBAPP_URL = 'https://script.google.com/macros/s/AKfy...TvBrQ/exec';
const SPREADSHEET_ID = '1ZZi...QrEA';
const SHEET_NAME = 'All data';
const TELEGRAM_TOKEN = '7521...eK0c';
const TELEGRAM_ADMINS = []; // int chat_id
const ALLOWED_CHATS = []; // int chat_id
const LANGCODE = 'uz'; // options: ['en', 'uz', 'ru']
// auto-generated i18n translations
const I18N = {
  'fatal error': {
    en: '😱 Oops! An internal server error occurred. Our admins have been notified! 🚨',
    uz: '😱 Afsuski, ichki server xatosi yuz berdi. Administratorlarimiz xabardor qilindi! 🚨',
    ru: '😱 Ой-ой! Произошла внутренняя ошибка сервера. Наши администраторы уведомлены! 🚨',
  },
  'success in addData: $1{category_type}, $2{category}, $3{amount}, $4{currency}, $5{quantity}, $6{measure}, $7{usd_rate}, $8{comment}': {
    en: '🎉 Woohoo! The data was <b>successfully inserted</b> into the spreadsheet.\n\nCategory group: <b>$1</b>\nCategory: <b>$2</b>\nAmount: <b>$3 $4</b>\nQuantity: <b>$5 $6\nUSD Rate: <b>$7</b>\nComment: <b>$8</b>',
    uz: "🎉 Urra! Ma'lumotlar jadvalga <b>muvaffaqiyatli kiritildi</b>.\n\nToifa guruhi: <b>$1</b>\nToifa: <b>$2</b>\nXarajat: <b>$3 $4</b>\nMiqdori: <b>$5 $6</b>\n$ kursi: <b>$7</b>\nIzoh: <b>$8</b>",
    ru: '✨ Та-да! Данные <b>успешно обновлены</b> в таблице.\n\nГруппа категорий: <b>$1</b>\nКатегория: <b>$2</b>\nСумма: <b>$3 $4</b>\nКоличество: <b>$5 $6</b>\nКурс $: <b>$7</b>\nКомментарий: <b>$8</b>',
  },
  'error in addData': {
    en: "😔 Oh no! I <b>couldn't</b> insert the data into the spreadsheet. Let's try again, shall we? 🔄",
    uz: "😔 Voy! Ma'lumotlarni jadvalga <b>joylashtirib bo'lmadi</b>. Yana bir bor urinib ko'ramizmi? 🔄",
    ru: '😔 Ой! Не удалось <b>вставить</b> данные в таблицу. Может, попробуем еще раз? 🔄',
  },
  'success in editData: $1{category_type}, $2{category}, $3{amount}, $4{currency}, $5{quantity}, $6{measure}, $7{usd_rate}, $8{comment}': {
    en: '✨ Ta-da! The data was <b>successfully updated</b> in the spreadsheet.\n\nCategory group: <b>$1</b>\nCategory: <b>$2</b>\nAmount: <b>$3 $4</b>\nQuantity: <b>$5 $6\nUSD Rate: <b>$7</b>\nComment: <b>$8</b>',
    uz: "✨ Ta-da! Ma'lumotlar jadvalda <b>muvaffaqiyatli yangilandi</b>.\n\nToifa guruhi: <b>$1</b>\nToifa: <b>$2</b>\nXarajat: <b>$3 $4</b>\nMiqdori: <b>$5 $6</b>\n$ kursi: <b>$7</b>\nIzoh: <b>$8</b>",
    ru: '✨ Та-да! Данные <b>успешно обновлены</b> в таблице.\n\nГруппа категорий: <b>$1</b>\nКатегория: <b>$2</b>\nСумма: <b>$3 $4</b>\nКоличество: <b>$5 $6</b>\nКурс $: <b>$7</b>\nКомментарий: <b>$8</b>',
  },
  'error in editData': {
    en: "😕 Uh-oh! I <b>couldn't</b> update the data in the spreadsheet",
    uz: "😕 Voy! Ma'lumotlarni jadvalda <b>yangilab bo'lmadi</b>",
    ru: '😕 Ой-ой! Не удалось <b>обновить</b> данные в таблице',
  },
  'success in deleteData': {
    en: '🗑️ Poof! The data was <b>successfully deleted</b> from the spreadsheet. Nice and tidy! ✨',
    uz: "🗑️ Lip etib! Ma'lumotlar jadvaldan <b>muvaffaqiyatli o'chirildi</b>. Endi hammasi tartibli! ✨",
    ru: '🗑️ Пуф! Данные <b>успешно удалены</b> из таблицы. Теперь всё аккуратно! ✨',
  },
  'error in deleteData': {
    en: "😖 Yikes! I <b>couldn't</b> delete the data from the spreadsheet. Don't worry, we'll figure it out! 🕵️",
    uz: "😖 Obbo! Ma'lumotlarni jadvaldan <b>o'chirib tashlab bo'lmadi</b>. Xavotir olmang, buni hal qilamiz! 🕵️",
    ru: '😖 Ой! Не удалось <b>удалить</b> данные из таблицы. Не волнуйтесь, мы разберемся! 🕵️',
  },
  'private: $1{first_name} $2{last_name}': {
    en: '👤 $1 $2',
    uz: '👤 $1 $2',
    ru: '👤 $1 $2',
  },
  'group: $1{title}': {
    en: '👥 $1',
    uz: '👥 $1',
    ru: '👥 $1',
  },
  'channel: $1{title}': {
    en: '📢 $1',
    uz: '📢 $1',
    ru: '📢 $1',
  },
  'unknown chat type': {
    en: '❓ Unknown chat type. Intriguing! 🧐',
    uz: "❓ Noma'lum chat turi. Qiziq! 🧐",
    ru: '❓ Неизвестный тип чата. Интересно! 🧐',
  },
  delete: {
    en: '🗑️ Delete',
    uz: "🗑️ O'chirish",
    ru: '🗑️ Удалить',
  },
  january: {
    en: 'January',
    uz: 'Yanvar',
    ru: 'Январь',
  },
  february: {
    en: 'February',
    uz: 'Fevral',
    ru: 'Февраль',
  },
  march: {
    en: 'March',
    uz: 'Mart',
    ru: 'Март',
  },
  april: {
    en: 'April',
    uz: 'Aprel',
    ru: 'Апрель',
  },
  may: {
    en: 'May',
    uz: 'May',
    ru: 'Май',
  },
  june: {
    en: 'June',
    uz: 'Iyun',
    ru: 'Июнь',
  },
  july: {
    en: 'July',
    uz: 'Iyul',
    ru: 'Июль',
  },
  august: {
    en: 'August',
    uz: 'Avgust',
    ru: 'Август',
  },
  september: {
    en: 'September',
    uz: 'Sentabr',
    ru: 'Сентябрь',
  },
  october: {
    en: 'October',
    uz: 'Oktabr',
    ru: 'Октябрь',
  },
  november: {
    en: 'November',
    uz: 'Noyabr',
    ru: 'Ноябрь',
  },
  december: {
    en: 'December',
    uz: 'Dekabr',
    ru: 'Декабрь',
  },
};

//////////////////////////////////////////////////
// business functions
//////////////////////////////////////////////////
const CATEGORIES = {
  Ustalar: 'Ustalar',
  Brigada: 'Ustalar',
  Svarshik: 'Ustalar',
  Suvoqchi: 'Ustalar',
  Nolchi: 'Ustalar',
  Tomchi: 'Ustalar',
  Zinachi: 'Ustalar',
  Toshchi: 'Ustalar',
  Santexnik: 'Ustalar',
  Elektrik: 'Ustalar',

  Material: 'Material',
  Beton: 'Material',
  Sheyben: 'Material',
  Tosh: 'Material',
  'Shlaka-blok': 'Material',
  'Gaza-blok': 'Material',
  Sement: 'Material',
  Qum: 'Material',
  "Shag'al": 'Material',
  Klines: 'Material',
  Taxta: 'Material',
  Ohak: 'Material',
  "G'isht": 'Material',

  Temir: 'Temir',
  Ugolnik: 'Temir',
  Armatura: 'Temir',
  Halqa: 'Temir',
  Profil: 'Temir',
  Tunuka: 'Temir',

  Texnika: 'Texnika',
  Kran: 'Texnika',
  Ekskavator: 'Texnika',
  Nasos: 'Texnika',
  'Yuk-mashinasi': 'Texnika',
  "Yo'lkira": 'Texnika',

  Boshqalar: 'Boshqalar',
  Bozor: 'Boshqalar',
  'Oziq-ovqat': 'Boshqalar',
};

const MEASURES = {
  metr: 'Metr',
  m: 'Metr',

  'kvadrat-metr': 'Metr²',
  'kvadrat-m': 'Metr²',
  'metr-kvadrat': 'Metr²',
  'metr-kv': 'Metr²',
  m2: 'Metr²',

  'kub-metr': 'Metr³',
  kub: 'Metr³',

  litr: 'Litr',
  l: 'Litr',

  kilogramm: 'kg',
  kilo: 'kg',
  kg: 'kg',

  dona: 'dona',
  ta: 'dona',

  soat: 'Soat',
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var chat_id = data?.message?.chat?.id || data?.edited_message?.chat?.id || data?.callback_query?.message?.chat?.id;
    // only allowed chats can interaction
    if (!ALLOWED_CHATS.includes(chat_id)) return;

    logInfo('incoming request to doPost');
    logDebug('e.postData.contents:\n' + JSON.stringify(data, null, 2));
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (data?.message?.text) {
      logInfo('webhook data type: message');
      addData(sheet, data);
      //
    } else if (data?.edited_message?.text) {
      logInfo('webhook data type: edited_message');
      editData(sheet, data);
      //
    } else if (data?.callback_query?.data) {
      logInfo('webhook data type: callback_query');
      deleteData(sheet, data);
      //
    } else {
      logWarning('unhandled webhook data type');
    }
  } catch (error) {
    chat_id && sendMessage(chat_id, t('fatal error'));
    logError('error in doPost:', error, data);
  }
}

function addData(sheet, data) {
  try {
    var chat_id = data.message.chat.id;
    const message_id = data.message.message_id;
    const text = data.message.text;
    const unique_id = [chat_id, message_id].join('#');
    const { message_link } = getMessageInfo(data.message);

    // parsing telegram message
    let d = parseMessage(text);
    const now = new Date();
    const year = now.getFullYear();
    const month = MONTHS[now.getMonth()];

    // spreadsheet row
    let row = [
      unique_id, //
      '',
      message_link || 'N/A',
      text,
      String(year),
      `${year}, ${month}`,
      now,
      d.category_type,
      d.category,
      d.currency === 'uzs' ? d.amount / d.usd_rate : d.amount,
      d.quantity,
      d.measure,
      d.comment,
      d.amount,
      d.currency,
      d.usd_rate,
    ];

    insertSheetRow(sheet, row);
    let res = sendMessage(
      chat_id,
      t(
        'success in addData: $1{category_type}, $2{category}, $3{amount}, $4{currency}, $5{quantity}, $6{measure}, $7{usd_rate}, $8{comment}',
        d.category_type,
        d.category,
        formatNum(d.amount),
        d.currency === 'usd' ? '$' : d.currency,
        formatNum(d.quantity),
        d.measure,
        formatNum(d.usd_rate),
        d.comment
      ),
      createDeleteKeyboard(unique_id),
      message_id
    );
    row[1] = res?.result?.message_id;
    updateSheetRow(sheet, unique_id, row);
  } catch (error) {
    sendMessage(chat_id, t('error in addData'));
    logError('error in addData:', error, data);
  }
}

function editData(sheet, data) {
  try {
    var chat_id = data.edited_message.chat.id;
    const message_id = data.edited_message.message_id;
    const text = data.edited_message.text;
    const unique_id = [chat_id, message_id].join('#');
    const { message_link } = getMessageInfo(data.edited_message);
    const bot_message_id = loadSheetRow(sheet, unique_id)[1];

    // parsing telegram message
    let d = parseMessage(text);
    const now = new Date();
    const year = now.getFullYear();
    const month = MONTHS[now.getMonth()];

    // spreadsheet row
    let row = [
      unique_id, //
      bot_message_id,
      message_link || 'N/A',
      text,
      String(year),
      `${year}, ${month}`,
      now,
      d.category_type,
      d.category,
      d.currency === 'uzs' ? d.amount / d.usd_rate : d.amount,
      d.quantity,
      d.measure,
      d.comment,
      d.amount,
      d.currency,
      d.usd_rate,
    ];

    updateSheetRow(sheet, unique_id, row);
    editMessage(
      chat_id,
      bot_message_id,
      t(
        'success in editData: $1{category_type}, $2{category}, $3{amount}, $4{currency}, $5{quantity}, $6{measure}, $7{usd_rate}, $8{comment}',
        d.category_type,
        d.category,
        formatNum(d.amount),
        d.currency === 'usd' ? '$' : d.currency,
        formatNum(d.quantity),
        d.measure,
        formatNum(d.usd_rate),
        d.comment
      ),
      createDeleteKeyboard(unique_id)
    );
  } catch (error) {
    sendMessage(chat_id, t('error in editData'));
    logError('error in editData:', error, data);
  }
}

function deleteData(sheet, data) {
  try {
    var chat_id = data.callback_query.message.chat.id;
    const callback_query_id = data.callback_query.id;
    const [event_name, unique_id] = (data?.callback_query?.data || '').split(':');
    if (event_name !== 'delete') return;
    const bot_message_id = loadSheetRow(sheet, unique_id)[1];

    deleteSheetRow(sheet, unique_id);
    answerCallbackQuery(callback_query_id);
    editMessage(chat_id, bot_message_id, t('success in deleteData'));
  } catch (error) {
    sendMessage(chat_id, t('error in deleteData'));
    logError('error in deleteData:', error, data);
  }
}

function getMessageInfo(message) {
  let chat_info = '';
  let message_link = '';
  switch (message.chat.type) {
    case 'private':
      chat_info = t('private: $1{first_name} $2{last_name}', message.chat.first_name, message.chat.last_name);
      // no direct link for private chats
      break;
    case 'group':
    case 'supergroup':
      chat_info = t('group: $1{title}', message.chat.title);
      if (message.chat.username) {
        // public group
        message_link = `https://t.me/${message.chat.username}/${message.message_id}`;
      } else {
        // private group, link only works for members
        message_link = `https://t.me/c/${String(message.chat.id).slice(4)}/${message.message_id}`;
      }
      break;
    case 'channel':
      chat_info = t('channel: $1{title}', message.chat.title);
      if (message.chat.username) {
        // public channel
        message_link = `https://t.me/${message.chat.username}/${message.message_id}`;
      } else {
        // private channel, link only works for members
        message_link = `https://t.me/c/${String(message.chat.id).slice(4)}/${message.message_id}`;
      }
      break;
    default:
      chat_info = t('unknown chat type');
      logWarning('unknown chat type');
  }
  return { chat_info, message_link };
}

function createDeleteKeyboard(unique_id) {
  const markup = {
    inline_keyboard: [[{ text: t('delete'), callback_data: `delete:${unique_id}` }]],
  };
  return JSON.stringify(markup);
}

function parseMessage(initial_message) {
  function extractFloat(str) {
    return parseFloat(str.replace(/[^\d.]/g, ''));
  }

  function remove(message, match) {
    if (!match) return message;
    const index = message.indexOf(match) + match.length;
    return message.slice(index).trim();
  }

  function determineCurrency(currency_indicator, amount) {
    if (['$', 'usd'].includes(currency_indicator)) {
      return 'usd';
    } else if (['uzs', 'sum', "so'm", 's'].includes(currency_indicator)) {
      return 'uzs';
    } else {
      return Math.abs(amount) < 5000 ? 'usd' : 'uzs';
    }
  }

  // main parsing logic
  let message = initial_message;
  const result = {
    category: '',
    amount: null,
    currency: '',
    quantity: null,
    measure: '',
    usd_rate: null,
    comment: '',
  };

  // Extract category (everything until the first number or dollar sign)
  const category_match = message.match(/^(.*?)(?=\$?\d)/i);
  if (category_match) {
    result.category = category_match[1].trim();
    message = remove(message, category_match[0]);
  }

  // Extract amount and currency
  const amount_match = message.match(/(\$)?(\d[\d,.]*)(\s*(?:\$|usd|uzs|sum|som|so'm|s))?/i);
  if (amount_match) {
    const [full_match, dollar_sign, amount_str, currency_suffix] = amount_match;
    result.amount = extractFloat(amount_str);
    const currency_indicator = (dollar_sign || currency_suffix || '').toLowerCase().trim();
    result.currency = determineCurrency(currency_indicator, result.amount);
    message = remove(message, full_match);
  }

  // Extract quantity and measure
  const quantity_match = message.match(/(\d[\d,.]*)(\s*\w+)?/);
  if (quantity_match) {
    const [full_match, quantity_str, measure] = quantity_match;
    result.quantity = extractFloat(quantity_str);
    result.measure = (measure || '').trim();
    message = remove(message, full_match);
  }

  // Extract USD rate
  const rate_match = message.match(/(\d[\d,.]*)(\s*uzs|sum|som|so'm|s)?/i);
  if (rate_match) {
    result.usd_rate = extractFloat(rate_match[1]);
    message = remove(message, rate_match[0]);
  }

  // The rest is comment
  if (result.category && result.amount) {
    result.comment = message.trim();
  }

  if (!result.amount || isNaN(result.amount)) {
    result.category = '';
    result.category_type = '';
    result.amount = '';
    result.currency = '';
    result.quantity = '';
    result.measure = '';
    result.usd_rate = '';
    result.comment = '';
  } else {
    result.category = fuzzyMatchCategory(result.category);
    result.category_type = CATEGORIES[result.category];
    result.quantity = result.quantity || '';
    result.measure = fuzzyMatchMeasure(result.measure);
    result.usd_rate = result.category && result.amount ? result.usd_rate || usdRateFetch() : '';
  }

  return result;
}

function fuzzyMatchCategory(category) {
  let res = fuzzyMatch(category, Object.keys(CATEGORIES));
  return res.match;
}

function fuzzyMatchMeasure(measure) {
  let res = fuzzyMatch(measure, Object.keys(MEASURES));
  return (res.match && MEASURES[res.match]) || '';
}

//////////////////////////////////////////////////
// system functions: spreadsheet, telegram, logging, i18n
//////////////////////////////////////////////////
const MONTHS = [
  t('january'), //
  t('february'),
  t('march'),
  t('april'),
  t('may'),
  t('june'),
  t('july'),
  t('august'),
  t('september'),
  t('october'),
  t('november'),
  t('december'),
];

// spreadsheet
function insertSheetRow(sheet, row, fmt = {}, logging = true) {
  sheet.insertRowBefore(2);
  let range = sheet.getRange(2, 1, 1, row.length);
  range.setValues([row]);

  for (const [method, value] of Object.entries(fmt)) {
    range[method](value);
  }
  if (logging) {
    logInfo('success in insertSheetRow: ' + row[0]);
    logDebug('inserted row:\n| ' + row.join('\n| '));
  }
}

function loadSheetRow(sheet, unique_id) {
  let range = sheet.getRange('A:A').createTextFinder(unique_id).matchEntireCell(true).findNext();
  if (!range) {
    throw new Error('range not found: ' + unique_id);
  }
  let row = sheet.getRange(range.getRow(), 1, 1, sheet.getLastColumn()).getValues()[0];
  logInfo('success in loadSheetRow: ' + unique_id);
  logDebug('loaded row:\n| ' + row.join('\n| '));
  return row;
}

function updateSheetRow(sheet, unique_id, row, fmt = {}) {
  let range = sheet.getRange('A:A').createTextFinder(unique_id).matchEntireCell(true).findNext();
  if (!range) {
    throw new Error('range not found: ' + unique_id);
  }
  range = sheet.getRange(range.getRow(), 1, 1, row.length);
  range.setValues([row]);

  for (const [method, value] of Object.entries(fmt)) {
    range[method](value);
  }
  logInfo('success in updateSheetRow: ' + unique_id);
  logDebug('updated row:\n| ' + row.join('\n| '));
}

function deleteSheetRow(sheet, unique_id) {
  let range = sheet.getRange('A:A').createTextFinder(unique_id).matchEntireCell(true).findNext();
  if (!range) {
    throw new Error('range not found: ' + unique_id);
  }
  let row = sheet.getRange(range.getRow(), 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.deleteRow(range.getRow());
  logInfo('success in deleteSheetRow: ' + unique_id);
  logDebug('deleted row:\n| ' + row.join('\n| '));
}

// telegram functions
function getUpdates() {
  tgFetch('getUpdates');
}

function setWebhook() {
  tgFetch('setWebhook', { url: WEBAPP_URL });
}

function deleteWebhook() {
  tgFetch('deleteWebhook');
}

function sendMessage(chat_id, text, reply_markup = null, reply_to_message_id = null, logging = true) {
  let params = {
    chat_id,
    text,
    reply_markup,
    reply_to_message_id,
    parse_mode: 'HTML',
  };
  if (!reply_markup) {
    params.reply_markup = JSON.stringify({ inline_keyboard: [] });
  }
  return tgFetch('sendMessage', params, logging);
}

function editMessage(chat_id, message_id, text, reply_markup = null) {
  let params = {
    chat_id,
    message_id,
    text,
    reply_markup,
    parse_mode: 'HTML',
  };
  if (!reply_markup) {
    params.reply_markup = JSON.stringify({ inline_keyboard: [] });
  }
  try {
    var res = tgFetch('editMessageText', params);
  } catch (error) {
    // Check if the error is the specific "message is not modified" error
    if (error.message.includes('Bad Request: message is not modified')) {
      logInfo('refused to edit the message with no changes');
      res = { ok: true, result: 'No changes needed' };
    } else {
      throw error;
    }
  }
  return res;
}

function answerCallbackQuery(callback_query_id) {
  tgFetch('answerCallbackQuery', { callback_query_id });
}

function tgFetch(api, params = {}, logging = true) {
  const trimmed_api = api.startsWith('/') ? api.slice(1) : api;
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/${trimmed_api}`;
  let res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(params),
  });
  res = JSON.parse(res.getContentText());
  if (logging) {
    logInfo('success in tgFetch: ' + api);
    logDebug('api: ' + api + '\n\npayload:\n' + JSON.stringify(params, null, 2) + '\n\nresult:\n' + JSON.stringify(res, null, 2));
  }
  return res;
}

function usdRateFetch() {
  let res = UrlFetchApp.fetch('https://nbu.uz/en/exchange-rates/json/');
  res = JSON.parse(res.getContentText());
  const usd = res.find(entry => entry.code === 'USD');
  logInfo('success in usdRateFetch');
  logDebug('result:\n' + JSON.stringify(res, null, 2));
  return parseFloat(usd.cb_price);
}

// logging
function logError(title, error, data) {
  const plain_message = `ERROR:\n${title}\n${error.stack}\n\nrequest data:\n${JSON.stringify(data, null, 2)}`;
  const html_message = `ERROR:\n<b>${title}</b>\n<pre>${error.stack}</pre>\n\n<b>request data:</b>\n<pre>${JSON.stringify(data, null, 2)}</pre>`;
  logToSheet(plain_message, '#FFD8D8'); // light-red
  notifyAdmins(html_message);
  Logger.log(plain_message);
}

function logWarning(message) {
  return; // uncomment on production
  logToSheet('WARNING\n' + message, '#FFE9D2'); // light-orange
  Logger.log('WARNING\n' + message);
}

function logInfo(message) {
  return; // uncomment on production
  logToSheet('INFO\n' + message, '#E3EDFF'); // light-blue
  Logger.log('INFO\n' + message);
}

function logDebug(message) {
  return; // uncomment on production
  logToSheet('DEBUG\n' + message);
  Logger.log('DEBUG\n' + message);
}

function logToSheet(message, background = null) {
  return; // uncomment on production
  const logSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Logs') || SpreadsheetApp.openById(SPREADSHEET_ID).insertSheet('Logs');
  insertSheetRow(logSheet, [new Date(), message], { setBackground: background }, false);
}

function notifyAdmins(message) {
  TELEGRAM_ADMINS.forEach(chat_id => sendMessage(chat_id, message, null, null, false));
}

// i18n
function t(message, ...p) {
  // get the translation for the current language, or fall back to the original message
  const translation = I18N[message]?.[LANGCODE] || message;
  // replace placeholders
  return translation
    .replace(/\$(\d+)/g, (match, index) => {
      const placeholderIndex = parseInt(index, 10) - 1;
      return placeholderIndex < p.length ? p[placeholderIndex] : match;
    })
    .trim();
}

// fuzzy string searching
function fuzzyMatch(input, dictionary) {
  function normalize(str) {
    return (
      str
        .toLowerCase()
        .replace(/'/g, '') // Remove apostrophes
        .replace(/g'/, 'g') // Replace g' with g
        .replace(/o'/, 'o') // Replace o' with o

        // Russian to Uzbek letter conversion
        .replace(/а/g, 'a')
        .replace(/б/g, 'b')
        .replace(/в/g, 'v')
        .replace(/г/g, 'g')
        .replace(/д/g, 'd')
        .replace(/е/g, 'e')
        .replace(/ё/g, 'yo')
        .replace(/ж/g, 'j')
        .replace(/з/g, 'z')
        .replace(/и/g, 'i')
        .replace(/й/g, 'y')
        .replace(/к/g, 'k')
        .replace(/л/g, 'l')
        .replace(/м/g, 'm')
        .replace(/н/g, 'n')
        .replace(/о/g, 'o')
        .replace(/п/g, 'p')
        .replace(/р/g, 'r')
        .replace(/с/g, 's')
        .replace(/т/g, 't')
        .replace(/у/g, 'u')
        .replace(/ф/g, 'f')
        .replace(/х/g, 'x')
        .replace(/ц/g, 'ts')
        .replace(/ч/g, 'ch')
        .replace(/ш/g, 'sh')
        .replace(/щ/g, 'sh')
        .replace(/ъ/g, '')
        .replace(/ы/g, 'i')
        .replace(/ь/g, '')
        .replace(/э/g, 'e')
        .replace(/ю/g, 'yu')
        .replace(/я/g, 'ya')
    );
  }

  function soundex(str) {
    const a = str.split('');
    const f = a.shift();
    const r = a
      .map(v => {
        return 'bfpv'.includes(v) //
          ? '1'
          : 'cgjkqsxz'.includes(v)
          ? '2'
          : 'dt'.includes(v)
          ? '3'
          : 'l'.includes(v)
          ? '4'
          : 'mn'.includes(v)
          ? '5'
          : 'r'.includes(v)
          ? '6'
          : '';
      })
      .join('');
    return (
      f +
      r
        .replace(/(\d)\1+/g, '$1')
        .replace(/[^0-9]/g, '')
        .padEnd(3, '0')
        .substr(0, 3)
    ).toUpperCase();
  }

  function soundexSimilarity(str1, str2) {
    const code1 = soundex(str1);
    const code2 = soundex(str2);

    let similarity = 0;
    if (code1[0] === code2[0]) similarity += 0.4;
    for (let i = 1; i < 4; i++) {
      if (code1[i] === code2[i]) similarity += 0.2;
    }
    return similarity;
  }

  function damerauLevenshteinDistance(a, b) {
    const m = a.length;
    const n = b.length;
    const d = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) d[i][0] = i;
    for (let j = 0; j <= n; j++) d[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1, //
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + cost
        );
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          d[i][j] = Math.min(
            d[i][j], //
            d[i - 2][j - 2] + cost
          );
        }
      }
    }
    return d[m][n];
  }

  // fuzzy matching logic
  let best_match = '';
  let highest_similarity = 0;

  const norm_input = normalize(input);

  for (const term of dictionary) {
    const norm_term = normalize(term);

    // Exact match check
    if (norm_input === norm_term) {
      return { match: term, similarity: 1 };
    }
    const soundex_score = soundexSimilarity(norm_input, norm_term);

    // Lowered threshold to catch more potential matches
    if (soundex_score >= 0.6) {
      const distance = damerauLevenshteinDistance(norm_input, norm_term);
      const levenshtein_similarity = 1 - distance / Math.max(norm_input.length, norm_term.length);

      // Adjusted weights to favor Levenshtein slightly more
      const combined_similarity = soundex_score * 0.25 + levenshtein_similarity * 0.75;

      if (combined_similarity > highest_similarity) {
        highest_similarity = combined_similarity;
        best_match = term;
      }
    }
  }

  // Lowered threshold for accepting a match
  if (highest_similarity >= 0.6) {
    return { match: best_match, similarity: highest_similarity };
  } else {
    return { match: 'Boshqalar', similarity: 0 };
  }
}

function formatNum(num) {
  if (!num || isNaN(num)) return '';
  // Convert the number to a string and split it into integer and decimal parts
  const [integer_part, decimal_part] = num.toString().split('.');
  // Add commas to the integer part
  const formatted_integer = integer_part.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // If there's a decimal part, join it back; otherwise, return just the integer part
  return decimal_part ? `${formatted_integer}.${decimal_part}` : formatted_integer;
}
