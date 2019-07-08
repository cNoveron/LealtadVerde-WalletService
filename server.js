import Koa from 'koa';
import Router from 'koa-router';
import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

const koa = new Koa();
const app = new Router();
require('dotenv').config();
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY,
  0,
  10,
  process.env.DERIV_PATH
);
const web3 = new Web3(provider);

app.get('/reward/u=:id', async (ctx) => {
  ctx.body = `Sending payment for user ${ctx.params.id}\n`;
  console.log(web3.currentProvider)
});

koa.use(app.routes());
koa.listen(443);
