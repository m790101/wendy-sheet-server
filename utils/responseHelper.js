
/**
 * @description 產生API的response資料(含簽章)
 * @export utils/responseHelper
 * @param {*} code api回應代碼
 * @param {*} message 呼叫結果訊息文字，若呼叫失敗會有錯誤原因，成功則為成功字眼
 * @param {*} body api回傳資料
 * @param {*} [isRemoveToken=false] api是否正需要移除token(ture：沒有token,false：有token)
 * @returns {object}
 */
module.exports.genResponse = (code, message, body) => {
  const data = {
    'header': {
      code,
      message,
    },
    body
  }
  return data
}
