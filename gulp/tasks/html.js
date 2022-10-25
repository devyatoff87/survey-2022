import fileInclude from "gulp-file-include"
import versionNumber from "gulp-version-number"

export const htmlTask = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, "img/"))
        .pipe(
            versionNumber({
                "value": "%DT%",
                "append": {
                    "key": "_v",
                    "cover": 0,
                    "to": [
                        "css",
                        "js"
                    ]
                },
                "output": {
                    "file": "gulp/verion.json"
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}

