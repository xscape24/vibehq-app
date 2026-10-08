//Variables

const output=document.querySelector('output');



function cGallery(){
    const gallery=document.createElement('div');
    output.append(gallery);
}








//Functions
function changeScreenLeft(){
   var image=document.getElementById('sound-img');


    var str=image.src;
var ch=str.charAt(str.length-5);
var num=parseInt(ch,10);
num=num-1;
if(num !=0){
ch=num.toString();
str=str.substring(0,str.length-5);
str=str+ch+".jpg";


    document.getElementById("sound-img").setAttribute("src",str);
    document.getElementById("imageSource").value=str;
}


}
function changeScreenRight(){

   var image=document.getElementById("sound-img");


    var str=image.src;
var ch=str.charAt(str.length-5);
var num=parseInt(ch,10);
num=num+1;
if(num<=4){
var ch=num.toString();
str=str.substring(0,str.length-5);
str=str+ch+".jpg";
  document.getElementById("sound-img").setAttribute("src",str);
  document.getElementById("imageSource").value=str;
}

}
  function popupFn() {
            document.getElementById(
                "overlay"
            ).style.display = "block";
            document.getElementById(
                "popupDialog"
            ).style.display = "block";
        }


   function closeFn() {
            document.getElementById(
                "overlay"
            ).style.display = "none";
            document.getElementById(
                "popupDialog"
            ).style.display = "none";
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
       li.style.height="4vh";
       li.style.display="flex";

           li.style.justifyContent = "space-between";
           li.style.gap="5vw";
   li.style.alignItems="center";
    li.style.textAlign="center";
    li.style.marginBottom="1vh";

   li.style.border="1vw soid black";
    li.style.color="orange";
    li.style.fontSize="1vw";

        
        var x =document.createElement("button");
     x.onclick = function() {
    removeItem(li.className);
};
        x.style.backgroundColor="#4a4e60";
        x.style.color="black";
        x.style.height="3.4vh";
        x.style.width="2vw";
        x.style.fontSize="1vw";
        x.style.display="flex";
        x.style.justifyContent="center";
        x.style.alignItems="center";
        x.style.textAlign="center";
        x.style.margin="auto";
        x.innerText="X";
        x.style.fontWeight="300";
        x.style.float="right";

        x.style.borderRadius=".1vw";
        x.style.border="0.1vw solid black";
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
