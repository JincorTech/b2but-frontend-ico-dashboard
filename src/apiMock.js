import { setTimeout } from 'timers';

const getMock = (path) => {
  switch (path) {
    case '/user/me':
      return {
        "ethAddress": "0xdb369b56BA7b07cF287f611Fbf0DAA4A8a4C2751",
        "email": "existing@test.com",
        "name": "ICO investor",
        "kycStatus": "Not verified",
        "defaultVerificationMethod": "email"
      };

    case '/dashboard':
      return {
        "ethBalance": "1.0001",
        "jcrTokensSold": "5000",
        "jcrTokenBalance": "500.00012345678912345",
        "jcrTokenPrice": {
          "ETH": "0.005",
          "USD": "1"
        },
        "raised": {
          "ETH": "2000",
          "USD": "1000000",
          "BTC": "100"
        },
        "daysLeft": 10
      }

    case '/dashboard/investTxFee':
      return {
        "gasPrice": "47",
        "gas": "130000",
        "expectedTxFee": "0.00611"
      }
    default:
      console.log('!!! UNCATCHED PATH', path);
      return {};
  }
};

const postMock = (path, body) => {
  switch (path) {
    case '/contracts/':
      console.log('!!! POST CONTRACT. BODY:', body);
      return {
      }
  };
};

const putMock = (path, body) => {
  switch (path) {
    case '/contracts/me/':
      console.log('!!! PUT ME. BODY:', body);
      return {
      };
  }
};

export const get = (basePath, path) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMock(basePath));
    }, 1000);
  });
};

export const post = (basePath, path, body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postMock(path, body));
    }, 1000);
  });
};

export const put = (path, body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(putMock(path, body));
    }, 1000);
  });
};
