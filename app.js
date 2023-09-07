const addbtn = document.querySelector("#addbtn")
const main=document.querySelector("#main")
// add notes by button
addbtn.addEventListener(
    "click",
    function(){
        addnote()
    }
)
// save all in local storage
const savenotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
    (note)=>
       { data.push(note.value)
       }
    )
    // console.log(data)
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    
}
//  <div class="note">
//             <div class="tool">

//                 <i class="fas fa-save"></i>
//                 <i class="fas fa-trash"></i>
//             </div>
//             <textarea></textarea>
//         </div> 
const addnote =(text = "")=>{
const note =document.createElement("div");
note.classList.add("note")
note.innerHTML =`
 <div class="tool">

                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea> ${text }</textarea>
        `;

 note.querySelector(".trash").addEventListener(
            "click",
            function(){
                note.remove()
                savenotes()
            }
        )
        note.querySelector(".save").addEventListener(
            "click",
            function(){
                savenotes()
            }
        )
        main.appendChild(note);
        savenotes()
    }
    (
        function(){
            const lsnotes = JSON.parse(localStorage.getItem("notes"));
            if(lsnotes===null){
               addnote() 
            }else{
                lsnotes.forEach(
                    (lsnotes)=>{
                        addnote(lsnotes)
                    }
                )
            }
         
        }
         
        
        )()