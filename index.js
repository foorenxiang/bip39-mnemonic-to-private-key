const ethers = require('ethers');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt_for_mnemonic = (callback) => {
  readline.question('Please enter your mnemonic?:\n', callback);
};

const convert_mnemonic_to_private_key = (mnemonic) => {
  const privateKey = ethers.Wallet.fromMnemonic(mnemonic).privateKey;
  console.log(`Private key
  : \n${privateKey}`);
};

const main = () => {
  prompt_for_mnemonic(convert_mnemonic_to_private_key);
};

main();
