Bitcoin SV version v0.1.1.0-12281d2-dev

Usage:
  bitcoind [options]                     Start Bitcoin SV Daemon

Options:

  -?
       Print this help message and exit

  -version
       Print version and exit

  -alertnotify=<cmd>
       Execute command when a relevant alert is received or we see a really
       long fork (%s in cmd is replaced by message)

  -blocknotify=<cmd>
       Execute command when the best block changes (%s in cmd is replaced by
       block hash)

  -assumevalid=<hex>
       If this block is in the chain assume that it and its ancestors are valid
       and potentially skip their script verification (0 to verify all,
       default:
       000000000000000000e45ad2fbcc5ff3e85f0868dd8f00ad4e92dffabe28f8d2,
       testnet:
       0000000000327972b8470c11755adf8f4319796bafae01f5a6650490b98a17db)

  -conf=<file>
       Specify configuration file (default: bitcoin.conf)

  -daemon
       Run in the background as a daemon and accept commands

  -datadir=<dir>
       Specify data directory

  -dbcache=<n>
       Set database cache size in megabytes (4 to 16384, default: 450)

  -loadblock=<file>
       Imports blocks from external blk000??.dat file on startup

  -maxorphantx=<n>
       Keep at most <n> unconnectable transactions in memory (default: 100)

  -maxmempool=<n>
       Keep the transaction memory pool below <n> megabytes (default: 300)

  -mempoolexpiry=<n>
       Do not keep transactions in the mempool longer than <n> hours (default:
       336)

  -persistmempool
       Whether to save the mempool on shutdown and load on restart (default: 1)

  -blockreconstructionextratxn=<n>
       Extra transactions to keep in memory for compact block reconstructions
       (default: 100)

  -par=<n>
       Set the number of script verification threads (-16 to 16, 0 = auto, <0 =
       leave that many cores free, default: 0)

  -pid=<file>
       Specify pid file (default: bitcoind.pid)

  -prune=<n>
       Reduce storage requirements by enabling pruning (deleting) of old
       blocks. This allows the pruneblockchain RPC to be called to
       delete specific blocks, and enables automatic pruning of old
       blocks if a target size in MiB is provided. This mode is
       incompatible with -txindex and -rescan. Warning: Reverting this
       setting requires re-downloading the entire blockchain. (default:
       0 = disable pruning blocks, 1 = allow manual pruning via RPC,
       >550 = automatically prune block files to stay under the
       specified target size in MiB)

  -reindex-chainstate
       Rebuild chain state from the currently indexed blocks

  -reindex
       Rebuild chain state and block index from the blk*.dat files on disk

  -sysperms
       Create new files with system default permissions, instead of umask 077
       (only effective with disabled wallet functionality)

  -txindex
       Maintain a full transaction index, used by the getrawtransaction rpc
       call (default: 0)

  -usecashaddr
       Use Cash Address for destination encoding instead of base58 (activate by
       default on Jan, 14)

Connection options:

  -addnode=<ip>
       Add a node to connect to and attempt to keep the connection open

  -banscore=<n>
       Threshold for disconnecting misbehaving peers (default: 100)

  -bantime=<n>
       Number of seconds to keep misbehaving peers from reconnecting (default:
       86400)

  -bind=<addr>
       Bind to given address and always listen on it. Use [host]:port notation
       for IPv6

  -connect=<ip>
       Connect only to the specified node(s); -noconnect or -connect=0 alone to
       disable automatic connections

  -discover
       Discover own IP addresses (default: 1 when listening and no -externalip
       or -proxy)

  -dns
       Allow DNS lookups for -addnode, -seednode and -connect (default: 1)

  -dnsseed
       Query for peer addresses via DNS lookup, if low on addresses (default: 1
       unless -connect/-noconnect)

  -externalip=<ip>
       Specify your own public address

  -forcednsseed
       Always query for peer addresses via DNS lookup (default: 1)

  -listen
       Accept connections from outside (default: 1 if no -proxy or
       -connect/-noconnect)

  -listenonion
       Automatically create Tor hidden service (default: 1)

  -maxconnections=<n>
       Maintain at most <n> connections to peers (default: 125)

  -maxreceivebuffer=<n>
       Maximum per-connection receive buffer, <n>*1000 bytes (default: 5000)

  -maxsendbuffer=<n>
       Maximum per-connection send buffer, <n>*1000 bytes (default: 1000)

  -maxtimeadjustment
       Maximum allowed median peer time offset adjustment. Local perspective of
       time may be influenced by peers forward or backward by this
       amount. (default: 4200 seconds)

  -broadcastdelay=<n>
       Set inventory broadcast delay duration in millisecond(min: 0, max:
       50000)

  -onion=<ip:port>
       Use separate SOCKS5 proxy to reach peers via Tor hidden services
       (default: -proxy)

  -onlynet=<net>
       Only connect to nodes in network <net> (ipv4, ipv6 or onion)

  -permitbaremultisig
       Relay non-P2SH multisig (default: 1)

  -peerbloomfilters
       Support filtering of blocks and transaction with bloom filters (default:
       1)

  -port=<port>
       Listen for connections on <port> (default: 8333 or testnet: 18333)

  -proxy=<ip:port>
       Connect through SOCKS5 proxy

  -proxyrandomize
       Randomize credentials for every proxy connection. This enables Tor
       stream isolation (default: 1)

  -seednode=<ip>
       Connect to a node to retrieve peer addresses, and disconnect

  -timeout=<n>
       Specify connection timeout in milliseconds (minimum: 1, default: 5000)

  -torcontrol=<ip>:<port>
       Tor control port to use if onion listening enabled (default:
       127.0.0.1:9051)

  -torpassword=<pass>
       Tor control port password (default: empty)

  -upnp
       Use UPnP to map the listening port (default: 0)

  -whitebind=<addr>
       Bind to given address and whitelist peers connecting to it. Use
       [host]:port notation for IPv6

  -whitelist=<IP address or network>
       Whitelist peers connecting from the given IP address (e.g. 1.2.3.4) or
       CIDR notated network (e.g. 1.2.3.0/24). Can be specified multiple
       times. Whitelisted peers cannot be DoS banned and their
       transactions are always relayed, even if they are already in the
       mempool, useful e.g. for a gateway

  -whitelistrelay
       Accept relayed transactions received from whitelisted peers even when
       not relaying transactions (default: 1)

  -whitelistforcerelay
       Force relay of transactions from whitelisted peers even if they violate
       local relay policy (default: 1)

  -maxuploadtarget=<n>
       Tries to keep outbound traffic under the given target (in MiB per 24h),
       0 = no limit (default: 0)

Wallet options:

  -disablewallet
       Do not load the wallet and disable wallet RPC calls

  -keypool=<n>
       Set key pool size to <n> (default: 1000)

  -fallbackfee=<amt>
       A fee rate (in BCH/kB) that will be used when fee estimation has
       insufficient data (default: 0.0002)

  -mintxfee=<amt>
       Fees (in BCH/kB) smaller than this are considered zero fee for
       transaction creation (default: 0.00001)

  -paytxfee=<amt>
       Fee (in BCH/kB) to add to transactions you send (default: 0.00)

  -rescan
       Rescan the block chain for missing wallet transactions on startup

  -salvagewallet
       Attempt to recover private keys from a corrupt wallet on startup

  -spendzeroconfchange
       Spend unconfirmed change when sending transactions (default: 1)

  -txconfirmtarget=<n>
       If paytxfee is not set, include enough fee so transactions begin
       confirmation on average within n blocks (default: 6)

  -usehd
       Use hierarchical deterministic key generation (HD) after BIP32. Only has
       effect during wallet creation/first start (default: 1)

  -upgradewallet
       Upgrade wallet to latest format on startup

  -wallet=<file>
       Specify wallet file (within data directory) (default: wallet.dat)

  -walletbroadcast
       Make the wallet broadcast transactions (default: 1)

  -walletnotify=<cmd>
       Execute command when a wallet transaction changes (%s in cmd is replaced
       by TxID)

  -zapwallettxes=<mode>
       Delete all wallet transactions and only recover those parts of the
       blockchain through -rescan on startup (1 = keep tx meta data e.g.
       account owner and payment request information, 2 = drop tx meta
       data)

ZeroMQ notification options:

  -zmqpubhashblock=<address>
       Enable publish hash block in <address>

  -zmqpubhashtx=<address>
       Enable publish hash transaction in <address>

  -zmqpubrawblock=<address>
       Enable publish raw block in <address>

  -zmqpubrawtx=<address>
       Enable publish raw transaction in <address>

Debugging/Testing options:

  -uacomment=<cmt>
       Append comment to the user agent string

  -debug=<category>
       Output debugging information (default: 0, supplying <category> is
       optional). If <category> is not supplied or if <category> = 1,
       output all debugging information.<category> can be: net, tor,
       mempool, http, bench, zmq, db, rpc, estimatefee, addrman,
       selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej,
       libevent, coindb, leveldb, txnprop, txnsrc.

  -debugexclude=<category>
       Exclude debugging information for a category. Can be used in conjunction
       with -debug=1 to output debug logs for all categories except one
       or more specified categories.

  -help-debug
       Show all debugging options (usage: --help -help-debug)

  -logips
       Include IP addresses in debug output (default: 0)

  -logtimestamps
       Prepend debug output with timestamp (default: 1)

  -excessutxocharge=<amt>
       Fees (in BCH/kB) to charge per utxo created forrelaying, and mining
       (default: 0.00)

  -minrelaytxfee=<amt>
       Fees (in BCH/kB) smaller than this are considered zero fee for relaying,
       mining and transaction creation (default: 0.00001)

  -maxtxfee=<amt>
       Maximum total fees (in BCH) to use in a single wallet transaction or raw
       transaction; setting this too low may abort large transactions
       (default: 0.10)

  -printtoconsole
       Send trace/debug info to console instead of debug.log file

  -shrinkdebugfile
       Shrink debug.log file on client startup (default: 1 when no -debug)

Chain selection options:

  -testnet
       Use the test chain

  -regtest
       Enter regression test mode, which uses a special chain in which blocks
       can be solved instantly. This is intended for regression testing
       tools and app development.

  -stn
       Use the Scaling Test Network

Node relay options:

  -excessiveblocksize=<n>
       Set the maximum block size in bytes we will accept from any source. This
       is the effective block size hard limit (default: 128000000)

  -bytespersigop
       Equivalent bytes per sigop in transactions for relay and mining
       (default: 20)

  -datacarrier
       Relay and mine data carrier transactions (default: 1)

  -datacarriersize
       Maximum size of data in data carrier transactions we relay and mine
       (default: 223)

Block creation options:

  -blockmaxsize=<n>
       Set maximum block size in bytes we will mine (default: 32000000). Must
       be less than or equal the hard maximum block size limit as set by
       -excessiveblocksize

  -blockprioritypercentage=<n>
       Set maximum percentage of a block reserved to high-priority/low-fee
       transactions (default: 5)

  -blockmintxfee=<amt>
       Set lowest fee rate (in BCH/kB) for transactions to be included in block
       creation. (default: 0.00001)

RPC server options:

  -server
       Accept command line and JSON-RPC commands

  -rest
       Accept public REST requests (default: 0)

  -rpcbind=<addr>
       Bind to given address to listen for JSON-RPC connections. Use
       [host]:port notation for IPv6. This option can be specified
       multiple times (default: bind to all interfaces)

  -rpccookiefile=<loc>
       Location of the auth cookie (default: data dir)

  -rpcuser=<user>
       Username for JSON-RPC connections

  -rpcpassword=<pw>
       Password for JSON-RPC connections

  -rpcauth=<userpw>
       Username and hashed password for JSON-RPC connections. The field
       <userpw> comes in the format: <USERNAME>:<SALT>$<HASH>. A
       canonical python script is included in share/rpcuser. The client
       then connects normally using the
       rpcuser=<USERNAME>/rpcpassword=<PASSWORD> pair of arguments. This
       option can be specified multiple times

  -rpcport=<port>
       Listen for JSON-RPC connections on <port> (default: 8332 or testnet:
       18332)

  -rpcallowip=<ip>
       Allow JSON-RPC connections from specified source. Valid for <ip> are a
       single IP (e.g. 1.2.3.4), a network/netmask (e.g.
       1.2.3.4/255.255.255.0) or a network/CIDR (e.g. 1.2.3.4/24). This
       option can be specified multiple times

  -rpcthreads=<n>
       Set the number of threads to service RPC calls (default: 4)

  -rpccorsdomain=value
       Domain from which to accept cross origin requests (browser enforced)

  -invalidcsinterval=<n>
       Set the time limit on the reception of invalid message checksums from a
       single node in milliseconds (default: 500ms)

  -invalidcsfreq=<n>
       Set the limit on the number of invalid checksums received over a given
       time period from a single node  (default: 100)

  -invalidheaderinterval=<n>
       Set the time limit on the transmission of message headers from the local
       node in milliseconds (default: 500ms)

  -invalidheaderfreq=<n>
       Set the limit on the number of message headers transmitted from the
       local node over a given time period (default: 2000)