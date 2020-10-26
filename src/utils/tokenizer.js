const jwt = require('jsonwebtoken');
const secret = 'ilhamganteng';

const createToken = (payload, exp) => {
    const token = jwt.sign({ data: payload }, secret, { expiresIn: exp });
    return token;
}

const verifyToken = (req, res, next) => {
    try {
        if(!req.headers.token) {
            throw new Error('Token is required');
        }
        const decoded = jwt.verify(req.headers.token, secret);
        req.headers.decoded = decoded;
        next();
    } catch (e) {
        res.send({ message: e.message });
    }
}

const checkToken = async (token) => {
    let result;
    try {
        if(!token) {
            throw new Error('Token is required');
        }
        const decoded = await jwt.verify(token, secret);
        if(decoded) {
            result = { decoded }
        }
    } catch (e) {
        result = {
            error: true,
            message: e.message
        }
    }
    return result;
}


module.exports = {
    createToken,
    verifyToken,
    checkToken
}