
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

type Query {
  hello: String
}
`;

const resolvers = {
  Query: {
    hello: () => 'hi'
  },
  Mutation: {
    uploadFile: (parent, { file }) => {
      console.log(file);
      return file;
    },
    helloFunc: (parent, val) => {
      console.log(val)
      return val;
    }
  }
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
