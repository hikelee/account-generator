import { Keypair } from "@solana/web3.js";
import fs from "fs";
import bs58 from "bs58";
import moment from "moment";
(async () => {
    let count = 20;
    const accounts: any[] = [];
    for (let i = 0; i < count; i++) {
        const keypair = Keypair.generate();
        let address = keypair.publicKey.toBase58();
        let privateKey = bs58.encode(keypair.secretKey);
        accounts.push({ address, privateKey });
    }
    console.log(accounts);
    let time = moment().format("YYYYMMDDHHmmss");
    let file = `${__dirname}/accounts/SOLANA-${time}.json`;
    fs.writeFileSync(file, JSON.stringify(accounts, null, 4));
})();
