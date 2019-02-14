# BSV RPC Explorer

Simple, database-free Bitcoin SV blockchain explorer, via RPC. Built with Node.js, express, bootstrap-v4.

This tool is intended to be a simple, self-hosted explorer for the Bitcoin SV blockchain, driven by RPC calls to your own bitcoind node. This tool is easy to run but currently lacks features compared to database-backed explorers.

I built this tool because I wanted to use it myself. Whatever reasons one might have for running a full node (trustlessness, technical curiosity, supporting the network, etc) it's helpful to appreciate the "fullness" of your node. With this explorer, you can not only explore the blockchain (in the traditional sense of the term "explorer"), but also explore the functional capabilities of your own node.

Live demos are available at:

* BSV: https://bsv-explorer.com
* BSV: http://whatsonchain.com
* BSV: https://bsvexplorer.io
* BSV: https://svblox.com

# Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search supports transactions, blocks, addresses
* Optional transaction history for addresses by querying configurable ElectrumX servers
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal
* Currently supports BSV (support for any Bitcoin-RPC-protocol-compliant coin can be added easily)

# Getting started

The below instructions are geared toward BSV, but can be adapted easily to other coins.

## Prerequisites

1. Install and run a full, archiving node - [instructions](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/README.md). [download](https://download.bitcoinsv.io/bitcoinsv/) Ensure that your bitcoin node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the Bitcoin network.
3. "Recent" version of Node.js (8+ recommended).

## Instructions

About your server here: [./docs/Server_Setup.md](./docs/Server_Setup.md)

```bash
git clone https://github.com/Zwilla/bsv-rpc-explorer.git
cd bsv-rpc-explorer
git pull
npm run build
npm install -g bsv-rpc-explorer
bsv-rpc-explorer
```

If you're running on mainnet with the default datadir and port, this Should Just Work.
Open [http://127.0.0.1:3002/](http://127.0.0.1:3002/) to view the explorer.

You may set configuration options in a `.env` file or using CLI args.
See [configuration](#configuration) for details.

### Configuration

Configuration options may be passed as environment variables
or by creating an env file at `~/.config/btc-rpc-explorer.env`
or at `.env` in the working directory.
See [.env-sample](.env-sample) for a list of the options and details for formatting `.env`.

You may also pass options as CLI arguments, for example:

```bash
bsv-rpc-explorer --port 8080 --bitcoind-port 18443 --bitcoind-cookie ~/.bitcoin/regtest/.cookie
```

See `bsv-rpc-explorer --help` for the full list of CLI options.

## Run via Docker

1. `docker build -t bsv-rpc-explorer .`
2. `docker run -p 3002:3002 -it bsv-rpc-explorer`

# Donate

Any support for continued development of this tool is appreciated!

* [Bitcoin](bitcoin:1PYZ7nodShkFgR7WvM6dXbZ3oa3bSRkVUi): 1PYZ7nodShkFgR7WvM6dXbZ3oa3bSRkVUi

![Bitcoin SV Donation QR Code](/public/img/qr-bsv.png)

* [Bitcoin](bitcoin:3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe): 3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe

![Bitcoin Donation QR Code](/public/img/qr-btc.png)

* [Litecoin](litecoin:ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i): ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i

![Litecoin Donation QR Code](/public/img/qr-ltc.png)

