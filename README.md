# nuxt

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

## Dokku deployment


We need to tell Dokku to install the devDependencies of the project (to be able to launch npm run build):
```
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false
```

Also, we want our application to listen on the port 0.0.0.0 and run in production mode:
```
dokku config:set my-nuxt-app HOST=0.0.0.0 NODE_ENV=production
```

Then, we tell Dokku to launch npm run build via the scripts.dokku.predeploy script in our project app.json: create a file name app.json in our project root folder

```
{
  "scripts": {
    "dokku": {
      "predeploy": "npm run build"
    }
  }
}
```

### Dokku mongo

```
dokku mongo:create my-db-name
dokku mongo:link my-db-name my-nuxt-app
dokku mongo:promote my-db-name my-nuxt-app
```

## TODO

### Enable Global API url setting

Variable that stores API url, which by default == ``/api/`` but could also be set to something like ``http://domain.tld/api/``








