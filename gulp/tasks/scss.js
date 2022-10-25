import dartSass from "sass";
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
import groupMediaQueries from "gulp-group-css-media-queries"
import webpCSS from "gulp-webpcss"
import autoPrefixer from "gulp-autoprefixer"
import cleanCSS from "gulp-clean-css"
import concat from "gulp-concat"

const sass = gulpSass(dartSass)

export const scssTask = () => {
    return app.gulp.src(app.path.src.scss, { sourcemap: true })

        .pipe(concat("style.min.css"))
        .pipe(sass({
            outputStyle: "compressed",
        }))
        .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(groupMediaQueries())
        .pipe(webpCSS({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCSS())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}