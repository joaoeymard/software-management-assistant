const crypto = require("crypto");

module.exports = {
  parseMD5: (str) => crypto.createHash("md5").update(str).digest("hex"),
};
