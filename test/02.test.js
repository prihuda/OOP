const Cipher = require("../src/02")

test("Encrypt is:", () => {
    expect(Cipher.cipherEnc('Ini tulisan rahasia', 'p4$$w0rd')).toMatch('U2FsdGVkX19qdu1TFSZDl76djMvWMU8JqI8IHtSmWO6cKzzHFlbqZf87sKz0IlkQ')
})
test("Decrypt is:", () => {
    expect(Cipher.cipherDec('Ini tulisan rahasia', 'p4$$w0rd')).toMatch('Ini tulisan rahasia')
})
