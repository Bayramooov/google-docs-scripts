const { readFileSync, writeFileSync, existsSync } = require('fs');

function extractMessages(inputFilePath) {
  const content = readFileSync(inputFilePath, 'utf8');
  // Regex to catch t() calls, preserving exact string content
  const regex = /(?<!\w)t\s*\(\s*(['"`])((?:(?!\1|\\).|\\.)*)\1\s*(?:,|\))/g;
  const messages = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    messages.add(match[2]);
  }
  return Array.from(messages);
}

function genTranslations(messages, existing_messages) {
  const translations = { ...existing_messages };
  // marking removed messages
  for (const key in translations) {
    if (!messages.includes(key)) {
      translations[key].removed = true;
    }
  }
  // adding new messages
  for (const key of messages) {
    if (!translations[key]) {
      translations[key] = {
        en: '',
        uz: '',
        ru: '',
      };
    } else if (translations[key].removed) {
      delete translations[key].removed;
    }
  }
  return translations;
}

function main() {
  if (process.argv.length < 3) {
    console.error('Please provide a input file path as an argument.');
    process.exit(1);
  }

  const inputFilePath = process.argv[2];
  if (!existsSync(inputFilePath)) {
    console.error(`Input file not found: ${inputFilePath}`);
    process.exit(1);
  }

  const outputFilePath = process.argv[3] || 'i18n.json';
  let existing_messages = {};
  if (existsSync(outputFilePath)) {
    const content = readFileSync(outputFilePath, 'utf8');
    existing_messages = JSON.parse(content);
  }

  const messages = extractMessages(inputFilePath);
  const translations = genTranslations(messages, existing_messages);

  writeFileSync(outputFilePath, JSON.stringify(translations, null, 2));
  console.log(`Translations template generated into ${outputFilePath} with ${Object.keys(translations).length} messages.`);
}

main();
