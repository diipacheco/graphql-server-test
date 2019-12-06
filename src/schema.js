import { gql } from 'apollo-server';

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    done: Boolean
  }

  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    registrateTodo(title: String!, done: Boolean!): Todo
    updateTodo(id: ID!, title: String, done: Boolean): Todo
  }
`;

export default typeDefs;
