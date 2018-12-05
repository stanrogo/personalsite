# personalsite

[![Build Status](https://travis-ci.com/stanrogo/personalsite.svg?branch=master)](https://travis-ci.com/stanrogo/personalsite)
[![Maintainability](https://api.codeclimate.com/v1/badges/50e85e0040327c92f424/maintainability)](https://codeclimate.com/github/stanrogo/personalsite/maintainability)

> Everyone needs a place to call their own, and this is my little nook of the Internet.

This site is built using [Nuxt.js](https://github.com/nuxt/nuxt.js), which provides a way to
build a Vue project, and generate a static site in a fantastic way!

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Accessing the Server
We can access the server via ssh by first generating an ssh key with:
`ssh-keygen -t rsa -b 4096 -C '<user>@stanrogo.com' -f ./<my_file>_rsa`.

We can then add the keys via the GoDaddy CPanel management interface and authorise it in the same place.

Finally we can run: `ssh ssh.stanrogo.com -l <user> -p 22 -i <path_to_private_rsa>`. 

## Generating SSH Keys for Travis Integration
Because we want to deploy via SSH via Travis CI, we need to generate and encrypt an SSH key
that only travis can understand. That way, it can be committed to this repository without any problems.

To do this, we first make sure that we have ruby installed, after which we can install travis:
```
choco install ruby -y
refreshenv
gem install travis
```

We can then run the following commands (**only works using a bash, non-windows, shell e.g. WSL**):
```
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.com' -f ./deploy_rsa
travis login --pro
travis encrypt-file --pro deploy_rsa --add
```

Then we add the generated public key to our host server, remove the generated files
and add changes to git.

```
rm deploy_rsa
rm deploy_rsa.pub
git add deploy_rsa.enc .travis.yml
```

