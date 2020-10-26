const bcrypt = require('bcrypt');

const encrypt = (param) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(param, salt);
    return hash;
}

const compare = (param, hash) => {
    const result = bcrypt.compareSync(param, hash);
    return result;
}

module.exports = {
    encrypt,
    compare
}