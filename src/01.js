const sha1 = require("crypto-js/sha1")
const sha256 = require("crypto-js/sha256")
const sha512 = require("crypto-js/sha512")
const md5 = require("crypto-js/md5")

class Crypto{
    static setSha256(str){
        this.resSha256 = sha256(str)
        return this.resSha256.toString()
    }
    static setMd5(str){
        this.resMd5 = md5(str)
        return this.resMd5.toString()
    }
    static setSha512(str){
        this.resSha1 = sha512(str)
        return this.resSha1.toString()
    }
    static setSha1(str){
        this.resSha512 = sha1(str)
        return this.resSha512.toString()
    }
}

// const crypto = new Crypto()
// const a = crypto.setSha256('secret')
// console.log(a)
// crypto.setSha1().toString()
// crypto.setSha256().toString()
// crypto.setSha512().toString()

module.exports = Crypto;




