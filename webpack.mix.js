const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
    
mix.browserSync({
    proxy: 'http:commonvalor.org.test',
    browser: 'Google chrome',
    open:'false'
});