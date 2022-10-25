import imageMin from "gulp-imagemin"

export const imagesTask = () => {
    return app.gulp.src(app.path.src.img)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMG",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.imageNewer(app.path.build.img))
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream())
}