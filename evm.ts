const Web3 = require("web3");
import fs from "fs";
const web3 = new Web3("https://rinkeby.infura.io");
import moment from "moment";
(async () => {
    let count = 20;
    const accounts: any[] = [];
    for (let i = 0; i < count; i++) {
        let { address, privateKey } = web3.eth.accounts.create();
        accounts.push({ address, privateKey });
    }
    console.log(accounts);
    let time = moment().format("YYYYMMDDHHmmss");
    let file = `${__dirname}/accounts/EVM-${time}.json`;
    fs.writeFileSync(file, JSON.stringify(accounts, null, 4));
})();
