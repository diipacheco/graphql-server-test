import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './schema';
import resolvers from './resolvers';

mongoose.connect('mongodb://192.168.99.100:27017/graphql-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
