function addelement(){
    let taskContainer=document.querySelector("#newTaskcontainer");
    let input_text=document.querySelector("#input_field");
    let task=input_text.value;
    



    if(task.trim()!==""){
        let new_task=document.createElement("ul");
        new_task.innerText=task;
        
        new_task.style.border="2px"

        new_task.addEventListener("keyup",(event)=>{
            if(event.key==="Enter"){
                let newTask=document.createElement("div");
                newTask.textContent=new_task.value;
                taskContainer.appendChild(newTask)
                new_task.value = "";
            }
            
        })
    let wrapper=document.createElement("div");
    wrapper.style.display="inline-flex";
    wrapper.style.position="relative";

    wrapper.style.border="1px solid black"
    wrapper.style.borderRadius="5px"
    wrapper.style.marginTop="10px"
    wrapper.style.width="auto"
    wrapper.style.height="auto";
    wrapper.style.marginLeft="10px"
    wrapper.style.marginRight="10px"
    wrapper.style.marginTop="30px"
    wrapper.style.transition="transform 0.3s linear, background-color 0.3s linear"
    wrapper.style.transform="scale(1)";
    wrapper.style.cursor="pointer";
    
    wrapper.style.background= "linear-gradient(to right, #fc5c7d, #6a82fb)";
    
    // wrapper.style.zIndex="-5"

    document.body.appendChild(wrapper);
    wrapper.addEventListener("mouseover",()=>{
        wrapper.style.transform="scale(1.1)"
    })

    wrapper.addEventListener("mouseout",()=>{
        wrapper.style.transform="scale(1)"
    })

    let target_div=document.querySelector("#doneTaskcontainer");
    // target_div.style.height="100px";
    // target_div.style.width="100px";

    let finishButton=document.createElement("button");
    finishButton.innerHTML="&#10004;"
    finishButton.style.backgroundColor="blue";
    finishButton.style.color="white";
    finishButton.style.position="absolute";
    finishButton.style.top="17px";
    finishButton.style.left="10px"
    finishButton.style.cursor="pointer";
    finishButton.style.border="none";
    finishButton.style.borderRadius="50%";


    finishButton.addEventListener("click",()=>{
        // let clonedWrapper=wrapper.cloneNode(true);
        let buttons=wrapper.querySelectorAll("button");
        // buttons.style.transform="scale(1)"
        buttons.forEach((element) => element.remove());
        
        target_div.prepend(wrapper)
    })

    // finishButton.addEventListener("click",()=>{
    //     let buttons=wrapper.querySelectorAll("button")
    //     buttons.forEach((buttons)=>buttons.style.transform="scale(1)")
    // })
    

    let remove_Btn=document.createElement("button");
    remove_Btn.innerText="X"
    remove_Btn.style.color="white";
    remove_Btn.style.backgroundColor="red";
    remove_Btn.style.position="absolute";
    remove_Btn.style.left="130px";
    remove_Btn.style.top="17px"
    // remove_Btn.style.right="30px"
    remove_Btn.style.cursor="pointer";
    remove_Btn.style.border="none";
    remove_Btn.style.borderRadius="50%";
    remove_Btn.style.width = "20px"; 
    remove_Btn.style.height = "20px";
    remove_Btn.addEventListener("click",()=>{
        taskContainer.removeChild(wrapper);  
    })
        wrapper.appendChild(finishButton);
        wrapper.appendChild(remove_Btn);
        wrapper.appendChild(new_task);
        taskContainer.appendChild(wrapper);
    }else{
        alert("Please Enter Something")
    }
    
    input_text.value="";

}
    



function removeelement(){
    let maincotainer=document.querySelector("#newTaskcontainer");
    let lastChild=maincotainer.lastChild;
    if(lastChild){
        maincotainer.removeChild(lastChild)
    }
}

// function removeall(){
//     let maincotainer=document.querySelector("#newTaskcontainer");
//     maincotainer.innerText="";
// }


// const saveall=()=>{
// let link=document.createElement("a");
// const container=document.querySelector("#newTaskcontainer");

// let task=Array.from(container.children).map(task=>task.innerText).join("\n");
// const file=new Blob([task],{type:"text/plain"});
// link.href=URL.createObjectURL(file);
// link.download="task.txt";
// link.click();
// URL.revokeObjectURL(link.href);

// }




// document.querySelector("#input_field").addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         addelement(); // Call the addelement function when Enter is pressed
//     }
// });

// }


let enterButton=document.querySelector("#input_field");
enterButton.addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        addelement();
    }
    
});