# personalsite

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Generating SSH Keys for Travis Integration
Because we want to deploy via SSH via Travis CI, we need to generate and encrypt an SSH key
that only travis can understand. That way, it can be committed to this repository without any problems.

To do this, we first make sure that we have ruby installed, after which we can install travis:
```
choco install ruby -y
refreshenv
gem install travis
```

We can then run the following commands:
```
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
travis login
travis encrypt-file deploy_rsa --add -r stanrogo/personalsite
```

Then we add the generated public key to our host server, remove the generated files
and add changes to git.

```
rm deploy_rsa
rm deploy_rsa.pub
git add deploy_rsa.enc .travis.yml
```

