"use strict";

/**
 * Genre
 * @description :: Model for storing Genre records
 */

module.exports = {
    schema: true,

    attributes: {
        label: {
            type: 'string',
            required: true
        },
        value: {
            type: 'string',
            lowercase: true,
            alphanumericdashed: true
        },

        toJSON() {
            return this.toObject();
        }
    },

    beforeValidate: (values, next) => {
        //Todo: Regex out the non-word characters.
        // let value = label.match(/w).toLowerCase();
        values.value = values.label.toLowerCase();
        next();
    },
    beforeUpdate: (values, next) => next(),
    beforeCreate: (values, next) => next()
};
