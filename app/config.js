var fs = require('fs');
var crypto = require('crypto');
var url = require('url');
var coins = require("./coins.js");
var credentials = require("./credentials.js");

var currentCoin = process.env.BSVEXP_COIN || "BSV";

var rpcCred = credentials.rpc;

if (rpcCred.cookie && !rpcCred.username && !rpcCred.password && fs.existsSync(rpcCred.cookie))
{
    console.log(`Loading RPC cookie file: ${rpcCred.cookie}`);

    [rpcCred.username, rpcCred.password] = fs.readFileSync(rpcCred.cookie).toString().split(':', 2);

    if (!rpcCred.password)
    {
        throw new Error(`Cookie file ${rpcCred.cookie} in unexpected format`);
    }
} else {
    rpcCred.host = process.env.BSVEXP_BITCOIND_HOST;
    rpcCred.port = process.env.BSVEXP_BITCOIND_PORT;
    rpcCred.username = process.env.BSVEXP_BITCOIND_USER;
    rpcCred.password = process.env.BSVEXP_BITCOIND_PASS;
    console.log('B_HOST', rpcCred.host);
    console.log('B_PORT', rpcCred.port);

}

var cookieSecret = process.env.BSVEXP_COOKIE_SECRET || (rpcCred.password && crypto.createHmac('sha256', JSON.stringify(rpcCred)).update('btc-rpc-explorer-cookie-secret').digest('hex')) || "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f";
var electrumXServerUriStrings = (process.env.BSVEXP_ELECTRUMX_SERVERS || "").split(',').filter(Boolean);
var electrumXServers = [];

for (var i = 0; i < electrumXServerUriStrings.length; i++)
{
    var uri = url.parse(electrumXServerUriStrings[i]);

    electrumXServers.push({
        protocol: uri.protocol.substring(0, uri.protocol.length - 1),
        host: uri.hostname,
        port: parseInt(uri.port)
    });
}

module.exports = {
    cookieSecret: cookieSecret,
    demoSite: !!process.env.BSVEXP_DEMO,
    coin: currentCoin,

    rpcBlacklist:
        process.env.BSVEXP_RPC_ALLOWALL ? [] : process.env.BSVEXP_RPC_BLACKLIST ? process.env.BSVEXP_RPC_BLACKLIST.split(',').filter(Boolean)
            : [
                "addnode",
                "backupwallet",
                "bumpfee",
                "clearbanned",
                "createmultisig",
                "disconnectnode",
                "dumpprivkey",
                "dumpwallet",
                "encryptwallet",
                "generate",
                "generatetoaddress",
                "getaccountaddrss",
                "getaddressesbyaccount",
                "getbalance",
                "getnewaddress",
                "getrawchangeaddress",
                "getreceivedbyaccount",
                "getreceivedbyaddress",
                "gettransaction",
                "getunconfirmedbalance",
                "getwalletinfo",
                "importaddress",
                "importmulti",
                "importprivkey",
                "importprunedfunds",
                "importpubkey",
                "importwallet",
                "keypoolrefill",
                "listaccounts",
                "listaddressgroupings",
                "listlockunspent",
                "listreceivedbyaccount",
                "listreceivedbyaddress",
                "listsinceblock",
                "listtransactions",
                "listunspent",
                "listwallets",
                "lockunspent",
                "logging",
                "move",
                "preciousblock",
                "pruneblockchain",
                "removeprunedfunds",
                "rescanblockchain",
                "savemempool",
                "sendfrom",
                "sendmany",
                "sendtoaddress",
                "setaccount",
                "setban",
                "setnetworkactive",
                "signmessage",
                "signmessagewithprivatekey",
                "signrawtransaction",
                "stop",
                "submitblock",
                "verifychain",
                "walletlock",
                "walletpassphrase",
                "walletpassphrasechange",

                "setexcessiveblock",
                "abandontransaction",
                "addmultisigaddress",
                "backupwallet",
                "dumpprivkey",
                "dumpwallet",
                "encryptwallet",
                "getaccount",
                "getaccountaddress",
                "getaddressesbyaccount",
                "getbalance",
                "getnewaddress",
                "getrawchangeaddress",
                "getreceivedbyaccount",
                "getreceivedbyaddress",
                "gettransaction",
                "getunconfirmedbalance",
                "getwalletinfo",
                "importaddress",
                "importmulti",
                "importprivkey",
                "importprunedfunds",
                "importpubkey",
                "importwallet",
                "keypoolrefill",
                "listaccounts",
                "listaddressgroupings",
                "listlockunspent",
                "listreceivedbyaccount",
                "listreceivedbyaddress",
                "listsinceblock",
                "listtransactions",
                "listunspent",
                "listwallets",
                "lockunspent",
                "move",
                "removeprunedfunds",
                "sendfrom",
                "sendmany",
                "sendtoaddress",
                "setaccount",
                "settxfee",
                "signmessage",
            ],

    electrumXServers: electrumXServers,

    site: {
        blockTxPageSize: 20,
        addressTxPageSize: 20,
        txMaxInput: 15,
        browseBlocksPageSize: 20
    },

    credentials: credentials,

    siteTools: [
        {
            name: "Node Status",
            url: "/node-status",
            desc: "Summary of this Bitcoin SV node: version, network, uptime, etc.",
            fontawesome: "fas fa-broadcast-tower"
        },
        {
            name: "Peers",
            url: "/peers",
            desc: "Detailed info about the peers connected to this node.",
            fontawesome: "fas fa-sitemap"
        },

        {
            name: "BSV Blocks",
            url: "/blocks",
            desc: "Browse all blocks in the Bitcoin SV blockchain.",
            fontawesome: "fas fa-cubes"
        },
        {
            name: "TX Stats",
            url: "/tx-stats",
            desc: "See graphs of total transaction volume and transaction rates.",
            fontawesome: "fas fa-chart-bar"
        },

        {
            name: "Mempool",
            url: "/mempool-summary",
            desc: "Detailed summary of the current mempool for this BSV node.",
            fontawesome: "fas fa-clipboard-list"
        },
        {
            name: "Unconfirmed TX",
            url: "/unconfirmed-tx",
            desc: "Browse unconfirmed/pending transactions.",
            fontawesome: "fas fa-unlock-alt"
        },
        {
            name: "RPC Browser",
            url: "/rpc-browser",
            desc: "Browse the RPC functionality of this node. See docs and execute commands.",
            fontawesome: "fas fa-book"
        },
        {
            name: "RPC Terminal",
            url: "/rpc-terminal",
            desc: "Directly execute RPCs against this node.",
            fontawesome: "fas fa-terminal"
        },
        {
            name: "Broadcast Transaction",
            url: "/rpc-browser?method=sendrawtransaction",
            desc: "send a raw bitcoin sv transaction",
            fontawesome: "fas fa-wallet"
        },

        {
            name: (coins[currentCoin].name + " Fun"),
            url: "/fun",
            desc: "See fun/interesting historical blockchain data.",
            fontawesome: "fas fa-certificate"
        }
    ],

    donationAddresses:{
        coins:["BSV"],
        sites:{"BSV":"https://github.com/Zwilla/bsv-rpc-explorer"},
        "BSV":{address:"1PYZ7nodShkFgR7WvM6dXbZ3oa3bSRkVUi"},
    },

    headerDropdownLinks: {
        title:"Related Sites",
        links:[
            {name: "Bitcoin SV Explorer", url:"https://bsv-explorer.com", imgUrl:"/img/logo/bsv.png"},
            {name: "Bitcoin SV Project", url:"https://bitcoinsv.io", imgUrl:"/img/logo/bsv.png"},
            {name: "Bitcoin SV Academy", url:"http://bitcoinsv.academy/links", imgUrl:"/img/logo/bsv.png"},
            {name: "BSV Microblogging Playground", url:"https://unwriter.github.io/datapay/example/playground", imgUrl:"/img/logo/bsv.png"},
        ]
    }
};


