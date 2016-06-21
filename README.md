# elasticsearch-seed
Seed project with elasticsearch CRUD and RESTful API

### Folder structure
```sh
.
├── app
│   ├── controllers # api implementations
│   ├── models      # schema definitions
│   ├── routes      # router definitions
│   └── services    # standalone services
├── app.js          # boot and run testing
├── config          # app configurations
│   ├── auth        # authentication libraries(passport)
│   ├── auth.js     # load auth libraries
│   ├── config.js   # basic app settings
│   ├── elasticsearch.js       # handle elasticsearch connection
│   ├── env         # environment settings(respective)
│   ├── express.js  # setup express
│   ├── middlewares # common middlewares
│   └── routes.js   # load app/routes
├── ecosystem.json  # deployment settings
├── lib             # customized libraries
├── package.json
├── public          # static files location
├── README.md       # this file
├── server          # server side scripts, ex. do migration
├── test            # testing scripts
└── test-runner.js  # where testing scripts invoked from
```

### Features
- Elasticsearch ODM style module [elasticsearch-extend](https://www.npmjs.com/package/elasticsearch-extend).
- Deploy using [pm2](http://pm2.keymetrics.io/).
- ES6 syntax(generator, class, etc).

### Pre-install

```sh
npm install -g mocha pm2 concurrently
```

### Install

```sh
npm install
```

### Development

```sh
npm start # local dev environment
npm run log # show local process logs
```
