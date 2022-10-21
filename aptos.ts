import { AptosAccount } from "aptos";
import moment from "moment";
import fs from "fs";
(async () => {
    let count = 20;
    const accounts: any[] = [];
    for (let i = 0; i < count; i++) {
        let account = new AptosAccount();
        let { address, privateKeyHex: privateKey } = account.toPrivateKeyObject();
        accounts.push({ address, privateKey });
    }
    console.log(accounts);
    let time = moment().format("YYYYMMDDHHmmss");
    let file = `${__dirname}/accounts/APTOS-${time}.json`;
    fs.writeFileSync(file, JSON.stringify(accounts, null, 4));
})();
