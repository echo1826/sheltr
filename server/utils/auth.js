const jwtoken = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;
const expirationTime ='1d';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwtoken.verify(token, secret, {maxAge: expirationTime});
            req.user = data;
        } catch {
            console.log('Token not acceptable.')
        }

        return req;
    },

    signToken: function({ _id, email, username }) {
        const payload = { _id, email, username };
        return jwtoken.sign({ data: payload }, secret, { expiresIn: expirationTime});
    },
};