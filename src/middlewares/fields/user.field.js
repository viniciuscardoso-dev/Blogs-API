const { User } = require('../../models');

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

const newUser = async (req, res, next) => {
    const { email, displayName, password } = req.body;
    const users = await User.findOne({ where: { email } });
    // chamar o camada de service pra ela sim chamar a camada de model
    if (users) {
        const e = new Error('User already registered');
        e.status = 409;
        return next(e);
    }
    // funcao userExist na service 
    const requests = [];
    requests.push(validateName(displayName));
    requests.push(validatePassword(password));
    requests.push(validateEmail(email));
    const resp = await Promise.all(requests);
    const erro = resp.find((v) => v); 
    if (resp.find((v) => v)) return next(erro);
    next();
};

module.exports = {
    newUser,
};