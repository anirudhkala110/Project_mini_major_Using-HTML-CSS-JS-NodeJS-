const btun = document.getElementById("studentcornerbtn")
const list = document.getElementById("dropdownitems")
list.style.display = "none";

btun.addEventListener('click', (event) => {
    if (list.style.display === "none") {
        list.style.display = "block";
    }
    else {
        list.style.display = "none";
    }
})

