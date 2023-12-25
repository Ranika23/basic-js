const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {

  constructor(value = true) {
    this.value = value;
  }
  error(message, key) {
    if (message === undefined ||
      message === null ||
      message === '' ||
      key === undefined ||
      key === null ||
      key === '') throw new Error('Incorrect arguments!');
  }

  encrypt(message, key) {
    this.error(message, key)

    let kf = Math.ceil(message.length / key.length)
    key = key.repeat(kf);

    let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = [];
    let n = 0;

    for (let i = 0; i < message.length; i++) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(message[i].toUpperCase()) === -1) {
        result.push(message[i])
      } else {
        let letterIdx = arr.indexOf(message[i].toUpperCase());
        let shift = arr.indexOf(key[n].toUpperCase());
        n++;

        result.push(arr[(letterIdx + shift) % 26])
      }
    }

    let res = result;
    if (this.value === false) {
      res.reverse()
    }
    return res.join('')

  }

  decrypt(encryptedMessage, key) {
    this.error(encryptedMessage, key)

    let kf = Math.ceil(encryptedMessage.length / key.length)
    key = key.repeat(kf);

    let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let n = 0;
    let result = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(encryptedMessage[i].toUpperCase()) === -1) {
        result.push(encryptedMessage[i])
      } else {

        let letterIdx = arr.indexOf(encryptedMessage[i].toUpperCase());
        let shift = arr.indexOf(key[n].toUpperCase());
        n++;

        result.push(arr[(letterIdx - shift + 26) % 26])
      };
    }

    let res = result;
    if (this.value === false) {
      res.reverse()
    }
    return res.join('')
  }
}


module.exports = {
  VigenereCipheringMachine
};
