const { rule, shield, and, or, not, inputRule, allow, deny } = require("graphql-shield");
const { PrismaClient } = require('../src/generated/client')
const { GraphQLError } = require('graphql');
const { errorName } = require('../utils/constants');

const prisma = new PrismaClient({
  errorFormat: 'pretty'
})

const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, context, info) => {
  if (context.id == undefined) return new GraphQLError(errorName.UNAUTHORIZED);
  return true;
});

const isAdmin = rule({ cache: 'contextual' })(async (parent, args, context, info) => {
  const role = await prisma.roles.findUnique({
    where: {
      role: 'admin'
    }
  })

  if (context.roleId != role.id) return new GraphQLError(errorName.UNAUTHORIZED);
  return true

});

const isUser = rule({ cache: 'contextual' })(async (parent, args, context, info) => {
  const role = await prisma.roles.findUnique({
    where: {
      role: 'user'
    }
  })

  if (context.roleId != role.id) return new GraphQLError(errorName.UNAUTHORIZED);
  return true

});

const isVendor = rule({ cache: 'contextual' })(async (parent, args, context, info) => {

  const role = await prisma.roles.findUnique({
    where: {
      role: 'vendor'
    }
  })

  if (context.roleId != role.id) return new GraphQLError(errorName.UNAUTHORIZED);
  return true

});


const permissions = shield({
  Query: {
    getUser: isAuthenticated,
    getAllInterests: isAuthenticated,
    getAllUsers: isAuthenticated,
    getAllRoles: isAuthenticated,
    getAllActivityTypes: isAuthenticated,
    getAllActivities: isAuthenticated
  },
  Mutation: {
    register: not(isAuthenticated),
    forgetPassword: not(isAuthenticated),
    verifyCode: not(isAuthenticated),
    resetPassword: not(isAuthenticated),
    login: not(isAuthenticated),
    verifyAuthToken: not(isAuthenticated),
    updateUser: and(isAuthenticated, isUser),
    addInterest: and(isAuthenticated, isAdmin),
    deleteInterest: and(isAuthenticated, isAdmin),
    createRole: and(isAuthenticated, isAdmin),
    deleteRole: and(isAuthenticated, isAdmin),
    createActivityType: and(isAuthenticated, isAdmin),
    deleteActivityType: and(isAuthenticated, isAdmin),
    createActivity: and(isAuthenticated, or(isVendor, isAdmin)),
    deleteActivity: and(isAuthenticated, or(isVendor, isAdmin)),
    updateActivity: and(isAuthenticated, or(isVendor, isAdmin))
  }
}, {
  fallbackRule: allow
});

module.exports = { permissions };
