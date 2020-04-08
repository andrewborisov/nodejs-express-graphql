const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers.js');

const typeDefs = importSchema('./src/schema.graphql');

const schema = buildSchema(typeDefs);

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
});
server.on('error', console.error);
