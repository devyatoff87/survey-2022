import { count, showCurrentSection, mainDataObj } from "../app.js"
import { defineProperty } from "./helper.js";
import { checkValidness } from "./validateInputs.js";

export function chooseFormValue(section) {
    const form = section.querySelector("form")
    const formEls = Array.from(form.elements)
    const btn = section.querySelector(".btn")
    let val;
    let elm;
    formEls.forEach((elm_) => {
        val = elm_.value;
        elm = elm_;
        elm.addEventListener("change", () => {
            val = elm.value
        })
    })

    btn.addEventListener("click", () => {
        const checkIfValid = checkValidness(elm, val);
        if (checkIfValid) {
            let newCount = count.count + 1;
            defineProperty(mainDataObj, section.id, val)
            defineProperty(count, "count", newCount)
            showCurrentSection();
            return
        }
    })
}