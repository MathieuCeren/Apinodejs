
const joi = require('@hapi/joi');
const db = require('../config/database');

module.exports = {
    method: 'GET',
    path: '/api/validations',
    options: {
        validate: {
            query: joi.object().keys({
                limit: joi.number().integer().min(0).default(5),
                offset: joi.number().integer().min(0).default(0)
            })
        }
    },
    handler: async (req, toolkit) => {

        return db.select('LIBELLE_ARRET', 'NB_VALD').from('validations').limit(req.query.limit).offset(req.query.offset)
            .then(result => {
                return toolkit.response({
                    statusCode: 200,
                    errors: null,
                    message: 'OK',
                    meta: {
                        query: req.query,
                        params: req.params
                    },
                    data: result
                }).code(202);
            })
            .catch(err => { 
                return toolkit.response({
                    statusCode: 400,
                    errors: null,
                    message: 'Not found',
                    meta: {
                        query: err.query
                    },
                    data: null
                });
            });
    }
};