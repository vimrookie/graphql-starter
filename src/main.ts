import { resolvers } from './resolvers';
import { ApolloServer } from 'apollo-server';
import { DateTimeMock, EmailAddressMock, UnsignedIntMock } from 'graphql-scalars';
import { environment } from './environment';
import { addMockUsersAsync, mongoDbProvider } from './mongodb.provider';
import * as typeDefs from './type-defs.graphql';

(async function bootstrapAsync(): Promise<void> {
  await mongoDbProvider.connectAsync(environment.mongoDb.databaseName);
  await addMockUsersAsync(); // TODO: Remove in PROD.

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: environment.apollo.introspection,
    mockEntireSchema: false, // TODO: Remove in PROD.
    mocks: {
      DateTime: DateTimeMock,
      EmailAddress: EmailAddressMock,
      UnsignedInt: UnsignedIntMock,
    }, // TODO: Remove in PROD.
    playground: environment.apollo.playground,
  });

  server
    .listen(environment.port)
    .then(({ url }) => console.log(`Server ready at ${url}. `));

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(async () => {
      server.stop();
      await mongoDbProvider.closeAsync();
    });
  }
})();