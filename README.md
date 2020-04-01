company-site
===========

[production company site](https://www.skillbill.it)

## Prod Server

DIGITAL OCEAN UBUNTU 18.04 - https

```shell
apt-get update
apt-get install nginx
add-apt-repository ppa:certbot/certbot
apt-get update
apt-get install python-certbot-nginx
rm /etc/nginx/sites-enabled/*
#HTTPS CONF - version 1
vi /etc/nginx/conf.d/intranet2.skillbill.net.conf 
nginx -t && nginx -s reload
certbot --nginx -d intranet2.skillbill.net
crontab -e
````

### HTTPS CONF - version 1

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    server_name www.skillbill.it;
}
```

### Add renew cert
```
0 12 * * * /usr/bin/certbot renew --quiet
```


### Develop

    > npm install
    > npm install -g gatsby-cli
    > gatsby develop
