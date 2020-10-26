const secure = require('./secure');
const tokenizer = require('./tokenizer');
const getAdditionalData = require('./getAdditionalData');

module.exports = {
    ...secure,
    ...tokenizer,
    getAdditionalData
}