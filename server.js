import Koa from 'koa';
import Router from 'koa-router';
import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

const koa = new Koa();
const app = new Router();
require('dotenv').config();
const Tlalocan = new HDWalletProvider(
  process.env.TL,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY
);
const Tlaloc = new Web3(Tlalocan);
const Anahuac = new HDWalletProvider(
  process.env.AHC,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY,
  0,
  10,
  process.env.AHCPTH
);
const Coatlicue = new Web3(Anahuac);

app.get('/reward/u=:id', async (ctx) => {
  ctx.body = `Sending payment for user ${ctx.params.id}\n`;
  let [Opochtli] = Tlaloc.currentProvider.connection.addresses
  let CentzonMimixcoa = Coatlicue.currentProvider.connection.addresses
  console.log(Opochtli)
  console.log(CentzonMimixcoa)
});

koa.use(app.routes());
koa.listen(443);
