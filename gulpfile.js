import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copyTask } from "./gulp/tasks/copy.js"
import { resetTask } from "./gulp/tasks/rest.js"
import { htmlTask } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js"
import { server } from "./gulp/tasks/server.js"
import { scssTask } from "./gulp/tasks/scss.js"
import { jsTask } from "./gulp/tasks/js.js"
import { imagesTask } from "./gulp/tasks/images.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

const watcher = () => {
    gulp.watch(path.watch.files, copyTask);
    gulp.watch(path.watch.html, htmlTask);
    gulp.watch(path.watch.scss, scssTask);
    gulp.watch(path.watch.js, jsTask);
    gulp.watch(path.watch.img, imagesTask)
}

const mainTasks = gulp.parallel(copyTask, htmlTask, scssTask, jsTask, imagesTask)
const dev = gulp.series(resetTask, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev)