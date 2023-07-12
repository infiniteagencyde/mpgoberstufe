'use strict';

/**
 * ag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ag.ag');
