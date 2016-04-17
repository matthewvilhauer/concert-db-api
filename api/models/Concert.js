"use strict";

/**
 * Concert
 * @description :: Model for storing Concert records
 */

module.exports = {
    schema: true,

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        date: {
            type: 'date',
            //Todo: Test how null values are handled on front end and determine if we need this to default to some value
            date: true
        },
        description: {
            type: 'string',
            defaultsTo: ''
        },
        location: {
            type: 'string',
            defaultsTo: ''
        },
        coordinates: {
            type: 'string',
            defaultsTo: ''
        },
        image: {
            type: 'string',
            url: true,
            defaultsTo: ''
        },
        recording: {
            type: 'string',
            url: true,
            defaultsTo: ''
        },
        setlist: {
            type: 'string',
            defaultsTo: ''
        },

        // Add associations to Bands
        bands: {
            collection: 'band',
            via: 'concertperformances'
        },
        // Add associations to Users
        attendees: {
            collection: 'user',
            via: 'myconcerts'
        },
        // Add associations to Favorites
        favoriteconcerts: {
            collection: 'user',
            via: 'concerts'
        },

        toJSON() {
            return this.toObject();
        }
    },

    beforeUpdate: (values, next) => next(),
    beforeCreate: (values, next) => next()
};
