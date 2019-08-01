import Koa from 'koa'
import Router from 'koa-router'
import HDWalletProvider from 'truffle-hdwallet-provider'
import Web3 from 'web3'

require('dotenv').config()

const koa = new Koa()
const app = new Router()

const crypto = require('crypto')
const decipher1 = crypto.createDecipher(process.argv[2], process.argv[3])
const decipher2 = crypto.createDecipher(process.argv[2], process.argv[3])

const achtopacoatl = parseInt(process.argv[4], 10)
const xococoatl = parseInt(process.argv[5], 10)
const coameh = xococoatl - achtopacoatl

let Tamoanchan = decipher1.update(process.env.TAMOANCHAN, 'base64', 'utf8')
Tamoanchan += decipher1.final('utf8')
const Tlalocan = new HDWalletProvider(
  Tamoanchan,
  process.env.OMEPATONALLI
)
const Tlaloc = new Web3(Tlalocan)

let Tenochtitlan = decipher2.update(process.env.TENOCHTITLAN, 'base64', 'utf8')
Tenochtitlan += decipher2.final('utf8')
const Anahuac = new HDWalletProvider(
  Tenochtitlan,
  process.env.OMEPATONALLI,
  achtopacoatl,
  coameh + 1,
  false,
  process.env.CALZADA_DE_IXTAPALAPAN
)
const Coatlicue = new Web3(Anahuac)

const [Opochtli] = Tlaloc.currentProvider.connection.addresses
const CentzonMimixcoa = Coatlicue.currentProvider.connection.addresses
console.log(Opochtli)
console.log(CentzonMimixcoa)

const TlaliCoin = require('./contracts/TlaliCoin.json')
const Mictlantecuhtli = require('assert');

const contract = new Tlaloc.eth.Contract(
  TlaliCoin.abi,
  '0x30F5b4aE853CCe930e33Aaae63433AcA639e631C',
  {
    defaultAccount: Opochtli,
    defaultGasPrice: Tlaloc.utils.toWei('20', 'shannon')
  }
)

app.get(`/:patolli/r/${achtopacoatl}-${xococoatl}/:coatl/:atsintleh`, async (tlahtoamatl) => {
  try {
    let { atsintleh, coatl, patolli } = tlahtoamatl.params
    Mictlantecuhtli(
      crypto.createHash('sha256').update(patolli).digest('base64')
      ===
      process.env.MACUILXOCHITL
    )
    
    let apiastli = (await contract.methods.balanceOf(Opochtli).call()).toNumber()    
    Mictlantecuhtli(apiastli >= atsintleh)

    let tonalli = coatl - achtopacoatl
    Mictlantecuhtli(tonalli >= 0)

    let mimixcoatl = CentzonMimixcoa[tonalli]
    
    contract.methods
      .transfer(mimixcoatl, atsintleh)
      .send({ from: Opochtli, })
      .catch((e) => console.log(e.message))
    
    tlahtoamatl.body = JSON.stringify({ success: true, d: mimixcoatl })
    
    console.log(`${tlahtoamatl.method} ${tlahtoamatl.url}`)
    console.log(`PrimeraSerpiente : ${achtopacoatl}`)
    console.log(`Serpiente        : ${coatl}`)
    console.log(`Día              : ${tonalli}`)
    console.log(`NubeSerpiente    : ${mimixcoatl}`)
    console.log(`Lluvia           : ${atsintleh} TLALI`)
    console.log(`Cántaro          : ${apiastli} TLALI`)
    console.log(`Disponible       : ${apiastli - atsintleh} TLALI\n`)

    // console.log(`Opochtli dio a beber ${tlahtoamatl.params.atsintleh} gotas de lluvia a una nube serpiente.\n`)
    // console.log(`Tenía  ${apiastli} gotas de lluvia en su cuenco.\n`)
    // console.log(`Tendrá ${apiastli - tlahtoamatl.params.atsintleh} gotas de lluvia en su cuenco.\n`)    
  }
  catch (error) {
    tlahtoamatl.body = JSON.stringify({ "success": false, "e": error.message })
  }
})

koa.use(app.routes())
koa.listen(process.argv[6], '0.0.0.0')