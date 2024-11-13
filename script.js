function addelement(){
    let container=document.querySelector("#container");
    let input_text=document.querySelector("#input_field");
    let task=input_text.value;
    

    if(task.trim()!==""){
        let new_task=document.createElement("ul");
        new_task.innerText=task;
        // for (const element of new_task) {
    //     console.log(element)
        
    // }
        container.appendChild(new_task);
    }
    
    input_text.value="";
}



function removeelement(){
    let maincotainer=document.querySelector("#container");
    let lastChild=maincotainer.lastChild;
    if(lastChild){
        maincotainer.removeChild(lastChild)
    }
}

function removeall(){
    let maincotainer=document.querySelector("#container");
    maincotainer.innerText="";
}


const saveall=()=>{
let link=document.createElement("a");
const container=document.querySelector("#container");

let task=Array.from(container.children).map(task=>task.innerText).join("\n");
const file=new Blob([task],{type:"text/plain"});
link.href=URL.createObjectURL(file);
link.download="task.txt";
link.click();
// URL.revokeObjectURL(link.href);

}