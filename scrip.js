const addBtn= document.querySelector("#addBtn");
const main=document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea"); // save data in local storage
    console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data)) // fetch data
    }
}

addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)


//<div class="note">
   //         <div class="tool">
     //           <i class="fas fa-save"></i>
       //         <i class="fas fa-trash"></i>
         //   </div>
           // <textarea></textarea>

        //</div>
     // </div>    
const addNote=( text=" ")=>{  // add note
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`
    <div class="tool">   
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea placeholder="importent">${text}</textarea>
    `;

    //delete  note logic
    note.querySelector(".trash").addEventListener("click",
    function(){
        note.remove();     //delet the note
        saveNotes()
    })
    note.querySelector(".save").addEventListener("click",  //save function
    function(){
        saveNotes()

    })
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )

    
  main.appendChild(note);
  saveNotes() //call

}

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()
