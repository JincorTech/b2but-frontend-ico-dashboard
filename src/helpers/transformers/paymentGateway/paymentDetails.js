export const transformCreateTransactionResponse = (response) => ({
  totalAmount: response.amount,
  address: response.address,
  txnId: response.txn_id,
  confirmsNeeded: response.confirms_needed,
  timeout: response.timeout,
  statusUrl: response.status_url,
  qrcodeUrl: response.qrcode_url
});