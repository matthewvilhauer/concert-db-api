"use strict";

/**
 * Band
 * @description :: Model for storing Band records
 */

module.exports = {
    schema: true,

    attributes: {
        name: {
            type: 'string',
            unique: true,
            required: true,
            min: 1
        },
        description: {
            type: 'string',
            defaultsTo: ''
        },
        image: {
            type: 'string',
            url: true,
            defaultsTo: ''
        },

        // Add a association to Concerts
        concertperformances: {
            collection: 'concert',
            via: 'bands',
            dominant: true
        },
        // Add a association to Favorites
        favoritebands: {
            collection: 'user',
            via: 'bands'
        },

        toJSON() {
            return this.toObject();
        }
    },

    beforeUpdate: (values, next) => next(),
    beforeCreate: (values, next) => next()
};
