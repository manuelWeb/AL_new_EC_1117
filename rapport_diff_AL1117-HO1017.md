43,56c43,47
< var src   = 'evtSrc/**/',
<     img   = 'evtSrc/**/*.{png,jpg,gif,svg}'
<     dest  = 'evtProd/',
<     date  = config.month + config.year + '_',
<     brand = config.brand + '_';
< function errorLog(error) {
<   // console.log(error.toString());
<   notifier.notify({
<     'title': 'Gulp Error !!!',
<     'message': '1-Show Console Error to debug \n 2-Kill gulp process ctrl+c \n 3-debug error'
<   });
<   console.log(error.toString());
<   // this.emit('end');
< }
---
> var src    = config.output,
>     img    = 'evtSrc/**/*.{png,jpg,gif,svg}',
>     dest   = config.dest,
>     date   = config.month + config.year + '_',
>     thname = config.brand;
64,66c55,57
<     // browser   : 'chrome',
<     server    : {
<       baseDir : 'evtProd/FR'
---
>     // browser: 'chrome',
>     server: {
>       baseDir: 'evtProd/FR'
70c61,69
< 
---
> function errorLog(error) {
>   // console.log(error.toString());
>   notifier.notify({
>     'title': 'Gulp Error !!!',
>     'message': '1-Show Console Error to debug \n 2-Kill gulp process ctrl+c \n 3-debug error'
>   });
>   console.log(error.toString());
>   // this.emit('end');
> }
75c74
<   .pipe(changed(img))
---
>   // .pipe(changed(img))
77d75
<   .pipe(browserSync.reload({stream: true }))
81a80
>   .pipe(browserSync.reload({stream: true }))
107,110d105
<   .pipe(changed(dest))
<   // .pipe(rename(function(path) {
<   //   path.dirname += "/../css";
<   // }))
119d113
<   // return gulp.src([src+'*.slim'])
121,122c115
<   // .pipe(plumber())
<   .pipe(slim( {pretty: true, tabsize: 2 })) // {read:false},
---
>   .pipe(slim( {pretty: true, tabsize: 2 }))
128d120
<   // .pipe(changed(dest))
145c137
<   gulp.watch([src+'*.{png,jpg,gif}'],['images'])
---
>   gulp.watch([src+'*.{png,jpg,gif}'],['sass','images'])
148d139
<   gulp.watch(src+'partial/*.slim',['slim','images','script']);
152c143
< // crea cp de dest > preview
---
> 
186,194c177,178
<         .pipe(zip(date + brand + fileName + ".zip"))
<         .pipe(gulp.dest("./zipped"))
<         .on('end', function () {
<           console.log('archive OK');
<           rimraf('evtProd/', function(error){
<             console.log('evtProd/ is deleted')
<           });
<           console.log('supp OK');
<         })
---
>         .pipe(zip(date + thname + fileName + ".zip"))
>         .pipe(gulp.dest("./zipped"));
198a183
>   console.log('archive OK')
223c208
<       parsedHTML('body').map(function(arg, zoneL) {
---
>       parsedHTML('#hpAnimCo').map(function(arg, zoneL) {
227,233c212,214
<         .replace(/(<input("[^"]*"|[^\/">])*)>/g, "$1 />")
<         .replace(/(<br[^\/])/, "<br />")
<         .replace(/<br>/, "<br />")
<         .replace(/&apos;/g, "'")
<         .replace(/&#x20AC;/g, "&euro;")
<         .replace(/&#xE9;/g, "&eacute;")
<         .replace(/&#xC9;/g, "&Eacute;");
---
>         // .replace(/(<br[^\/])/, "<br />")
>         .replace(/<br>/g, "<br />").replace(/(<br[^\s][^\/])/, "<br />").replace(/&apos;/g, "'")
>         .replace(/&#x20AC;/g, "&euro;").replace(/&#xE9;/g, "&eacute;").replace(/&#xC9;/g, "&Eacute;");
268c249
< gulp.task('build',['killCssMap']);
---
> gulp.task('build',['killCssMap']);
\ Pas de fin de ligne à la fin du fichier
