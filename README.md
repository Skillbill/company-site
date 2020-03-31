company-site
===========

[production company site](https://www.skillbill.it)

# Developoment

```
> docker run --rm --name some-nginx -p 8080:80 -v `pwd`/source:/usr/share/nginx/html:ro nginx:1.17.8
> google-chrome http://localhost:8080
```

# Deploy

```
> rsync -avh source/* root@37.139.16.181:/var/www/html/

```

## PROD SERVER

DIGITAL OCEAN UBUNTU 18.04 - docker - docker-compose - https

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

### HTTPS CONF - version 1

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/html;
    server_name www.skillbill.it;
}
```


### ADD RENEW CERT
```
0 12 * * * /usr/bin/certbot renew --quiet
```


## Develop

    > npm install
    > npm install -g gatsby-cli
    > gatsby develop