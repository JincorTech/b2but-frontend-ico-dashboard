import { setTimeout } from 'timers';

const getMock = (path) => {
  switch (path) {
    case '/user/me':
      return {
        ethAddress: '0xdb369b56BA7b07cF287f611Fbf0DAA4A8a4C2751',
        email: 'existing@test.com',
        name: 'ICO investor',
        kycStatus: 'verified',
        defaultVerificationMethod: 'email'
      };

    case '/dashboard':
      return {
        ethBalance: '1.0001',
        jcrTokensSold: '5000',
        jcrTokenBalance: '500.00012345678912345',
        jcrTokenPrice: {
          ETH: '0.005',
          USD: '1'
        },
        raised: {
          ETH: '2000',
          USD: '1000000',
          BTC: '100'
        },
        daysLeft: 10
      };

    case '/dashboard/investTxFee':
      return {
        gasPrice: '47',
        gas: '130000',
        expectedTxFee: '0.00611'
      };

    case '/dashboard/transactions':
      return [
        {
          id: '5a003866ee3a9d0ad93aeba1',
          type: 'gateway_transaction',
          status: '100', // 0 - Waiting for buyer funds..., 1 - Funds received and confirmed, sending to you shortly..., 100 - Complete
          currency: 'LTCT',
          confirmsNeeded: '0', // total confirms needed
          totalAmount: '0.1', // Total Amount To Send
          receivedAmount: '0.0234', // Received So Far
          receivedConfirms: '0', // received confirms
          qrcodeUrl: 'http://image.ibb.co/mKkWFx/static_qr_code_without_logo.png',
          address: 'mwyyRgo5Z3bvtoDaVijSVksi6ipGrqaPAf', // Send To Address
          timestamp: 1521028594000,
          expiredOn: 1521035000000,
          timeout: 86400,
          txnId: 'CPCC4YZXHG2Q1QZ37F0Y5YDAVO',
          statusUrl: 'https://www.coinpayments.net/index.php?cmd=status&id=CPCC2VST0IPSVWFQ9MMOEJWPPT&key=76d3384d3e58552d8d9036f7d2ab5974' // link on the transaction status on coinpayments.net
        },
        {
          id: '5a003866ee3a9d0ad93aeba2',
          type: 'gateway_transaction',
          status: '-1', // 0 - Waiting for buyer funds..., 1 - Funds received and confirmed, sending to you shortly..., 100 - Complete
          currency: 'BTC',
          confirmsNeeded: '0', // total confirms needed
          totalAmount: '0.1', // Total Amount To Send
          receivedAmount: '0.0234', // Received So Far
          receivedConfirms: '0', // received confirms
          qrcodeUrl: 'http://image.ibb.co/mKkWFx/static_qr_code_without_logo.png',
          address: 'mwyyRgo5Z3bvtoDaVijSVksi6ipGrqaPAf', // Send To Address
          timestamp: 1521028594000,
          expiredOn: 1521035000000,
          timeout: 86400,
          txnId: 'CPCC4YZXHG2Q1QZ37F0Y5YDAVO',
          statusUrl: 'https://www.coinpayments.net/index.php?cmd=status&id=CPCC2VST0IPSVWFQ9MMOEJWPPT&key=76d3384d3e58552d8d9036f7d2ab5974' // link on the transaction status on coinpayments.net
        },
        {
          id: '5a003866ee3a9d0ad93aeba3',
          type: 'gateway_transaction',
          status: '0', // 0 - Waiting for buyer funds..., 1 - Funds received and confirmed, sending to you shortly..., 100 - Complete
          currency: 'LTC',
          confirmsNeeded: '0', // total confirms needed
          totalAmount: '0.1', // Total Amount To Send
          receivedAmount: '0.0234', // Received So Far
          receivedConfirms: '0', // received confirms
          qrcodeUrl: 'http://image.ibb.co/mKkWFx/static_qr_code_without_logo.png',
          address: 'mwyyRgo5Z3bvtoDaVijSVksi6ipGrqaPAf', // Send To Address
          timestamp: 1521028594000,
          expiredOn: 1521035000000,
          timeout: 86400,
          txnId: 'CPCC4YZXHG2Q1QZ37F0Y5YDAVO',
          statusUrl: 'https://www.coinpayments.net/index.php?cmd=status&id=CPCC2VST0IPSVWFQ9MMOEJWPPT&key=76d3384d3e58552d8d9036f7d2ab5974' // link on the transaction status on coinpayments.net
        },
        {
          id: '5a003866ee3a9d0ad93aeba4',
          transactionHash: '0xe423dd7d40b039e4e30ad7b5520f5905c6ec8c11122c94e3858c70e7983b5d7e',
          timestamp: 1509963894,
          blockNumber: 2016136,
          from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
          to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
          ethAmount: '0',
          jcrAmount: '1',
          status: 'confirmed',
          type: 'jcr_transfer',
          direction: 'out'
        },
        {
          id: '5a004158b8442c0e1400fc4f',
          transactionHash: '0xcdf4a9dc086bcb3308475ced42b772879fd052822693aee509f81493412d460f',
          timestamp: 1509966175,
          blockNumber: 2016339,
          from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
          to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
          ethAmount: '0',
          jcrAmount: '1',
          status: 'confirmed',
          type: 'jcr_transfer',
          direction: 'out'
        },
        {
          id: '5a004dee3663160140d19291',
          transactionHash: '0xe5d5ed39bf9eb64d3e56bf4a9d89b7f2bb026fc02c0d149027757936a1e7b6c7',
          timestamp: 1509969394,
          blockNumber: 2016578,
          from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
          to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
          ethAmount: '2',
          status: 'confirmed',
          type: 'eth_transfer',
          direction: 'out'
        },
        {
          id: '5a004e003663160140d19292',
          transactionHash: '0x057c0846b7b7fa54c10544c595ec2e476c830220f0ea1fbb52215a3a44deade1',
          timestamp: 1509969394,
          blockNumber: 2016578,
          from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
          to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
          ethAmount: '2',
          status: 'confirmed',
          type: 'eth_transfer',
          direction: 'out'
        },
        {
          id: '5a00669ab21e84067aac8bf6',
          transactionHash: '0xb87ef88fe75724ed067413de7c48f4c745cfafa709f42884308663cb53a8e2a0',
          timestamp: 1509975754,
          from: '0x54c0B824d575c60F3B80ba1ea3A0cCb5EE3F56eA',
          to: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
          ethAmount: '5',
          status: 'pending',
          type: 'eth_transfer',
          direction: 'in'
        }
      ];

    case '/kyc/init':
      return {
        timestamp: '2017-11-09T06:47:31.467Z',
        authorizationToken: 'c87447f8-fa43-4f98-a933-3c88be4e86ea',
        clientRedirectUrl: 'https://lon.netverify.com/widget/jumio-verify/2.0/form?authorizationToken=c87447f8-fa43-4f98-a933-3c88be4e86ea',
        jumioIdScanReference: '7b58a08e-19cf-4d28-a828-4bb577c6f69a'
      };

    case '/dashboard/referral':
      return {
        data: 'dGVzdEB0ZXN0LmNvbQ',
        referralCount: 5,
        users: [
          {
            date: 1508241475,
            name: 'Investor 1',
            walletAddress: '0x54c0B824d575c60F3B80ba1ea3A0cCb5EE3F56eA',
            tokens: '105'
          },
          {
            date: 1508241475,
            name: 'Investor 2',
            walletAddress: '0x54c0B824d575c60F3B80ba1ea3A0cCb5EE3F56eB',
            tokens: '1.01'
          }
        ]
      };

    case '/gateway/currencies':
      return {
        BTC: {
          is_fiat: 0,
          rate_btc: '1.000000000000000000000000',
          last_update: '1375473661',
          tx_fee: '0.00100000',
          status: 'online',
          capabilities: [
            'payments',
            'wallet',
            'transfers',
            'convert'
          ]
        },
        LTC: {
          is_fiat: 0,
          rate_btc: '0.018343387500000000000000',
          last_update: '1518463609',
          tx_fee: '0.00100000',
          status: 'online',
          capabilities: [
            'payments',
            'wallet',
            'transfers',
            'convert'
          ]
        },
        USD: {
          is_fiat: 1,
          rate_btc: '0.000114884285404190000000',
          last_update: '1518463609',
          tx_fee: '0.00000000',
          status: 'online',
          capabilities: []
        },
        ETH: {
          is_fiat: 0,
          rate_btc: '0.09359024',
          last_update: '1518463609',
          tx_fee: '0.00100000',
          status: 'online',
          capabilities: [
            'payments',
            'wallet',
            'transfers',
            'convert'
          ]
        }
      };

    default:
      console.log('!!! UNCATCHED PATH', path);
      return {};
  }
};

const postMock = (path, body) => {
  switch (path) {
    case '/dashboard/invest/initiate':
      console.log('!!! POST PAYMENT. BODY:', body);
      return {
        verification: {
          verificationId: 'a4d642d6-8c96-4435-94b8-9a2bbd501552',
          consumer: 'test@gmail.com',
          expiredOn: 1509387586,
          status: 200,
          method: 'email'
        }
      };

    case '/gateway/createTransaction':
      console.log('!!! POST GATEWAY TRANSACTION:', body);
      return {
        amount: '1.00000000',
        address: '0xf3268eac2455e5daf0ac60ad33096a381060ddca',
        txn_id: 'CPCC5PFWQLX81ADHWU8M7VRGEB',
        confirms_needed: '10',
        timeout: 9000,
        status_url: 'https://www.coinpayments.net/index.php?cmd=status&id=XXX&key=ZZZ',
        qrcode_url: 'http://image.ibb.co/mKkWFx/static_qr_code_without_logo.png'
      };

    default: return {};
  }
};

const putMock = (path, body) => {
  switch (path) {
    case '/contracts/me/':
      console.log('!!! PUT ME. BODY:', body);
      return {
      };

    default: return {};
  }
};

export const get = (path) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMock(path));
    }, 1000);
  });

export const post = (path, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(postMock(path, body));
    }, 1000);
  });

export const put = (path, body) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(putMock(path, body));
    }, 1000);
  });
