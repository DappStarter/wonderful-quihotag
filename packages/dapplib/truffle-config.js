require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purchase install ensure bridge trigger'; 
let testAccounts = [
"0x6007ef17cf74a02ca777d7a7354dda5fd3ed0a37aeaa3efd75e41421a54d8d6e",
"0x6d908c7ff6c00d37ac042a9d39516da980130e8c69fb6081a9c2d9cf0ac04c7c",
"0x32f557b3e8ac33dc72fa536f89f0564e9c86b057a5fcedbd45ca0f74f785f8ee",
"0x357fc8bbf298faa9622334a17f7c2ef21b61a583b130c65aff08b22c3e0e82e4",
"0xc71ed81ce13ce523ec881b0ce5a946cba2e3229c886081dd440cbc937009d153",
"0x9ea80ae8283cb923b7afaefc3114427f4ac91a695e10aa4d4cfd2c120d4956ef",
"0x418e45c5ed13ee6cc9b1ac8e6f0eff92c5134770591df7616b37beb3ac56b7dc",
"0x07396afd704c794fccf8a421056d56d9acb3c548160537b97dfe1327821c7dd9",
"0xb3a580b9165b92b195cf2a92b7809472dc67c5bc5a186c22dbc27c2cb5e7d060",
"0xd45391805d3a87a9964197335d8862204871d6bbebfd26cad36a79e7f466ec8c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
