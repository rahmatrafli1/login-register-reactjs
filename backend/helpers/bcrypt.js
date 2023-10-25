const bcrypt = require("bcrypt");

const encryptpass = (data) => {
  const genPass = bcrypt.genSaltSync(10, "a");
  return bcrypt.hashSync(String(data), genPass);
};

const decryptpass = (data, hasPass) => {
  return bcrypt.compareSync(String(data), hasPass);
};

module.exports = { encryptpass, decryptpass };
