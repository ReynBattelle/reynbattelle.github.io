const a = document.getElementById("a");
const home = document.getElementById("home");
const projects = document.getElementById("projects");
const contain = document.getElementById("container1A");
const list = document.getElementById("list");

const currentFile = window.location.pathname.split("/").pop();

a.addEventListener("mouseover", () => {
    a.style.cursor  = "pointer";
})

home.addEventListener("mouseover", () => {
    home.style.cursor = "pointer";
})

projects.addEventListener("mouseover", () => {
    projects.style.cursor = "pointer";
})

list.addEventListener("mouseover", () => {
    list.style.cursor = "pointer"
})

a.addEventListener("click", () => {
    document.location = "../";
}); 

home.addEventListener("click", () => {
    document.location = "../index";
})

projects.addEventListener("click", () => {
    document.location = "../html/pastprojects";
})

list.addEventListener("click", () => {

})


if (currentFile == "index") {
    home.style.textDecoration = "underline"
} else if (currentFile == "html/pastprojects") {
    home.style.textDecoration = "underline"
}

function updateVisiblity() {
    if (window.innerWidth <= 500) {
        home.style.visibility = "hidden";
        projects.style.visibility = "hidden";
        contain.style.visibility = "visible";
        home.innerText = "";
        projects.innerText = "";
    } else {
        home.style.visibility = "visible";
        projects.style.visibility = "visible";
        contain.style.visibility = "hidden";
        home.innerText = "Home";
        projects.innerText = "Projects";
    }    
}

updateVisiblity();

window.addEventListener("resize", updateVisiblity);