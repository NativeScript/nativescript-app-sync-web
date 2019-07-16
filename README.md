# NativeScript AppSync Web [source](https://github.com/EddyVerbruggen/nativescript-app-sync-web)

AppSync Web is the [AppSync Server](https://github.com/EddyVerbruggen/nativescript-app-sync-server)'s web client.

## INSTALL

```shell
$ cd /path/to/nativescript-app-sync-web
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

## BUILD AND RUN your clone

```shell
$ cd /path/to/nativescript-app-sync-web
$ npm run build -- --release
$ cd ./build
$ npm install
$ node ./server.js
```

## BUILD AND RUN [IN PRODUCTION](https://appsync.nativescript.org)

```shell
$ cd /path/to/nativescript-app-sync-web
$ npm run build -- --release
```

Now commit all files and `git push origin master`, because Heroku deploys upon changes to master.

Check logs with `heroku logs --app nativescript-codepush-web --tail`.

## Based on [this awesome project](https://github.com/lisong/code-push-web)
I had to decide to not officially fork it because of fi. all the Chinese characters
that were hardcoded and needed to be replaced by something I can read myself (English).

## License
MIT License [read](https://github.com/EddyVerbruggen/nativescript-app-sync-web/blob/master/LICENSE.txt)
