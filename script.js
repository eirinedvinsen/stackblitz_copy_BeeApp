const beeIcon = document.querySelector("#beeIcon");
//console.log(beeIcon);

beeIcon.addEventListener("click", function() {
    const body = document.querySelector("body");
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
});