import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}`,
        files: `${buildFolder}/files/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/app.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{svg,jpg,jpeg,png,gif,webp}`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
