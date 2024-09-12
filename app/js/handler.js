import { Clock } from "./clock.js";

document.addEventListener("DOMContentLoaded", function() {
    const clock = new Clock(); 
    clock.update(); 


    let buttons = {
        "save": document.getElementById("save")
    }

    let elements = {
        "amount": document.getElementById("amount"),
        "money": document.getElementById("money"),
        "warn": document.getElementById("warn"),
        "info": document.getElementById("info")
    }
    
    buttons.save.addEventListener("click", (e) => {
        const v = elements.amount.value; 

        if (!isNaN(v) && v % 5 == 0 && v !== "") {
            clock.money = v;  
            elements.money.textContent = `${v} ₺`;

            elements.warn.classList.add("d-none");
            elements.info.classList.remove("d-none");
        } else {
            elements.warn.classList.remove("d-none");
            elements.info.classList.add("d-none");
        }
    });

    const modalDismissElements = document.querySelectorAll('[data-bs-dismiss="modal"]');

    modalDismissElements.forEach((element) => {
        element.addEventListener("click", (event) => {
            elements.warn.classList.add("d-none");
            elements.info.classList.add("d-none");
        });
    });

});
