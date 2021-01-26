# Skillbill WebSite

## Development

we use [Jekyll](https://jekyllrb.com/) .

### Ruby

[rvm](http://rvm.io/)

```
rvm autolibs packages
rvm install 2.4.0
//cd project folder
rvm use 2.4.0
```

### Jekyll and Bundler:

```
gem install jekyll bundler
```
### start dev server

```
bundle exec jekyll serve --trace --watch
```


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


