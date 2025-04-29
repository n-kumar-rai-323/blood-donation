const bcrypt = require("bcrypt");

const genHash = (text) => {
  return bcrypt.hashSync(text, 10);
};

const compareHash = (text, hashText) => {
    return bcrypt.compareSync(text, hashText)
};

module.exports ={genHash, compareHash}