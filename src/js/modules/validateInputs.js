export function checkValidness(elm, val_) {
    let val = val_.trim();
    console.log(elm.dataset.type);

    if (val == null || val == "" || val == undefined) {
        showWarning(elm.dataset.msgRequired);
        return;
    }
    if (elm.minLength !== -1 && val.length < elm.minLength) {
        showWarning(elm.dataset.msgMinlength);
        return;
    }
    if (elm.maxLength !== -1 && val.length > elm.maxLength) {
        showWarning(elm.dataset.msgMaxlength);
        return;
    }
    if (elm.min !== -1 && val < elm.min && val > elm.max) {
        showWarning(elm.dataset.msgCorrectinput);
        return
    }

    if (elm.dataset.type !== -1 && elm.dataset.type == "numbers") {
        val = parseInt(val)
        let regex = /\d/;
        if (regex.test(val) == false) {
            showWarning(elm.dataset.msgCorrectinput);
            return
        }
        return true
    }

    if (elm.dataset.type !== -1 && elm.dataset.type == "chars") {
        const regex = /^[a-zA-Z]*$/g;
        if (!regex.test(val)) {
            showWarning(elm.dataset.msgCorrectinput);
            return
        }
        return true

    }

    else {
        return true
    }
}

function showWarning(msg) {
    console.log(msg)
}