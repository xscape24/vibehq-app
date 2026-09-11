//Variables




//Functions
function a(){
    console.log("hello world")
}

function changeMainBox(){
    
    const mainSection=document.getElementById("main-body");
    const box=document.getElementById("settings-box-1");
    console.log("Hello");
}



function changeSettingsBox(int){
    const str="settings-box-"+int;
    const settingsSection=document.getElementById("settings-box-container");
    const selectedBox=document.getElementById(settings-box-1);
    settingsSection.innerHTML=selectedBox.innerHTML;
}





function addItem(){ //add item to list
    var todolist=document.getElementById("tasks-list");
      var li= document.createElement("li");
    var listItems=todolist.getElementsByTagName('li');

    li.setAttribute('class',"item-"+listItems.length);

  
    
    li.style.fontSize="1.5vw";
    li.style.border="none";
    var inputValue =document.getElementById("to-do-input").value;
    
    if(inputValue===''){
        alert("No item entered!");
    }else{
        var text=document.createTextNode(inputValue);
        
       
        li.appendChild(text);
       li.style.height="6vh";
       li.style.display="flex";

           li.style.justifyContent = "space-between";
           li.style.gap="5vw";
   li.style.alignItems="center";
    li.style.textAlign="center";

   li.style.border="1vw soid black";
    li.style.color="black";

        
        var x =document.createElement("button");
     x.onclick = function() {
    removeItem(li.className);
};
        x.style.backgroundColor="#70768d";
        x.style.color="red";
        x.style.height="4.5vh";
        x.style.width="2.5vw";
        x.style.fontSize="2vw";
        x.style.display="flex";
        x.style.justifyContent="center";
        x.style.alignItems="center";
        x.style.textAlign="center";
        x.style.margin="auto";
        x.innerText="X";
        x.style.fontWeight="600";
        x.style.float="right";

        x.style.borderRadius=".3vw";
        x.style.marginLeft="3vw";
        x.className="remove-btn";

        
       
        li.appendChild(x)
      
        
        
        todolist.appendChild(li);
        document.getElementById("to-do-input").placeholder="";
        document.getElementById("to-do-input").value="";
        
    }
}

function removeItem(str){//remove item from list
    var todolist=document.getElementById("tasks-list");
    var items=document.getElementsByTagName("li");
    for(const item of items){
        if(item.className===str){
            todolist.removeChild(item);
        }
    }
  
    
 
}



//Event Listeners
document.getElementById('to-do-input').addEventListener('keydown',function (event){
    if(event.key==='Enter'){//Enter key
        event.preventDefault();
        document.getElementById('add-to-list-btn').click();
        console.log('done');
    }
});


document.getElementById('to-do-input').keypress(function(e){
    if(e.keyCode===13){$('add-to-list-btn').click()}
});