
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const activityTypeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  scalar JSON

  input createActivityType {
    activityType: String!
  }

  input deleteActivityType {
    activityTypeId: Int!
  }

  type showMessage{
    message:String
  }

  type Query {
    getAllActivityTypes: JSON!
  }

  type Mutation {
    createActivityType(input: createActivityType!): showMessage!
    deleteActivityType(input: deleteActivityType!): showMessage!
  }

`;

module.exports = activityTypeDefs