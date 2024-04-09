const feature = document.querySelector("#features");
const featureList = document.getElementById("features-items");

const company = document.querySelector("#company");
const companyList = document.getElementById("company-items");

const arrowIcon = document.getElementById("first-arrow");
const arrowIconSecond = document.getElementById("second-arrow");
const pcArrowIcon = document.getElementById("pc-first-arrow");
const pcArrowIconSecond = document.getElementById("pc-second-arrow");

const closeMenu = document.getElementById("close-menu");
const openMenu = document.getElementById("menu-logo");

const pcFeature = document.getElementById("pc-features");
const pcCompany = document.getElementById("pc-company");

feature.addEventListener("click", () => {
    if (featureList.style.display === "flex") {
        featureList.style.display = "none";
        arrowIcon.src = "images/icon-arrow-down.svg";
    } else {
        featureList.style.display = "flex";
        arrowIcon.src = "images/icon-arrow-up.svg";// Change the arrow icon as needed
    }
})

company.addEventListener("click", () => {
    if(companyList.style.display === "flex") {
        companyList.style.display = "none";
        arrowIconSecond.src = "images/icon-arrow-down.svg";
    } else {
        companyList.style.display = "flex";
        arrowIconSecond.src = "images/icon-arrow-up.svg";
    }
})

closeMenu.addEventListener("click", () => {
    document.getElementById("menu-container").style.display = "none";
})

openMenu.addEventListener("click", () => {
    document.getElementById("menu-container").style.display = "flex";
})

pcFeature.addEventListener("mouseover", () => {
    pcArrowIcon.src = "images/icon-arrow-up.svg";
})

pcFeature.addEventListener("mouseleave", () => {
    pcArrowIcon.src = "images/icon-arrow-down.svg";
})


pcCompany.addEventListener("mouseover", () => {
    pcArrowIconSecond.src = "images/icon-arrow-up.svg";
})

pcCompany.addEventListener("mouseleave", () => {
    pcArrowIconSecond.src = "images/icon-arrow-down.svg";
})