import { showCurrentSection, count, mainDataObj } from "../app.js";

export function defineProperty(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        value: val,
        writable: true,
        enumerable: true,
        configurable: true
    });
}

export function showWarning(elm = null, msg = null, alertElm = null) {
    alertElm.classList.add("show")
    alertElm.querySelector("h4").innerHTML = msg;
}

export function nextStep(section, val, index) {
    let newCount = count.count + 1;
    defineProperty(mainDataObj, section.id, val)
    defineProperty(count, "count", newCount)
    showCurrentSection();
}

export function validateEmail(elm, val) {
    if (elm.dataset.type !== undefined && elm.dataset.type == "email") {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");

        ("datatype.chars == email");
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(val)) {
            if (mayBeWarnAlert !== null) {
                showWarning(elm, elm.dataset.msgCorrectinput, mayBeWarnAlert)
            }
            return false
        }
    }
    return true
}

export function validateNumbers(elm, val) {
    (elm);
    if (elm.dataset.type !== undefined && elm.dataset.type == "numbers") {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");
        val = parseInt(val)
        let regex = /\d/;
        if (regex.test(val) == false) {
            if (mayBeWarnAlert !== null) {
                showWarning(elm, elm.dataset.msgCorrectinput, mayBeWarnAlert);
            }
            return false
        }
    }
    return true
}

export function validateChars(elm, val) {
    if (elm.dataset.type !== undefined && elm.dataset.type == "chars") {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");

        ("datatype.chars == null");

        const regex = /^[a-zA-Z]*$/g;
        if (!regex.test(val)) {
            if (mayBeWarnAlert !== null) {
                showWarning(elm, elm.dataset.msgCorrectinput, mayBeWarnAlert)
            }
            return false
        }
    }
    return true
}

export function validateMinAndMax(elm, val) {

    if (elm.min !== -1 && val < elm.min && val > elm.max) {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");

        if (mayBeWarnAlert !== null) {
            showWarning(elm, elm.dataset.msgCorrectinput, mayBeWarnAlert);
        }
        return false
    }
    return true
}

export function validateMaxLength(elm, val) {
    if (elm.maxLength !== -1 && val.length > elm.maxLength) {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");

        ("maxlength == null");
        if (mayBeWarnAlert !== null) {
            showWarning(elm, elm.dataset.msgMaxlength, mayBeWarnAlert);

        }
        return false
    }
    return true
}

export function validateMinLength(elm, val) {
    if (elm.minLength !== -1 && val.length < elm.minLength) {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");
        ("minlength == null");
        if (mayBeWarnAlert !== null) {
            showWarning(elm, elm.dataset.msgMinlength, mayBeWarnAlert);
        }
        return false
    }
    return true
}

export function validateIfNotEmpty(elm, val) {
    if (val == null || val == "" || val == undefined) {
        let mayBeWarnAlert = elm.closest("section").querySelector(".warning-alert");
        ("val == null");
        if (mayBeWarnAlert !== null) {
            showWarning(elm, elm.dataset.msgRequired, mayBeWarnAlert);
        }
        return false
    }
    return true
}