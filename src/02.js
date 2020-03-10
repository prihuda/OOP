const CryptoJS = require("crypto-js");

class Cipher{
    static cipherEnc(str,str2){
        this.ciphertext = CryptoJS.AES.encrypt(str,str2).toString();
        return this.ciphertext
    }
    static cipherDec(str,str2){
        const ciphertext = CryptoJS.AES.encrypt(str,str2).toString();
        const bytes  = CryptoJS.AES.decrypt(ciphertext,str2);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText
    }
}

module.exports = Cipher;