import { chooseCardValue } from "./modules/chooseCardValue.js";
import { chooseFormValue } from "./modules/chooseFormValue.js";

const survey = document.querySelector(".survey");
let surveySections = survey.querySelectorAll("section")

let flagOnce = 0;

let count = {
    count: 0
};

let mainDataObj = {}

export function showCurrentSection() {
    surveySections = Array.from(surveySections)
    surveySections.forEach((section, index) => {
        section.classList.remove("show") + "!important"

        if (count.count == index) {
            section.classList.add("show") + "!important";
            section.querySelector(".card-step") && chooseCardValue(section);
            section.querySelector(".form-step") && chooseFormValue(section, index);
        }
    })
}

if (flagOnce === 0) {
    let leadSparteName = document.querySelector("title").innerHTML.split(" ")[0];
    mainDataObj = {
        ...mainDataObj, leadSparte: leadSparteName
    }
    showCurrentSection();
    flagOnce++;
}

export { count, mainDataObj, surveySections }