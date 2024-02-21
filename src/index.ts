import { Elysia } from "elysia";
import postsRoutes from './routes/pokemon';

const app = new Elysia()
app
  .group('/pokemon', (app) => app.use(postsRoutes))
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
