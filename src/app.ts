import Fastify from 'fastify';
// import { userRoutes } from './modules/user/user.controller';

export const buildApp = () => {
  const app = Fastify();

  app.get('/ping', async (request, reply) => {
    return 'pong\n'
  })
  

  // app.register(userRoutes, { prefix: '/users' });

  return app;
};
