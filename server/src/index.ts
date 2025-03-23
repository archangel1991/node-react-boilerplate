// src/index.ts
import Koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env

const app = new Koa();

app.use(serve(path.join(__dirname, '../client/build'))); // Serve static files

app.use(async (ctx) => {
  if (ctx.path === '/api') {
    ctx.body = 'Data from Koa API!';
  } else {
    ctx.body = 'Hello Koa with TypeScript!'; // or serve your static files
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});