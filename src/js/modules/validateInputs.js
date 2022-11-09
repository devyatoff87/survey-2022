import { nextStep, validateEmail, validateNumbers, validateChars, validateMinAndMax, validateMaxAndMinLength, validateMinLength, validateMaxLength, validateIfNotEmpty } from "./helper.js";
let val;

export function checkValidness(elms, section, index) {
    console.log(elms);
    for (const elm_ in elms) {
        const elm = elms[elm_];
        val = elms[elm_].value;
        let res;

        res = validateIfNotEmpty(elm, val)
        if (!res) return

        res = validateMinLength(elm, val)
        if (!res) return

        res = validateMaxLength(elm, val)
        if (!res) return

        res = validateMinAndMax(elm, val)
        if (!res) return

        res = validateNumbers(elm, val)
        if (!res) return

        res = validateChars(elm, val)
        if (!res) return

        res = validateEmail(elm, val)
        if (!res) return

    }
    nextStep(section, val, index)
}
