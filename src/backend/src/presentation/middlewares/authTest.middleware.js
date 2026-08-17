// Middleware de autenticación para pruebas temporales.

const authTestMiddleware = (req, res, next) => {
    req.user = {
        id: '0726eb58-c70e-484c-add7-428f869f6d3d',
    };
    next();
};

module.exports = authTestMiddleware;