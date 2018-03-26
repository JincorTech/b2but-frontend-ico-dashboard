const transformCreateTransactionResponse = (response) => ({
  totalAmount: response.amount,
  address: response.address,
  txnId: response.txnId,
  confirmsNeeded: response.confirmsNeeded,
  timeout: response.timeout,
  statusUrl: response.statusUrl,
  qrcodeUrl: response.qrcodeUrl
});

export default transformCreateTransactionResponse;