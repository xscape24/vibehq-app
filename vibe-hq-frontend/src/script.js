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