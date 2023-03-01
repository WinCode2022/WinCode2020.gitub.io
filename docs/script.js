"use strict"

function set(i) {
    scrin.value += i;
}

function delAll() {
    scrin.value = "";
    scrin.placeholder = "0"
    tiv = 0;
    flag = "";
}

let tiv = 0;
let flag;

function calc(val) {
    if (val === "+") {
        tiv += Number(scrin.value);
        scrin.value = "";
        scrin.placeholder = "0";
        flag = "plus";

    }
    if (val === "-") {
        tiv += Number(scrin.value);
        scrin.value = "";
        scrin.placeholder = "0";
        flag = "minus";

    }
    if (val === "/") {
        tiv += Number(scrin.value);
        scrin.value = "";
        scrin.placeholder = "0";
        flag = "div";
    }
    if (val === "*") {
        tiv += Number(scrin.value);
        scrin.value = "";
        scrin.placeholder = "0";
        flag = "ang";
    }
    if (val === "=" && flag == "ang") {
        tiv *= Number(scrin.value);
        scrin.value = tiv;
        tiv = 0;
        flag = "";
    }
    if (val === "=" && flag == "div") {
        tiv /= Number(scrin.value);
        scrin.value = tiv;
        tiv = 0;
        flag = "";
    }

    if (val === "=" && flag == "minus") {
        tiv -= Number(scrin.value);
        scrin.value = tiv;
        tiv = 0;
        flag = "";
    }
    if (val === "=" && flag == "plus") {
        tiv += Number(scrin.value);
        scrin.value = tiv;
        tiv = 0;
        flag = "";
    }
}