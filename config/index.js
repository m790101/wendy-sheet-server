/**
 * @description 系統目前定義之code與message對應設定
 * @type {object}
 */
const responseCodeMapping = {
    '0000': 'Success',
    '500': 'Server error',
    'X0001_000001': '非網銀使用者',
    'X001_002_MB': '您可能先前未正常登出或已經在別台裝置登入，若需繼續登入，請點選「確定登入」，同時其他裝置將會自動登出。',
  }


/**
 * @description 系統定義 成功的代碼
 * @type {string}
 */
module.exports.successCode = '0000'



/**
 * @description 依代碼取得對應訊息
 * @export utils/responseHelper
 * @param {string} code api執行結果代碼
 * @returns {string}
 */
module.exports.getMessageByCode = (code) => {
    const msg = responseCodeMapping[code]
    return msg || `Can't find [${code}] mapping message.`
  }