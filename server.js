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

const achtopa = parseInt(process.argv[4], 10)
const xoco = parseInt(process.argv[5], 10)
const coameh = xoco - achtopa

let Tamoanchan = decipher1.update(process.env.TAMOANCHAN, 'base64', 'utf8')
Tamoanchan += decipher1.final('utf8')
const Tlalocan = new HDWalletProvider(
  Tamoanchan,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY
)
const Tlaloc = new Web3(Tlalocan)

let Tenochtitlan = decipher2.update(process.env.TENOCHTITLAN, 'base64', 'utf8')
Tenochtitlan += decipher2.final('utf8')
const Anahuac = new HDWalletProvider(
  Tenochtitlan,
  "https://ropsten.infura.io/v3/" + process.env.INFURA_APIKEY,
  achtopa,
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

const contract = new Tlaloc.eth.Contract(
  TlaliCoin.abi,
  '0x30F5b4aE853CCe930e33Aaae63433AcA639e631C',
  {
    defaultAccount: Opochtli,
    defaultGasPrice: Tlaloc.utils.toWei('10', 'shannon')
  }
)

app.get(`/:k/r/${achtopa}-${xoco}/:tlapouali/:atsintleh`, async (tlahtoamatl) => {
  if (
    crypto.createHash('sha256').update(tlahtoamatl.params.k).digest('base64')
    ===
    process.env.MACUILXOCHITL
  )
  try {
    let apiastli = (await contract.methods.balanceOf(Opochtli).call()).toNumber()

    if (apiastli >= tlahtoamatl.params.atsintleh) {

      let mimixcoatl = CentzonMimixcoa[tlahtoamatl.params.tlapouali]
      
      contract.methods
        .transfer(mimixcoatl, tlahtoamatl.params.atsintleh)
        .send({ from: Opochtli, })
        .catch((e) => console.log(e.message))
      
      tlahtoamatl.body = JSON.stringify({ success: true, d: mimixcoatl })

      console.log(`${tlahtoamatl.method} ${tlahtoamatl.url}`)
      console.log(`Cuenta         : ${mimixcoatl}`)
      console.log(`Recompensa     : ${tlahtoamatl.params.atsintleh} TLALI`)
      console.log(`Balance Inicial: ${apiastli} TLALI`)
      console.log(`Balance Final  : ${apiastli - tlahtoamatl.params.atsintleh} TLALI\n`)

      // console.log(`Opochtli dio a beber ${tlahtoamatl.params.atsintleh} gotas de lluvia a una nube serpiente.\n`)
      // console.log(`Tenía  ${apiastli} gotas de lluvia en su cuenco.\n`)
      // console.log(`Tendrá ${apiastli - tlahtoamatl.params.atsintleh} gotas de lluvia en su cuenco.\n`)
    }
    else {
      tlahtoamatl.body = JSON.stringify({ "success": false })
    }
  }
  catch (error) {
    tlahtoamatl.body = JSON.stringify({ "success": false, "e": error.message })
  }
})

koa.use(app.routes())
koa.listen(process.argv[6], '0.0.0.0')