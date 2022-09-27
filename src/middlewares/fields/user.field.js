const { userExist } = require('../../services/user.service');

const validateName = (name) => {
    let erro = false;
    if (name.length < 8) {
        erro = {
            message: '"displayName" length must be at least 8 characters long',
            status: 400,
        };
    }
    return erro;
};
const validateEmail = (email) => {
    let erro = false;
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!re.test(email)) {
        erro = {
            message: '"email" must be a valid email',
            status: 400,
        };
    }
    return erro;
};
const validatePassword = (password) => {
    let erro = false;
    if (password.length < 6) {
        erro = {
            message: '"password" length must be at least 6 characters long',
            status: 400,
        };
    }
    return erro;
};

const newUser = async (req, _res, next) => {
    const { email, displayName, password } = req.body;
    await userExist(email); 
    const requests = [];
    requests.push(validateName(displayName));
    requests.push(validatePassword(password));
    requests.push(validateEmail(email));
    const resp = await Promise.all(requests);
    const erro = resp.find((v) => v); 
    if (resp.find((v) => v)) return next(erro);
    return next();
};

module.exports = {
    newUser,
};