//Variables

const output=document.querySelector('output');



function cGallery(){
    const gallery=document.createElement('div');
    output.append(gallery);
}










function changeScreenLeft(){
    const image=document.getElementById('sound-image');


    var str=image.src;
var ch=str.charAt(str.length-5);
var num=parseInt(ch,10);
num=num-1;
if(num !=0){
ch=String.fromCharCode(num);
str=str.substring(0,str.length-5);
str=str+ch+".jpg";


    document.getElementById('sound-img').setAttribute("src",str);
}


}
function changeScreenRight(){

   const image=document.getElementById('sound-image');


    var str=image.src;
var ch=str.charAt(str.length-5);
var num=parseInt(ch,10);
num=num+1;
ch=String.fromCharCode(num);
str=str.substring(0,str.length-5);
str=str+ch+".jpg";
  document.getElementById('sound-img').setAttribute("src",str);


}