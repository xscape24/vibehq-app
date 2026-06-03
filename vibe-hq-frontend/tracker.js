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
    var li= document.createElement("li");
    li.className="todo-item";
    li.style.fontSize="2vw";
    var inputValue =document.getElementById("todo-input").value;
    
    if(inputValue===''){
        alert("No item entered!");
    }else{
        var text=document.createTextNode(inputValue);
        li.appendChild(text);
        
        var x =document.createElement("button");
        x.style.color="red";
        x.style.height="3vw";
        x.style.width="4vw";
        x.style.fontSize="1vw";
        x.innerText="X";

        x.style.borderRadius="1vw";
        x.style.marginLeft="";
        x.className="remove-btn";

        x.id=inputValue;
        li.appendChild(x)
        var todolist=document.getElementById("to-do-list");
        todolist.appendChild(li);
        document.getElementById("todo-input").placeholder="";
        document.getElementById("todo-input").value="Enter an item";
        
    }
}

function removeItem(){//remove item from list
    var todolist=document.getElementById("to-do-list");
    var listItem=document.getElementsByClassName("todo-item")
    
    var inputValue =document.getElementById("todo-input").value;
    todolist.removeChild(listItem);
}



//Event Listeners
document.getElementById('todo-input').addEventListener('keydown',function (event){
    if(event.key==='Enter'){//Enter key
        event.preventDefault();
        document.getElementById('add-to-list-btn').click();
        console.log('done');
    }
});


document.getElementById('todo-input').keypress(function(e){
    if(e.keyCode===13){$('add-to-list-btn').click()}
});