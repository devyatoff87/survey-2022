import { count, showCurrentSection, mainDataObj } from "../app.js"
import { defineProperty } from "./helper.js";
import { checkValidness } from "./validateInputs.js";

export function chooseFormValue(section, index) {
    const form = section.querySelector("form")
    const formEls = Array.from(form.elements)
    const btn = section.querySelector(".btn")

    let valsTemp = {}
    formEls.forEach((elm) => {
        defineProperty(valsTemp, "element", elm);
        elm.addEventListener("change", (event) => {
            if (!event.target.classList.contains("btn")) {
                defineProperty(valsTemp, "element", elm);
            }
        })
    })

    btn.addEventListener("click", (event) => {
        if (event.target.type == "submit") {
            event.preventDefault()
        }


        checkValidness(valsTemp, section, index);

    })
}