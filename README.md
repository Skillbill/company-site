Skillbill WebSite
=================

[![buddy pipeline](https://app.buddy.works/skillbill-bw/company-site/pipelines/pipeline/253029/badge.svg?token=107d3bbbb60ecabcdb08e0c4f842888977cc5d7b269e84936f8b8074747daf78 "buddy pipeline")](https://app.buddy.works/skillbill-bw/company-site/pipelines/pipeline/253029)


## Development

we use [Jekyll](https://jekyllrb.com/) .


### start dev server

Your terminal must have set ON the "Run command as login shell" as [described here](https://rvm.io/integration/gnome-terminal)

```
gem install jekyll-sass-converter -v 2.1.0
gem install jekyll -v 4.3.2 
gem install bundler -v 2.4.17
bundle install
bundle exec jekyll serve --trace --watch --livereload
```

### with docker

```bash
docker run --rm   --volume="$PWD:/srv/jekyll:Z"   --publish [::1]:4000:4000   jekyll/jekyll   jekyll serve
```

### Public Google Maps

Here https://www.google.com/maps/d/home

## PROD

### NGINX GOOGLE TAG

/etc/nginx/conf.d/www.skillbill.it.conf

```
sub_filter XXXGTAGXXX "XXXXXXXXX";
sub_filter_once off;

```


## Markdown formatting tips

Full Image:
```
{% include image.html url="/uploads/java-16.png" alt="image description" caption="image caption"  %}
```

Inline image:
```
{% include image.html url="/uploads/java-16.png" width="300" alt="image description" caption="image caption"  %}{: .inline .right }
```

Code:
```
{% highlight javascript %}
let x = 1;

// loop
/* yes */
while(true) {
    x++:
}

const buttonNavBar = document.querySelector("button.navbar-toggler")
{% endhighlight %}
```
