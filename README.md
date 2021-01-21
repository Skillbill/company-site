# Skillbill WebSite

## Usage

### Basic Usage

## For Development

- `npm install`
- `npm start`


## PROD

### NGINX GOOGLE TAG

/etc/nginx/conf.d/www.skillbill.it.conf

```
sub_filter   <head>
                    "<head>
                        <!-- Global site tag (gtag.js) - Google Analytics -->
                        <script async src='https://www.googletagmanager.com/gtag/js?id=XXXXXXXXX'></script>
                        <script>
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'XXXXXXXXX');
                        </script>
                   ";
                sub_filter_once on;

```


