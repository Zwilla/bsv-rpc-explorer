### Setup of https://bsv-explorer.com on Ubuntu 16.04 +

    apt update
    apt upgrade
    apt install git python-software-properties software-properties-common nginx gcc g++ make
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    nvm install 10.14.1 ## LTS release of NodeJS as of 2018-11-29, via https://nodejs.org/en/
    npm install pm2 --global
    add-apt-repository ppa:certbot/certbot
    apt update
    apt upgrade
    apt install python-certbot-nginx
    
## Copy content from
### [./btc-explorer.com.conf](./bsv-explorer.com.conf) into `/etc/nginx/sites-available/bsv-explorer.com.conf`

    certbot --nginx -d bsv-explorer.com
    cd /etc/ssl/certs
    openssl dhparam -out dhparam.pem 4096
    cd /home/bitcoin
    git clone https://github.com/zwilla/bsv-rpc-explorer.git
    cd /home/bitcoin/bsv-rpc-explorer
    npm install
    npm run build
## modify your .env file and copy it to /home/bitcoin/.config/bsv-rpc-explorer.env    
    pm2 start bin/www --name "bsv-rpc-explorer"
