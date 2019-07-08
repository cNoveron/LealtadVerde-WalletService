import Koa from 'koa';
import Router from 'koa-router';

const koa = new Koa();
const app = new Router();

app.get('/reward/u=:id', async (ctx) => {
  ctx.body = `Sending payment for user ${ctx.params.id}\n`;
});

koa.use(app.routes());
koa.listen(443);
