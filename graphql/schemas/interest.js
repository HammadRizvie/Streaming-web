
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const interestDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  scalar JSON

  input addInterest {
    interest: String!
    level: JSON!
  }

  input delete {
    interestId: Int!
  }

  type showMessage{
    message:String
  }

  type Query {
    getAllInterests: JSON!
  }

  type Mutation {
    addInterest(input: addInterest!): showMessage!
    deleteInterest(input: delete!): showMessage!
  }

`;

module.exports = interestDefs