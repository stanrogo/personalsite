var historyApiFallback = require('connect-history-api-fallback')

module.exports = function () {
    var root = '';
    var src = root + 'src/';
    var app = src + 'app/';
    var tmp = src + 'tmp/';
    var tmpApp = tmp + 'app/';
    var assets = src + 'assets/';
    var assetsPath = {
        styles: assets + 'styles/',
        images: assets + 'images/',
        fonts: assets + 'fonts/'
    };
    var index = src + 'index.html';
    var tsFiles = [
        app + '**/!(*.spec)+(.ts)'
    ];
    var build = {
        path: 'build/',
        app: 'build/app/',
        fonts: 'build/assets/fonts',
        assetPath: 'build/assets/',
        assets: {
            lib: {
                js: 'lib.js',
                css: 'lib.css'
            }
        }
    };
    var browserSync = {
        dev: {
            port: 3000,
            server: {
                baseDir: './src/',
                middleware: [historyApiFallback()],
                routes: {
                    "/node_modules": "node_modules",
                    "/src": "src"
                }
            },
            files: [
                src + "index.html",
                src + "systemjs.conf.js",
                src + "assets/styles/main.css",
                tmpApp + "**/*.js",
                app + "**/*.css",
                app + "**/*.html"
            ]
        },
        prod: {
            port: 3001,
            server: {
                baseDir: './' + build.path,
                middleware: [historyApiFallback()]
            }
        }
    };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: { DEBUG: false, ENV: 'production' }
        }
    };

    var config = {
        root: root,
        src: src,
        app: app,
        tmp: tmp,
        tmpApp: tmpApp,
        assets: assets,
        index: index,
        build: build,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        browserSync: browserSync,
        systemJs: systemJs
    };

    return config;
};
