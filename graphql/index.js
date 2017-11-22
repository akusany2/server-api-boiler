
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';


const typeDefs = `
input Upload {
  name: String!
  type: String!
  size: Int!
  path: String!
}

type UploadType {
  name: String!
  type: String!
  size: Int!
  path: String!
}

type HelloType {
  name: String!
}
type Mutation {
  uploadFile(file: Upload!): UploadType
  helloFunc(name: String!): HelloType
}

input Test{
  string1: String
}
type TestType{
  string1: String
}
type Query {
  hello(queryTest: Test): TestType
}
`;

const resolvers = {
  Query: {
    hello: (parent, val) => {
      console.log(val)
      return {string1: 'hi'}
    }
  },
  Mutation: {
    uploadFile: (parent, { file }) => {
      console.log(file);
      return file;
    },
    helloFunc: (parent, val) => {
      console.log(val)
      return {name: `Argument you entered is: ${val.name}`};
    }
  }
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});


// in graphiql
// query AnyFunc($name: Test){
//   hello(queryTest: $name){
//     string1
//   }
// }

// query variable
// {"string1": "123asd"}
