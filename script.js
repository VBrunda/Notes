const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");
let notes = document.querySelectorAll(".input");

// fetch existing notes from localStorage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// store notes to localStorage
function noteStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// create new note on click of button 
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// delee the notes on click of delete icon || after each keyup store the entered value into localStorage
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        noteStorage();
    }else if(e.target.tagName === "P"){
        notes  = document.querySelectorAll(".input");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                noteStorage();
            }
        });
    }
});

// for each Enter in the note add a line break instead of adding a new div(notes-container) 
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});