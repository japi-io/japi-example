const Joi = require('@hapi/joi');

const Article = Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        twitter: Joi.string().required(),
    })
});

module.exports = Article;
