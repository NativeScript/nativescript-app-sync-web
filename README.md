# CodePush Web [source](https://github.com/EddyVerbruggen/code-push-web)

CodePush Web is a [CodePush Server](https://github.com/EddyVerbruggen/code-push-server)'s web client.

## INSTALL

```shell
$ cd /path/to/code-push-web
$ npm install
```

## CONFIGURE

``` shell
$ vim ./src/config #change URL to production
```

## RUN DEV

```shell
$ npm start
```

## BUILD AND RUN IN PRODUCTION

```shell
$ cd /path/to/code-push-web
$ npm run build -- --release
$ cd ./build
$ npm install
$ node ./server.js
```

## Based on [this awesome project](https://github.com/lisong/code-push-web)
I had to decide to not officially fork it because of fi. all the Chinese characters
that were hardcoded and needed to be replaced by something I can read myself (English).

## License
MIT License [read](https://github.com/EddyVerbruggen/code-push-web/blob/master/LICENSE.txt)
