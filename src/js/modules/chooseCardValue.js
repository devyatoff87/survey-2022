import { count, showCurrentSection, mainDataObj } from "../app.js"
import { defineProperty } from "./helper.js";

export function chooseCardValue(section) {

    if (section.id == "kalkulieren" && section.classList.contains("show")) {
        setTimeout(() => {
            let newCount = count.count + 1;
            defineProperty(count, "count", newCount)
            showCurrentSection();
        }, 4000)
    }

    // if (section.id == "final" && section.classList.contains("show")) {
    //     setTimeout(() => {
    //         window.location.href = 'https://google.de';
    //     }, 4000)
    // }

    section.querySelectorAll(".custom-card").forEach((elm) => {
        elm.addEventListener("click", () => {
            defineProperty(mainDataObj, section.id, elm.querySelector(".title").innerHTML)
            let newCount = count.count + 1;
            defineProperty(count, "count", newCount)
            showCurrentSection();
        })
    })
}