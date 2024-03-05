
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const categoriesDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  scalar Date
  scalar JSON

  input addCategory {
    name: String!
    location: JSON!
    rating: Int
    createdAt: Date!
    availableAt: Date!
    unavailableAt: Date!
    capacity: Int
    minThreshold: Int
    active: Boolean!
    activityId: Int!
  }

  input updateCategory {
    name: String
    location: JSON
    rating: Int
    createdAt: Date
    availableAt: Date
    unavailableAt: Date
    capacity: Int
    minThreshold: Int
    active: Boolean
    activityId: Int!
  }

  input getAll {
    activityId: Int
  }

  input deleteCategory {
    categoryId: Int!
  }

  type showMessage{
    message:String
  }

  type dataWithMessage{
    data: JSON!
    message:String!
  }

  type Query {
    getAllCategories(input: getAll): JSON!
  }

  type Mutation {
    addCategory(input: addCategory!): showMessage!
    deleteCategory(input: deleteCategory!): showMessage!
    updateCategory(input: updateCategory!): dataWithMessage!
  }

`;

module.exports = categoriesDefs