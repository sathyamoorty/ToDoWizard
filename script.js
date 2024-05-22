let inputfield = document.getElementById("input1");
let addbutton = document.querySelector(".textcon button");
let to = document.querySelector(".tasks");
let clear = document.getElementById("clear")

inputfield.onkeyup = () => {
    let userdata = inputfield.value;
    if (userdata.trim() !== "") {
        addbutton.classList.add("active");
    } else {
        addbutton.classList.remove("active");
    }
} 
addbutton.onclick = () => {
    let userdata = inputfield.value;
    let c = localStorage.getItem("new_todo");
    let arr;
    if (c === null) {
        arr = [];
    } else {
        arr = JSON.parse(c);
    }
    arr.push(userdata);
    localStorage.setItem("new_todo", JSON.stringify(arr));
    todo();
}


function todo() {
    let getlocal = localStorage.getItem("new_todo");
    let arr;
    if (getlocal === null) {
        arr = [];
    } else {
        arr = JSON.parse(getlocal);
    }
    let pen = document.getElementById("pen")
    pen.textContent = arr.length;
    let li = '';
    arr.forEach((element, index) => {
        li += `<li>${element} <span onclick="deletetask(${index})"><i class="fa-solid fa-trash"></i></span> </li>`;
    });
    to.innerHTML = li;
    inputfield.value = "";
}

function deletetask(index) {
    let getlocal = localStorage.getItem("new_todo");
    let arr;
    if (getlocal === null) {
        arr = [];
    } else {
        arr = JSON.parse(getlocal);
    }
    arr.splice(index, 1);
    localStorage.setItem("new_todo", JSON.stringify(arr));
    todo();
}

clear.onclick = () => {
    arr = []
    localStorage.setItem("new_todo", JSON.stringify(arr));
    todo();

}
// Call todo function on page load to load existing tasks from local storage
window.onload = todo;
