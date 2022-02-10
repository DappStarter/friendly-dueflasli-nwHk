require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain modify grace cricket blue trade'; 
let testAccounts = [
"0x11fa6553dea8b7055498036f304dabd8d879d973219f98fa00e3d307e23c3561",
"0x55b037de5e3dcb6493d4736428d14f8c741bb5d019a582d39a1a304bc873f26a",
"0x996a80b89d6f383d8eedf55980066890c1a24683f3c2c4141a16d01edd7f5aff",
"0xd34ceef67437553e6cfb70de1b5200198b16098b1ed28a1680608dda871c4b86",
"0xe7d91f610e429855cbeacd7eb29f0a50e32f135ae9a0be6e04550f0dec5d71d9",
"0x8229caf20574498b06cf143824926c37a3d112f82d6584c9be623f631a6ea60a",
"0xf6290800220341b8b08610a7f86142b50b0b19b346eb1932ebdb10db74d40e6c",
"0x2d979296a541494782bccd222bdb04b9b0647057a71a5b67f0a75eb513044e7b",
"0xc75ec19bb985a7cb2dd19bccac93f87cfc26fad4b28f4b891edf1834d3645e0e",
"0xa187645d2c2ce9c05427a4eeec6030b6d0b933539fb563e56fae3833b0229a58"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


