// Middleware de autenticación para pruebas temporales.

const authTestMiddleware = (req, res, next) => {
    req.user = {
        id: '1234567890',
    };
    next();
};

module.exports = authTestMiddleware;