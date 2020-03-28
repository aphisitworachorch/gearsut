let mix = require('webpack-mix');

mix.sass('src/app.scss', 'css').js('src/app.js', 'js').options({
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
});
