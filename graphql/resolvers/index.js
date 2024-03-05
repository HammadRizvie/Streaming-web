const userResolver = require('./user');
const interestResolver = require('./interest');
const rolesResolver = require('./roles');
const activityTypesResolver = require('./activityTypes');
const activitiesResolver = require('./activities');
const categoriesResolver = require('./categories');

module.exports = [
    userResolver,
    interestResolver,
    rolesResolver,
    activityTypesResolver,
    activitiesResolver,
    categoriesResolver
]