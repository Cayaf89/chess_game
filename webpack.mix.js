const mix = require('laravel-mix');
const fs = require('fs');
require('laravel-mix-merge-manifest');
require('mix-env-file');

mix.env(process.env.ENV_FILE);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'site/[name].[chunkhash].js',
    },
});
mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});


mix.sass('resources/sass/app.scss', 'public/css')
    .js('resources/js/app.js', 'public/js');


var scss_files = fs.readdirSync('resources/views');
scss_files.forEach(dir => {
    var path = 'resources/views/' + dir + '/';
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(file => {
            if (file.indexOf('.scss') !== -1)
                mix.sass(path + file, 'public/css/views');
            else if (file.indexOf('.js') !== -1)
                mix.js(path + file, 'public/js/views');
        });
    }

});

mix.mergeManifest();

if (mix.inProduction()) {
    mix.version();
}
