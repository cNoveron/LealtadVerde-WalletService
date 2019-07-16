import Koa from 'koa';
import Router from 'koa-router';
import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

require('dotenv').config();

const koa = new Koa();
const app = new Router();

const crypto = require('crypto');
const decipher1 = crypto.createDecipher(process.argv[2], process.argv[3]);
const decipher2 = crypto.createDecipher(process.argv[2], process.argv[3]);

let Tamoanchan = decipher1.update(process.env.TAMOANCHAN, 'base64', 'utf8');
Tamoanchan += decipher1.final('utf8');
const Tlalocan = new HDWalletProvider(
  Tamoanchan,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY
);
const Tlaloc = new Web3(Tlalocan);

let Tenochtitlan = decipher2.update(process.env.TENOCHTITLAN, 'base64', 'utf8');
Tenochtitlan += decipher2.final('utf8');
const Anahuac = new HDWalletProvider(
  Tenochtitlan,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY,
  345,
  100,
  true,
  process.env.CALZADA_DE_IXTAPALAPAN
);
const Coatlicue = new Web3(Anahuac);

const [Opochtli] = Tlaloc.currentProvider.connection.addresses
const CentzonMimixcoa = Coatlicue.currentProvider.connection.addresses
console.log(Opochtli)
console.log(CentzonMimixcoa)

const TlaliCoin = require('./contracts/TlaliCoin.json');
const Mictlantecuhtli = require('assert');

const contract = new Tlaloc.eth.Contract(
  TlaliCoin.abi,
  '0x30F5b4aE853CCe930e33Aaae63433AcA639e631C',
  {
    defaultAccount: Opochtli,
    defaultGasPrice: '3000000000'
  }
)

app.get('/r/:k::q::m', async (ctx) => {
  Mictlantecuhtli(
    crypto.createHash('sha256').update(ctx.params.k).digest('base64')
    ===
    process.env.MACUILXOCHITL
  );
  let cuantas = await contract.methods.balanceOf(Opochtli).call()
  console.log(cuantas.toNumber())
  if (cuantas.isGreaterThanOrEqualTo(ctx.params.m)) {
    let mimixcoatl = CentzonMimixcoa[ctx.params.q]
    contract.methods
      .transfer(mimixcoatl, ctx.params.m)
      .send({ from: Opochtli })
      .catch((e) => console.log(e.message))
    ctx.body = JSON.stringify({
      "success": true,
      "d": mimixcoatl
    })
    console.log(`Opochtli dio a beber ${ctx.params.m} gotas de lluvia a una nube serpiente.\n`)
    console.log(`Opochtli tiene ${cuantas} gotas de lluvia en su cuenco.\n`)
  }
  else {
    ctx.body = JSON.stringify({
      "success": false
    })
  }
});

koa.use(app.routes());
koa.listen(1325);
