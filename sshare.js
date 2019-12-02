var secrets = require("secrets.js-grempe/secrets.js")

var publickey = "MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAecQSkSyGKIr/hMwnCnZSICJty1c/"

var publickeyhex = secrets.str2hex(publickey)
console.log(publickey)

var shares = secrets.share(publickeyhex, 4, 2)
console.log("show all shares:")
console.log(shares[0])
console.log(shares[1])
console.log(shares[2])
console.log(shares[3])

var combine = secrets.combine(shares.slice(1,2))

console.log("combine 2 shares:")
console.log(shares[1])
console.log(shares[2])
combine = secrets.combine([shares[1], shares[2]])
 

combine = secrets.hex2str(combine)
console.log(combine)
console.log(combine === publickey) // => true

