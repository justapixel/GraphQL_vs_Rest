const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./controllers/resolvers')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI_GRAP, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});



server.start({port: 3334});