const assert = require('assert')

const ganache = require('ganache-cli')

const Web3 = require('web3')

const web3 = new Web3(ganache.provider())
const { interface,byteCode } = require("../compile");

let accounts;
let inbox;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts()
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: byteCode,
      arguments: ['check']
    })
    .send({ from: accounts[0], gas: '1000000' });
})

describe('Inbox',() => {
    it('deploys a contract', () => {
        console.log("accounts",accounts)
        console.log("inbox",inbox)
    })
})