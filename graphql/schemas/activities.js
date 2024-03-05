
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const activityDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  input createActivity {
    activity: String!
    typeId: Int!
  }

  input deleteActivity {
    activityId: Int!
  }

  input updateActivity {
    activityId: Int!
    activity: Int
    typeId: Int
  }

  type showMessage{
    message:String
  }

  type dataWithMessage{
    data: JSON!
    message:String!
  }

  type Query {
    getAllActivities: JSON!
  }

  type Mutation {
    createActivity(input: createActivity!): showMessage!
    deleteActivity(input: deleteActivity!): showMessage!
    updateActivity(input: updateActivity!): dataWithMessage!
  }

`;

module.exports = activityDefs